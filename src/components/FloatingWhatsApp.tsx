"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > document.body.scrollHeight * 0.25);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 lg:bottom-8 lg:right-8 z-50 transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      {/* Mobile – ergonomic pill floating bar */}
      <a
        href={getWhatsAppUrl("geral")}
        target="_blank"
        rel="noopener noreferrer"
        className="lg:hidden flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-primary-dark text-canvas border border-border-soft/30 shadow-xl hover:bg-accent transition-all duration-300 active:scale-95"
        aria-label="Conversar no WhatsApp"
      >
        <MessageCircle className="w-5 h-5 text-accent-light" />
        <span className="font-body text-xs font-semibold tracking-wider uppercase">WhatsApp</span>
      </a>

      {/* Desktop – refined studio pill badge */}
      <a
        href={getWhatsAppUrl("geral")}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden lg:inline-flex px-6 py-3.5 rounded-full bg-primary-dark hover:bg-accent text-canvas border border-border-soft/20 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 items-center gap-3 group"
      >
        <MessageCircle className="w-4 h-4 text-accent-light group-hover:text-canvas transition-colors" />
        <span className="font-body text-xs tracking-wider uppercase font-semibold">Conversar no WhatsApp</span>
      </a>
    </div>
  );
}
