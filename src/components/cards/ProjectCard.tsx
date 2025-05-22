// src/components/cards/ProjectCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/data/portfolioData';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { ScrollAnimatedComponent } from '../ui/ScrollAnimatedComponent';

interface ProjectCardProps {
  project: Project;
  animationDelay?: number;
}

export function ProjectCard({ project, animationDelay = 0 }: ProjectCardProps) {
  return (
    <ScrollAnimatedComponent animationType="slideInUp" delay={animationDelay}>
      <Card className="h-full flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
        <CardHeader className="p-0">
          <Link href={`/projects/${project.id}`} aria-label={`View details for ${project.title}`}>
            <div className="relative w-full h-56 cursor-pointer">
              <Image
                src={project.coverImageUrl}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={project.dataAiHint || "architecture"}
              />
            </div>
          </Link>
        </CardHeader>
        <CardContent className="flex-grow p-6">
          <Link href={`/projects/${project.id}`} aria-label={`View details for ${project.title}`} className="hover:underline">
            <CardTitle className="text-xl font-semibold mb-2 text-primary group-hover:text-accent transition-colors">
              {project.title}
            </CardTitle>
          </Link>
          <CardDescription className="text-sm text-muted-foreground mb-4 line-clamp-3">{project.description}</CardDescription>
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
              ))}
            </div>
          )}
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Button asChild variant="default" size="sm" className="bg-primary hover:bg-primary/90 w-full">
            <Link href={`/projects/${project.id}`}>
              View Details <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </ScrollAnimatedComponent>
  );
}
