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
      className={`fixed bottom-5 right-5 lg:bottom-8 lg:right-8 z-40 transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      {/* Mobile — Refined Rounded-lg Action Badge */}
      <a
        href={getWhatsAppUrl("geral")}
        target="_blank"
        rel="noopener noreferrer"
        className="lg:hidden flex items-center gap-2.5 px-4 py-3 rounded-lg bg-primary-dark text-canvas border border-white/10 shadow-lg hover:bg-accent transition-colors active:scale-95"
        aria-label="Conversar no WhatsApp"
      >
        <MessageCircle className="w-4 h-4 text-canvas" />
        <span className="font-body text-xs font-semibold tracking-wider uppercase">WhatsApp</span>
      </a>

      {/* Desktop — Refined Rounded-lg Action Badge (Image 1 reference) */}
      <a
        href={getWhatsAppUrl("geral")}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden lg:inline-flex px-5 py-3 rounded-lg bg-primary-dark hover:bg-accent text-canvas border border-white/10 shadow-lg hover:shadow-xl transition-all duration-200 items-center gap-2.5"
      >
        <MessageCircle className="w-4 h-4 text-canvas" />
        <span className="font-body text-xs tracking-wider uppercase font-semibold">Conversar no WhatsApp</span>
      </a>
    </div>
  );
}
