import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://jimmysriverresort.com';
  const lastModified = new Date();

  // Define your routes
  const routes = [
    {
      url: `${baseUrl}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/rooms`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/rooms/family-rooms`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/rooms/deluxe-rooms`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];

  return routes;
}