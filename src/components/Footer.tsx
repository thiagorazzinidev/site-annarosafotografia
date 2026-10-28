import { INSTAGRAM_URL } from "@/lib/constants";

const navLinks = [
  { label: "Início", href: "#" },
  { label: "Sobre", href: "#sobre" },
  { label: "Ensaios", href: "#ensaios" },
  { label: "Galeria", href: "#portfolio" },
  { label: "Monte seu Ensaio", href: "#planejar" },
  { label: "Dúvidas", href: "#duvidas" },
];

export default function Footer() {
  return (
    <footer className="bg-footer-bg py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Left – Brand */}
          <div>
            <span className="font-heading text-2xl font-light text-canvas">
              Anna Rosa
            </span>
            <span className="block font-body text-[10px] uppercase tracking-[0.25em] text-canvas/70">
              Fotografia
            </span>
            <p className="mt-4 font-body text-sm text-canvas/80">
              Histórias reais. Memórias para sempre.
            </p>
            <p className="mt-2 font-body text-sm text-canvas/60">
              Fotografia de gestantes, famílias e casais.
            </p>
            <p className="font-body text-sm text-canvas/60">
              Indaiatuba, Campinas e região.
            </p>
          </div>

          {/* Right – Navigation */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-sm text-canvas/70 hover:text-canvas transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-canvas/70 hover:text-canvas transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="border-t border-canvas/10 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-body text-xs text-canvas/30">
              © 2026 Anna Rosa Fotografia. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
