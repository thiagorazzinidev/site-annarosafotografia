'use client';

import React, { useEffect, useRef } from 'react';

export type BounceCardImage =
  | string
  | {
      src: string;
      alt?: string;
      series?: string;
      title?: string;
      location?: string;
    };

export type BounceCardsProps = {
  images?: BounceCardImage[];
  className?: string;
  style?: React.CSSProperties;
  containerWidth?: number;
  containerHeight?: number;
  cardSize?: number;
  aspectRatio?: 'aspect-square' | 'aspect-[4/5]' | 'aspect-[3/4]';
  spread?: number;
  rotation?: number;
  arc?: number;
  animationDelay?: number;
  animationStagger?: number;
  bounciness?: number;
  enableHover?: boolean;
  pushDistance?: number;
  hoverScale?: number;
  borderWidth?: number;
  borderColor?: string;
  radius?: number;
  shadow?: boolean;
  transformStyles?: string[];
  activeCardIndex?: number;
  onCardClick?: (index: number) => void;
  onCardHover?: (index: number) => void;
};

type Slot = { x: number; y: number; rotate: number };

type Body = {
  x: number;
  y: number;
  rotate: number;
  scale: number;
  vx: number;
  vy: number;
  vr: number;
  vs: number;
  born: number;
};

const ROOT = 'relative touch-pan-y select-none [-webkit-tap-highlight-color:transparent]';
const CARD_BASE =
  'absolute top-1/2 left-1/2 overflow-hidden border-solid [transform:translate(-50%,-50%)_scale(0)] transition-shadow duration-300 will-change-transform';
const CLICKABLE =
  'cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent';
const IMG = 'pointer-events-none block h-full w-full object-cover select-none';

const PATTERN = [1, 0.5, -0.3, -1, 0.2, 0.75, -0.6, 0.35, -0.85, 0.1];

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const parseTransform = (value: string | undefined): Slot | null => {
  if (typeof value !== 'string') return null;
  const rotate = value.match(/rotate\(\s*(-?[\d.]+)deg\s*\)/);
  const translate = value.match(/translate\(\s*(-?[\d.]+)px(?:\s*,\s*(-?[\d.]+)px)?\s*\)/);
  return {
    x: translate ? Number(translate[1]) : 0,
    y: translate && translate[2] ? Number(translate[2]) : 0,
    rotate: rotate ? Number(rotate[1]) : 0
  };
};

const toCard = (item: BounceCardImage) =>
  typeof item === 'string'
    ? { src: item, alt: '', series: '', title: '', location: '' }
    : {
        src: item?.src,
        alt: item?.alt ?? '',
        series: item?.series ?? '',
        title: item?.title ?? '',
        location: item?.location ?? ''
      };

