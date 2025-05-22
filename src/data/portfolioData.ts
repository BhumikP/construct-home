
// src/data/portfolioData.ts

// This file now primarily holds the type definitions for project data.
// The actual data is in src/data/contentData.json

// It's recommended to place your video files in the public/videos/ directory.
// For example, if you have a video named 'my-project-tour.mp4', place it in 'public/videos/my-project-tour.mp4'.
// Then, in your project data (in contentData.json), use the path: videoUrl: '/videos/my-project-tour.mp4'.
// Ensure your video files are optimized for web playback.

export interface ProjectImage {
  url: string;
  alt: string;
  dataAiHint?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  coverImageUrl: string;
  dataAiHint?: string; 
  galleryImages: ProjectImage[];
  videoUrl?: string; // Path to a local video file, e.g., /videos/project-a.mp4
  tags?: string[];
}

// The projectsData array has been moved to src/data/contentData.json
