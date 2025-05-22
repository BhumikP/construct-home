// src/data/portfolioData.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  dataAiHint?: string;
  videoUrl?: string; // YouTube embed URL, e.g., https://www.youtube.com/embed/VIDEO_ID
  tags?: string[];
  // Consider adding more detailed fields for the project detail page in the future, e.g.:
  // images?: { url: string; alt: string; dataAiHint?: string }[];
  // detailedDescription?: string;
  // client?: string;
  // location?: string;
  // completionDate?: string;
}

// VideoItem interface and videosData removed as the video section is removed.
// Videos are now part of individual project details if available via project.videoUrl.

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Modern Villa Construction',
    description: 'A stunning modern villa featuring expansive glass walls, open-plan living, and sustainable materials. Completed on time and under budget. This project showcases our expertise in contemporary design and high-end residential construction.',
    imageUrl: 'https://placehold.co/800x600.png', // Larger placeholder for detail page
    dataAiHint: 'modern villa luxury',
    tags: ['Residential', 'Modern', 'Luxury', 'Sustainable'],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', 
  },
  {
    id: '2',
    title: 'Commercial Office Complex "Innovate Hub"',
    description: 'State-of-the-art office complex with energy-efficient design and flexible workspaces. A landmark project in the city center, Innovate Hub provides a dynamic environment for businesses to thrive.',
    imageUrl: 'https://placehold.co/800x600.png',
    dataAiHint: 'office building city',
    tags: ['Commercial', 'Office', 'Sustainable', 'Urban'],
    videoUrl: 'https://www.youtube.com/embed/rokGy0huYEA',
  },
  {
    id: '3',
    title: 'Heritage Building Restoration: The Grand Oak Manor',
    description: 'Meticulous restoration of a 19th-century heritage building, The Grand Oak Manor. We preserved its historical charm while upgrading to modern standards, ensuring its legacy for generations to come.',
    imageUrl: 'https://placehold.co/800x600.png',
    dataAiHint: 'historic manor restoration',
    tags: ['Restoration', 'Heritage', 'Historical', 'Preservation'],
    // No video for this project example
  },
   {
    id: '4',
    title: 'Eco-Friendly Residential Home: "Green Haven"',
    description: 'A beautiful eco-home named "Green Haven", designed with passive solar principles, rainwater harvesting, and locally sourced, sustainable materials. This project exemplifies our commitment to environmentally conscious building practices.',
    imageUrl: 'https://placehold.co/800x600.png',
    dataAiHint: 'eco house nature',
    tags: ['Residential', 'Sustainable', 'Eco-Friendly', 'Green Building'],
    videoUrl: 'https://www.youtube.com/embed/BHACKCNDMW8',
  },
];
