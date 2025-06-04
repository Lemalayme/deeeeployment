import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Дмитровдор',
    short_name: 'Дмитровдор',
    description: 'Качественное строительство дорог и сооружений в Московской области',
    start_url: '/dmitrovdor.ru',
    display: 'standalone',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}