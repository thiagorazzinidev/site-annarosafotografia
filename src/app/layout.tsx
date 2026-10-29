import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://annarosafotografia.com.br"),
  title:
    "Anna Rosa Fotografia | Ensaios Gestante, Família e Casal em Indaiatuba e Região",
  description:
    "Fotografias para sentir, viver e lembrar. Ensaios com luz natural de gestantes, famílias e casais em Indaiatuba, Campinas e região.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    locale: "pt_BR",
    type: "website",
    siteName: "Anna Rosa Fotografia",
    title:
      "Anna Rosa Fotografia | Ensaios Gestante, Família e Casal em Indaiatuba e Região",
    description:
      "Fotografias para sentir, viver e lembrar. Ensaios com luz natural de gestantes, famílias e casais em Indaiatuba, Campinas e região.",
    url: "/",
    images: [
      {
        url: "/images/og-image.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Anna Rosa Fotografia | Ensaios Gestante, Família e Casal em Indaiatuba e Região",
    description:
      "Fotografias para sentir, viver e lembrar. Ensaios com luz natural de gestantes, famílias e casais em Indaiatuba, Campinas e região.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${manrope.variable}`}
    >
      <body className="min-h-screen antialiased">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
