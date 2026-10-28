export const WHATSAPP_NUMBER = "5519999999999";

export const WHATSAPP_MESSAGES = {
  geral: "Olá, Anna! Conheci seu site e gostaria de saber mais sobre seus ensaios fotográficos.",
  gestante: "Olá, Anna! Tenho interesse em um ensaio gestante e gostaria de conhecer as opções e condições.",
  familia: "Olá, Anna! Gostaria de registrar minha família e queria saber mais sobre os ensaios.",
  casal: "Olá, Anna! Tenho interesse em um ensaio de casal e gostaria de conhecer as opções.",
} as const;

export function getWhatsAppUrl(message: keyof typeof WHATSAPP_MESSAGES | string): string {
  const text = WHATSAPP_MESSAGES[message as keyof typeof WHATSAPP_MESSAGES] || message;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const SITE_URL = "https://annarosafotografia.com.br";
export const INSTAGRAM_URL = "https://instagram.com/annarosafotografia";
