// src/components/sections/ProjectsSection.tsx
import { projectsData, type Project } from '@/data/portfolioData';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { ScrollAnimatedComponent } from '@/components/ui/ScrollAnimatedComponent';

export function ProjectsSection({ id }: { id: string }) {
  return (
    <section id={id} className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimatedComponent animationType="fadeIn" className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Our Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore a selection of our finest construction work, showcasing quality, innovation, and attention to detail.
          </p>
        </ScrollAnimatedComponent>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} animationDelay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
