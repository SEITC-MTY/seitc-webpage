import type { MetadataRoute } from 'next';

const BASE = 'https://seitc.com.mx';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: BASE,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE}/eventos`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE}/integrantes`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
