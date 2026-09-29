import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SPECTRUMP COLOMBIA S.A.S.',
    short_name: 'SPECTRUMP',
    description:
      'Soluciones integrales de ingeniería, conectividad, telecomunicaciones, energía solar y tecnología ECONECTA® en Colombia.',
    start_url: '/',
    display: 'standalone',
    background_color: '#020617',
    theme_color: '#0088FF',
    icons: [
      {
        src: '/favicon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