export default function BounceCards({
  images = [],
  className = '',
  style,
  containerWidth = 440,
  containerHeight = 390,
  cardSize = 215,
  aspectRatio = 'aspect-[4/5]',
  spread = 50,
  rotation = 8,
  arc = -15,
  animationDelay = 0.35,
  animationStagger = 0.07,
  bounciness = 0.65,
  enableHover = true,
  pushDistance = 95,
  hoverScale = 1.08,
  borderWidth = 1,
  borderColor = '#E5DFD7',
  radius = 0,
  shadow = true,
  transformStyles,
  activeCardIndex,
  onCardClick,
  onCardHover
}: BounceCardsProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const wakeRef = useRef<(() => void) | null>(null);
  const stateRef = useRef({ hovered: -1, time: 0, layer: -1 });
  const bodiesRef = useRef<Body[]>([]);

  const cards = images.map(toCard);
  const count = cards.length;
  const middle = (count - 1) / 2;
  const reach = Math.max(1, middle);

  const slots = cards.map((_, i): Slot => {
    const custom = transformStyles ? parseTransform(transformStyles[i]) : null;
    if (custom) return custom;
    const offset = i - middle;
    return {
      x: offset * spread,
      y: arc * (offset / reach) ** 2,
      rotate: rotation * PATTERN[i % PATTERN.length]
    };
  });

  const cardHeightRatio =
    aspectRatio === 'aspect-[4/5]' ? 1.25 : aspectRatio === 'aspect-[3/4]' ? 1.333 : 1;
  const computedCardHeight = Math.round(cardSize * cardHeightRatio);

  const settings = {
    slots,
    cardSize: Math.max(10, cardSize),
    cardHeight: computedCardHeight,
    delay: Math.max(0, animationDelay),
    stagger: Math.max(0, animationStagger),
    bounciness: clamp(bounciness, 0, 1),
    enableHover,
    pushDistance,
    hoverScale: clamp(hoverScale, 0.5, 2),
    clickable: typeof onCardClick === 'function'
  };

  const settingsRef = useRef(settings);
  settingsRef.current = settings;
  const clickRef = useRef(onCardClick);
  clickRef.current = onCardClick;
  const hoverRef = useRef(onCardHover);
  hoverRef.current = onCardHover;

  // Synchronize external activeCardIndex if passed
  useEffect(() => {
    if (typeof activeCardIndex === 'number' && activeCardIndex >= -1 && activeCardIndex < count) {
      if (stateRef.current.hovered !== activeCardIndex) {
        stateRef.current.hovered = activeCardIndex;
        wakeRef.current?.();
      }
    }
  }, [activeCardIndex, count]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    const bodies = bodiesRef.current;
    const state = stateRef.current;
    let raf = 0;
    let last = performance.now();
    let alive = true;

    const body = (i: number): Body => {
      if (!bodies[i]) {
        const slot = settingsRef.current.slots[i] ?? { x: 0, y: 0, rotate: 0 };
        bodies[i] = {
          x: slot.x,
          y: slot.y,
          rotate: slot.rotate,
          scale: reduce ? 1 : 0,
          vx: 0,
          vy: 0,
          vr: 0,
          vs: 0,
          born: state.time
        };
      }
      return bodies[i];
    };

    const step = (
      value: number,
      velocity: number,
      target: number,
      stiffness: number,
      damping: number,
      dt: number
    ): [number, number] => {
      const next = velocity + ((target - value) * stiffness - velocity * damping) * dt;
      return [value + next * dt, next];
    };

    const frame = (now: number) => {
      raf = 0;
      if (!alive) return;
      const s = settingsRef.current;
      const dt = Math.min(1 / 30, Math.max(1 / 240, (now - last) / 1000));
      last = now;
      state.time += dt;

      const hovered = s.enableHover ? state.hovered : -1;
      const popStiffness = 170;
      const popDamping = 2 * (1 - 0.85 * s.bounciness) * Math.sqrt(popStiffness);
      const moveStiffness = 210;
      const moveDamping = 2 * (reduce ? 1 : 0.72) * Math.sqrt(moveStiffness);
      const substeps = Math.ceil(dt / (1 / 240));
      const h = dt / substeps;
      let moving = 0;

      for (let i = 0; i < s.slots.length; i++) {
        const el = cardRefs.current[i];
        if (!el) continue;
        const card = body(i);
        const slot = s.slots[i];
        const appeared = reduce || state.time - card.born >= s.delay + i * s.stagger;
        let targetX = slot.x;
        let targetY = slot.y;
        let targetRotate = slot.rotate;
        let targetScale = appeared ? 1 : 0;

        if (hovered >= 0 && appeared) {
          if (i === hovered) {
            targetY = slot.y - s.cardHeight * 0.04;
            targetRotate = 0;
            targetScale = s.hoverScale;
          } else {
            targetX = slot.x + Math.sign(i - hovered) * s.pushDistance;
          }
        }

        for (let k = 0; k < substeps; k++) {
          [card.x, card.vx] = step(card.x, card.vx, targetX, moveStiffness, moveDamping, h);
          [card.y, card.vy] = step(card.y, card.vy, targetY, moveStiffness, moveDamping, h);
          [card.rotate, card.vr] = step(card.rotate, card.vr, targetRotate, moveStiffness, moveDamping, h);
          if (reduce) {
            card.scale = targetScale;
            card.vs = 0;
          } else {
            [card.scale, card.vs] = step(card.scale, card.vs, targetScale, popStiffness, popDamping, h);
          }
        }

        moving +=
          Math.abs(card.vx) +
          Math.abs(card.vy) +
          Math.abs(card.vr) +
          Math.abs(card.vs) * 100 +
          Math.abs(targetX - card.x) +
          Math.abs(targetY - card.y) +
          Math.abs(targetRotate - card.rotate) +
          Math.abs(targetScale - card.scale) * 100 +
          (appeared ? 0 : 1);

        el.style.transform = `translate(-50%, -50%) translate3d(${card.x.toFixed(2)}px, ${card.y.toFixed(2)}px, 0) rotate(${card.rotate.toFixed(3)}deg) scale(${Math.max(0, card.scale).toFixed(4)})`;
      }

      if (state.layer !== hovered) {
        state.layer = hovered;
        cardRefs.current.forEach((el, i) => {
          if (!el) return;
          el.style.zIndex = i === hovered ? String(s.slots.length + 5) : String(i + 1);
          el.style.boxShadow =
            i === hovered
              ? '0 24px 48px -12px rgba(28, 24, 22, 0.35), 0 8px 16px -4px rgba(28, 24, 22, 0.18)'
              : '0 12px 28px -8px rgba(28, 24, 22, 0.18), 0 2px 6px rgba(28, 24, 22, 0.08)';
          el.toggleAttribute('data-active', i === hovered);
        });
      }

      if (moving > 0.02) raf = requestAnimationFrame(frame);
    };

    const wake = () => {
      if (raf || !alive) return;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    };
    wakeRef.current = wake;

    const onLeave = () => {
      if (stateRef.current.hovered !== -1) {
        stateRef.current.hovered = -1;
        wake();
        hoverRef.current?.(-1);
      }
    };

    root.addEventListener('pointerleave', onLeave);
    wake();

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      wakeRef.current = null;
      root.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  useEffect(() => {
    wakeRef.current?.();
  });

  return (
    <div
      ref={rootRef}
      className={`${ROOT}${className ? ` ${className}` : ''}`}
      style={
        {
          width: containerWidth,
          height: containerHeight,
          ...style
        } as React.CSSProperties
      }
    >
      {cards.map((card, i) => (
        <div
          key={i}
          ref={el => {
            cardRefs.current[i] = el;
          }}
          className={settings.clickable ? `${CARD_BASE} ${CLICKABLE}` : CARD_BASE}
          style={{
            width: settings.cardSize,
            height: settings.cardHeight,
            borderRadius: radius,
            borderWidth,
            borderColor,
            backgroundColor: borderColor,
            boxShadow: shadow
              ? '0 12px 28px -8px rgba(28, 24, 22, 0.18), 0 2px 6px rgba(28, 24, 22, 0.08)'
              : 'none',
            zIndex: i + 1
          }}
          onPointerEnter={() => {
            if (stateRef.current.hovered !== i) {
              stateRef.current.hovered = i;
              wakeRef.current?.();
              hoverRef.current?.(i);
            }
          }}
          onClick={e => {
            e.stopPropagation();
            const body = bodiesRef.current[i];
            if (body) body.vs -= 2.2;
            wakeRef.current?.();
            clickRef.current?.(i);
          }}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              clickRef.current?.(i);
            }
          }}
          onFocus={() => {
            stateRef.current.hovered = i;
            wakeRef.current?.();
            hoverRef.current?.(i);
          }}
          {...(settings.clickable
            ? {
                role: 'button',
                tabIndex: 0,
                'aria-label': card.alt || `Card ${i + 1} - ${card.title || ''}`
              }
            : null)}
        >
          {card.src && (
            <div className="relative w-full h-full overflow-hidden">
              <img
                className={IMG}
                src={card.src}
                alt={card.alt}
                draggable={false}
              />

              {/* Archival micro corner badge */}
              <div className="absolute top-2.5 right-2.5 pointer-events-none bg-canvas/90 backdrop-blur-xs px-2 py-0.5 border border-border-soft/80 rounded-none shadow-2xs">
                <span className="font-body text-[9px] uppercase tracking-widest text-primary-dark font-semibold">
                  0{i + 1}
                </span>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
