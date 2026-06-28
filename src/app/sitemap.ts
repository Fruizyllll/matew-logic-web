import { MetadataRoute } from 'next';
import generateSitemap from '@/core/seo/sitemap';

export default function sitemap(): MetadataRoute.Sitemap {
  return generateSitemap();
}

export const revalidate = 86400;
