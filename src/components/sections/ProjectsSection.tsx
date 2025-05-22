
// src/components/sections/ProjectsSection.tsx
import type { Project } from '@/data/portfolioData'; // Import type from original location
import contentData from '@/data/contentData.json'; // Import data from JSON
import { ProjectCard } from '@/components/cards/ProjectCard';
import { ScrollAnimatedComponent } from '@/components/ui/ScrollAnimatedComponent';

const projects: Project[] = contentData.projectsData; // Type assertion

export function ProjectsSection({ id }: { id: string }) {
  const { title, subtitle } = contentData.projectsSection;
  return (
    <section id={id} className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimatedComponent animationType="fadeIn" className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </ScrollAnimatedComponent>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} animationDelay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
