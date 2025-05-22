
// src/app/sitemap.xml/route.ts
import { MetadataRoute } from 'next';
import contentData from '@/data/contentData.json'; // Import data from JSON
import type { Project } from '@/data/portfolioData'; // Import type

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
const projects: Project[] = contentData.projectsData; // Type assertion

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date().toISOString().split('T')[0]; // Current date as YYYY-MM-DD

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: APP_URL,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${APP_URL}/#home`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${APP_URL}/#projects`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${APP_URL}/#contact`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${APP_URL}/projects/${project.id}`,
    lastModified: lastModified, // Or use a project-specific lastModified date if available
    changeFrequency: 'yearly', // Assuming project details don't change often
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages];
}
