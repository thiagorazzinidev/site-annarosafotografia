'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/constants';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-canvas/90 border-b border-border-soft/60 transition-all">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col group">
            <span className="font-heading text-[22px] sm:text-[24px] font-light text-primary-dark leading-none tracking-tight group-hover:text-accent transition-colors">
              Anna Rosa
            </span>
            <span className="font-body text-[10px] uppercase tracking-[0.25em] text-muted mt-1">
              Fotografia
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link
              href="#"
              className="font-body text-sm text-muted hover:text-primary-dark transition-colors"
            >
              Início
            </Link>
            <Link
              href="#sobre"
              className="font-body text-sm text-muted hover:text-primary-dark transition-colors"
            >
              Sobre
            </Link>
            <Link
              href="#ensaios"
              className="font-body text-sm text-muted hover:text-primary-dark transition-colors"
            >
              Ensaios
            </Link>
            <Link
              href="#portfolio"
              className="font-body text-sm text-muted hover:text-primary-dark transition-colors"
            >
              Galeria
            </Link>
            <Link
              href="#planejar"
              className="font-body text-sm text-accent font-medium hover:text-primary-dark transition-colors flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Monte seu Ensaio
            </Link>
            <Link
              href="#duvidas"
              className="font-body text-sm text-muted hover:text-primary-dark transition-colors"
            >
              Dúvidas
            </Link>
            <a
              href={getWhatsAppUrl('geral')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-dark text-canvas px-6 py-2.5 text-xs tracking-wider uppercase font-body font-semibold rounded-lg hover:bg-accent transition-colors ml-2"
            >
              Vamos conversar
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 text-primary-dark"
            aria-label="Abrir menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
