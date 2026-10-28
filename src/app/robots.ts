import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'PerplexityBot',
          'ClaudeBot',
          'AnthropicAI',
          'Google-Extended',
          'Applebot-Extended',
          'OAI-SearchBot',
        ],
        allow: '/',
      },
    ],
    sitemap: 'https://annarosafotografia.com.br/sitemap.xml',
  };
}
