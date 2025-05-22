// src/app/projects/[id]/page.tsx
import type { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projectsData, type Project } from '@/data/portfolioData';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Image as ImageIcon, Video as VideoIcon } from 'lucide-react';
import { ScrollAnimatedComponent } from '@/components/ui/ScrollAnimatedComponent';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return {
      title: 'Project Not Found | Construct Portfolio',
    };
  }

  // Dynamically set APP_URL for metadataBase
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  const metadataBase = new URL(appUrl);

  return {
    title: `${project.title} | Project Details | Construct Portfolio`,
    description: project.description,
    metadataBase: metadataBase,
    openGraph: {
      title: `${project.title} | Construct Portfolio`,
      description: project.description,
      images: project.imageUrl ? [{
        url: project.imageUrl.startsWith('http') ? project.imageUrl : `${appUrl}${project.imageUrl}`, // Ensure absolute URL
        width: 1200, // Adjust as needed
        height: 630,  // Adjust as needed
        alt: project.title,
      }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Construct Portfolio`,
      description: project.description,
      images: project.imageUrl ? [project.imageUrl.startsWith('http') ? project.imageUrl : `${appUrl}${project.imageUrl}`] : [],
    }
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projectsData.find(p => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16 bg-background"> {/* pt-16 for fixed header */}
        <ScrollAnimatedComponent animationType="fadeIn">
          <section className="py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <Button asChild variant="outline" className="mb-8 group">
                <Link href="/#projects">
                  <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  Back to All Projects
                </Link>
              </Button>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6 md:mb-8 text-center">
                {project.title}
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 md:mb-12 text-center max-w-3xl mx-auto">
                {project.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
                <ScrollAnimatedComponent animationType="slideInLeft" delay={100} className="md:sticky md:top-24">
                  <Card className="overflow-hidden shadow-xl">
                    <CardHeader className="p-0">
                      <div className="relative w-full aspect-[4/3] bg-muted">
                        <Image
                          src={project.imageUrl}
                          alt={project.title}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-300 hover:scale-105"
                          data-ai-hint={project.dataAiHint || "project image"}
                          priority
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                       <CardTitle className="text-xl flex items-center text-primary">
                         <ImageIcon className="mr-2 h-5 w-5 text-accent" />
                         Project Snapshot
                       </CardTitle>
                    </CardContent>
                  </Card>
                </ScrollAnimatedComponent>

                <div className="space-y-8">
                  {project.videoUrl && (
                    <ScrollAnimatedComponent animationType="slideInRight" delay={200}>
                      <Card className="overflow-hidden shadow-xl">
                        <CardHeader>
                          <CardTitle className="text-xl flex items-center text-primary p-6 pb-0">
                            <VideoIcon className="mr-2 h-5 w-5 text-accent" />
                            Project Video
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                          <div className="aspect-video rounded-lg overflow-hidden border">
                            <iframe
                              src={project.videoUrl}
                              title={`${project.title} Video`}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="w-full h-full"
                            ></iframe>
                          </div>
                        </CardContent>
                      </Card>
                    </ScrollAnimatedComponent>
                  )}

                  <ScrollAnimatedComponent animationType="slideInRight" delay={project.videoUrl ? 300 : 200}>
                     <Card className="shadow-xl">
                        <CardHeader>
                           <CardTitle className="text-xl text-primary">Project Highlights</CardTitle>
                        </CardHeader>
                        <CardContent>
                           {project.tags && project.tags.length > 0 && (
                            <div className="mb-4">
                              <h3 className="text-lg font-semibold text-secondary-foreground mb-2">Categories:</h3>
                              <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                  <span key={tag} className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                                ))}
                              </div>
                            </div>
                          )}
                          {/* Add more details here if available in project data */}
                           <p className="text-muted-foreground">Further details about the project's scope, materials used, challenges overcome, and specific outcomes can be listed here. This section can be expanded as more structured data becomes available for each project.</p>
                        </CardContent>
                     </Card>
                  </ScrollAnimatedComponent>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimatedComponent>
      </main>
      <Footer />
    </div>
  );
}
