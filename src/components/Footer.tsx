import { INSTAGRAM_URL } from "@/lib/constants";

const navLinks = [
  { label: "Início", href: "#" },
  { label: "Sobre", href: "#sobre" },
  { label: "Ensaios", href: "#ensaios" },
  { label: "Galeria", href: "#portfolio" },
  { label: "Monte seu Ensaio", href: "#planejar" },
  { label: "Como Chegar", href: "#estudio" },
  { label: "Dúvidas", href: "#duvidas" },
];

export default function Footer() {
  return (
    <footer className="bg-night border-t border-white/10 py-20 text-canvas">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left – Brand & Regional Identity (6 cols) */}
          <div className="lg:col-span-6">
            <span className="font-heading text-3xl font-light text-canvas block leading-none">
              Anna Rosa
            </span>
            <span className="block font-body text-[10px] uppercase tracking-[0.25em] text-canvas/50 mt-1.5">
              Fotografia Documental e de Afeto
            </span>
            <p className="mt-6 font-body text-sm text-canvas/70 max-w-sm leading-relaxed">
              Fotografias para sentir, viver e lembrar. Ensaios com luz natural de gestantes, famílias e casais.
            </p>
            <p className="mt-3 font-body text-xs text-canvas/40 tracking-wider uppercase">
              Indaiatuba · Campinas · São Paulo
            </p>
          </div>

          {/* Right – Navigation & Social (6 cols) */}
          <div className="lg:col-span-6 flex flex-col sm:flex-row justify-between gap-10">
            <div>
              <span className="font-body text-[11px] uppercase tracking-[0.2em] text-canvas/40 block mb-4 font-medium">
                Navegação
              </span>
              <ul className="space-y-3 font-body text-sm">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-canvas/70 hover:text-canvas transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="font-body text-[11px] uppercase tracking-[0.2em] text-canvas/40 block mb-4 font-medium">
                Conectar
              </span>
              <ul className="space-y-3 font-body text-sm">
                <li>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-canvas/70 hover:text-canvas transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#planejar"
                    className="text-canvas/70 hover:text-canvas transition-colors"
                  >
                    Ateliê de Ensaios
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-canvas/30 font-body">
          <p>© 2026 Anna Rosa Fotografia. Todos os direitos reservados.</p>
          <p>Indaiatuba, Campinas e região.</p>
        </div>
      </div>
    </footer>
  );
}
