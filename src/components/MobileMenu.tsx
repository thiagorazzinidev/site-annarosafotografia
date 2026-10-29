"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navegação"
      className="fixed inset-0 z-50 lg:hidden"
    >
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="fixed right-0 top-0 h-full w-[300px] bg-canvas z-10 shadow-2xl border-l border-border-soft flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center px-6 py-5 border-b border-border-soft">
            <div>
              <span className="font-heading text-[22px] font-light text-primary-dark leading-none block">
                Anna Rosa
              </span>
              <span className="font-body text-[10px] uppercase tracking-[0.25em] text-muted block mt-1">
                Fotografia
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-muted hover:text-primary-dark transition-colors rounded-lg hover:bg-surface cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary-dark"
              aria-label="Fechar menu de navegação"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col py-8 px-6 gap-6">
            <Link
              href="#"
              onClick={onClose}
              className="font-body text-base text-primary-dark hover:text-accent transition-colors"
            >
              Início
            </Link>
            <Link
              href="#sobre"
              onClick={onClose}
              className="font-body text-base text-primary-dark hover:text-accent transition-colors"
            >
              Sobre
            </Link>
            <Link
              href="#ensaios"
              onClick={onClose}
              className="font-body text-base text-primary-dark hover:text-accent transition-colors"
            >
              Ensaios
            </Link>
            <Link
              href="#portfolio"
              onClick={onClose}
              className="font-body text-base text-primary-dark hover:text-accent transition-colors"
            >
              Galeria Autoral
            </Link>
            <Link
              href="#planejar"
              onClick={onClose}
              className="font-body text-base text-accent font-medium flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Monte seu Ensaio
            </Link>
            <Link
              href="#estudio"
              onClick={onClose}
              className="font-body text-base text-primary-dark hover:text-accent transition-colors"
            >
              Como Chegar
            </Link>
            <Link
              href="#duvidas"
              onClick={onClose}
              className="font-body text-base text-primary-dark hover:text-accent transition-colors"
            >
              Dúvidas
            </Link>
          </nav>
        </div>

        <div className="p-6 border-t border-border-soft bg-surface/40">
          <a
            href={getWhatsAppUrl("geral")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="block w-full bg-primary-dark text-canvas py-3.5 rounded-lg text-center font-body font-semibold text-xs tracking-wider uppercase hover:bg-accent transition-colors shadow-xs"
          >
            Vamos conversar
          </a>
        </div>
      </div>
    </div>
  );
}
