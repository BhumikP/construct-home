// src/data/portfolioData.ts
export interface ProjectImage {
  url: string;
  alt: string;
  dataAiHint?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  coverImageUrl: string; // Was imageUrl
  dataAiHint?: string; // For coverImageUrl
  galleryImages: ProjectImage[];
  videoUrl?: string; // YouTube embed URL, e.g., https://www.youtube.com/embed/VIDEO_ID
  tags?: string[];
  // Consider adding more detailed fields for the project detail page in the future, e.g.:
  // detailedDescription?: string;
  // client?: string;
  // location?: string;
  // completionDate?: string;
}

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Modern Villa Construction',
    description: 'A stunning modern villa featuring expansive glass walls, open-plan living, and sustainable materials. Completed on time and under budget. This project showcases our expertise in contemporary design and high-end residential construction.',
    coverImageUrl: 'https://placehold.co/800x600.png',
    dataAiHint: 'modern villa luxury',
    galleryImages: [
      { url: 'https://placehold.co/1200x800.png', alt: 'Modern Villa Front View', dataAiHint: 'villa exterior' },
      { url: 'https://placehold.co/1200x800.png', alt: 'Modern Villa Living Room', dataAiHint: 'luxury interior' },
      { url: 'https://placehold.co/1200x800.png', alt: 'Modern Villa Pool Area', dataAiHint: 'villa pool' },
    ],
    tags: ['Residential', 'Modern', 'Luxury', 'Sustainable'],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: '2',
    title: 'Commercial Office Complex "Innovate Hub"',
    description: 'State-of-the-art office complex with energy-efficient design and flexible workspaces. A landmark project in the city center, Innovate Hub provides a dynamic environment for businesses to thrive.',
    coverImageUrl: 'https://placehold.co/800x600.png',
    dataAiHint: 'office building city',
    galleryImages: [
      { url: 'https://placehold.co/1200x800.png', alt: 'Innovate Hub Exterior', dataAiHint: 'modern office' },
      { url: 'https://placehold.co/1200x800.png', alt: 'Innovate Hub Lobby', dataAiHint: 'office interior' },
      { url: 'https://placehold.co/1200x800.png', alt: 'Innovate Hub Aerial View', dataAiHint: 'building aerial' },
    ],
    tags: ['Commercial', 'Office', 'Sustainable', 'Urban'],
    videoUrl: 'https://www.youtube.com/embed/rokGy0huYEA',
  },
  {
    id: '3',
    title: 'Heritage Building Restoration: The Grand Oak Manor',
    description: 'Meticulous restoration of a 19th-century heritage building, The Grand Oak Manor. We preserved its historical charm while upgrading to modern standards, ensuring its legacy for generations to come.',
    coverImageUrl: 'https://placehold.co/800x600.png',
    dataAiHint: 'historic manor restoration',
    galleryImages: [
      { url: 'https://placehold.co/1200x800.png', alt: 'Grand Oak Manor Facade', dataAiHint: 'heritage building' },
      { url: 'https://placehold.co/1200x800.png', alt: 'Grand Oak Manor Interior Detail', dataAiHint: 'historic interior' },
      { url: 'https://placehold.co/1200x800.png', alt: 'Grand Oak Manor Gardens', dataAiHint: 'manor garden' },
    ],
    tags: ['Restoration', 'Heritage', 'Historical', 'Preservation'],
  },
   {
    id: '4',
    title: 'Eco-Friendly Residential Home: "Green Haven"',
    description: 'A beautiful eco-home named "Green Haven", designed with passive solar principles, rainwater harvesting, and locally sourced, sustainable materials. This project exemplifies our commitment to environmentally conscious building practices.',
    coverImageUrl: 'https://placehold.co/800x600.png',
    dataAiHint: 'eco house nature',
    galleryImages: [
      { url: 'https://placehold.co/1200x800.png', alt: 'Green Haven Exterior', dataAiHint: 'sustainable home' },
      { url: 'https://placehold.co/1200x800.png', alt: 'Green Haven Solar Panels', dataAiHint: 'solar panel' },
      { url: 'https://placehold.co/1200x800.png', alt: 'Green Haven Interior Living Space', dataAiHint: 'eco interior' },
    ],
    tags: ['Residential', 'Sustainable', 'Eco-Friendly', 'Green Building'],
    videoUrl: 'https://www.youtube.com/embed/BHACKCNDMW8',
  },
];
