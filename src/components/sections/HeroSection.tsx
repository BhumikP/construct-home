
// src/components/sections/HeroSection.tsx
"use client"; // Add this directive

import { Button } from '@/components/ui/button';
import { ScrollAnimatedComponent } from '@/components/ui/ScrollAnimatedComponent';
import Image from 'next/image';
import type React from 'react';
import contentData from '@/data/contentData.json';

export function HeroSection({ id }: { id: string }) {
  const scrollToProjects = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const { titlePart1, titleAccent, subtitle } = contentData.heroSection;

  return (
    <section id={id} className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Image/Video */}
      <Image
        src="https://placehold.co/1920x1080.png" // Replace with a high-quality construction-themed image
        alt="Construction background"
        layout="fill"
        objectFit="cover"
        quality={85}
        className="z-0"
        data-ai-hint="construction site"
        priority
      />
      <div className="absolute inset-0 bg-black/60 z-10" /> {/* Overlay */}

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimatedComponent animationType="slideInUp" delay={100}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            {titlePart1}<span className="text-accent">{titleAccent}</span>
          </h1>
        </ScrollAnimatedComponent>
        <ScrollAnimatedComponent animationType="slideInUp" delay={300}>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl text-neutral-200 mb-10">
            {subtitle}
          </p>
        </ScrollAnimatedComponent>
        <ScrollAnimatedComponent animationType="fadeIn" delay={500}>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg" onClick={scrollToProjects}>
            Explore Our Projects
          </Button>
        </ScrollAnimatedComponent>
      </div>
    </section>
  );
}
