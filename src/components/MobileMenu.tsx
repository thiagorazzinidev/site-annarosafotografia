"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { Dialog, DialogDismiss } from "@ariakit/react";
import { getWhatsAppUrl } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      backdrop={
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs transition-opacity" />
      }
      className="fixed right-0 top-0 h-full w-[300px] bg-canvas z-50 shadow-2xl border-l border-border-soft flex flex-col justify-between outline-none"
    >
      {/* Drawer Header */}
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
          <DialogDismiss
            className="p-2 text-muted hover:text-primary-dark transition-colors rounded-lg hover:bg-surface cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary-dark"
            aria-label="Fechar menu de navegação"
          >
            <X className="w-5 h-5" />
          </DialogDismiss>
        </div>

        {/* Navigation Links */}
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
            href="#duvidas"
            onClick={onClose}
            className="font-body text-base text-primary-dark hover:text-accent transition-colors"
          >
            Dúvidas
          </Link>
        </nav>
      </div>

      {/* Drawer Footer CTA — Rounded-lg (Image 1 reference) */}
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
    </Dialog>
  );
}
