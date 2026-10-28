'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/constants';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 h-full w-[290px] bg-canvas z-50 shadow-2xl rounded-l-3xl transition-transform duration-300 ease-in-out border-l border-border-soft/60 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
      >
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-border-soft/60">
          <div>
            <span className="font-heading text-[22px] font-light text-primary-dark leading-none block">
              Anna Rosa
            </span>
            <span className="font-body text-[10px] uppercase tracking-[0.25em] text-muted block mt-1">
              Fotografia
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-muted hover:text-primary-dark transition-colors rounded-full hover:bg-surface"
            aria-label="Fechar menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation links */}
        <nav className="flex flex-col py-8 px-6 gap-6">
          <Link
            href="#"
            onClick={onClose}
            className="font-body text-lg text-primary-dark hover:text-accent transition-colors"
          >
            Início
          </Link>
          <Link
            href="#sobre"
            onClick={onClose}
            className="font-body text-lg text-primary-dark hover:text-accent transition-colors"
          >
            Sobre
          </Link>
          <Link
            href="#ensaios"
            onClick={onClose}
            className="font-body text-lg text-primary-dark hover:text-accent transition-colors"
          >
            Ensaios
          </Link>
          <Link
            href="#portfolio"
            onClick={onClose}
            className="font-body text-lg text-primary-dark hover:text-accent transition-colors"
          >
            Galeria Autoral
          </Link>
          <Link
            href="#planejar"
            onClick={onClose}
            className="font-body text-lg text-accent font-medium flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-accent" />
            Monte seu Ensaio
          </Link>
          <Link
            href="#duvidas"
            onClick={onClose}
            className="font-body text-lg text-primary-dark hover:text-accent transition-colors"
          >
            Dúvidas
          </Link>
        </nav>

        {/* Bottom CTA */}
        <div className="px-6 pb-8">
          <a
            href={getWhatsAppUrl('geral')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="block w-full bg-primary-dark text-canvas py-3.5 rounded-full text-center font-body font-medium text-xs tracking-wider uppercase hover:bg-accent transition-all duration-300 shadow-sm"
          >
            Vamos conversar
          </a>
        </div>
      </div>
    </>
  );
}
