import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://spectrumpcolombia.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin',
          '/admin/*',
          '/login',
          '/login/*',
          '/api/*',
          '/normativa',
          '/proteccion-infantil',
          '/equipo',
        ],
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'ClaudeBot',
          'PerplexityBot',
          'Google-Extended',
          'Amazonbot',
          'Applebot-Extended',
        ],
        allow: [
          '/',
          '/servicios',
          '/productos',
          '/econecta',
          '/nosotros',
          '/contacto',
          '/llms.txt',
          '/llms-full.txt',
        ],
        disallow: ['/admin/*', '/login/*', '/api/*'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
