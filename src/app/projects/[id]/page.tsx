// src/app/projects/[id]/page.tsx
import type { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projectsData, type Project } from '@/data/portfolioData';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Image as ImageIcon, Video as VideoIcon, Info } from 'lucide-react'; // Added Info icon
import { ScrollAnimatedComponent } from '@/components/ui/ScrollAnimatedComponent';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  const metadataBase = new URL(appUrl);
  
  const imageUrl = project.galleryImages.length > 0 
    ? project.galleryImages[0].url 
    : project.coverImageUrl;
  const absoluteImageUrl = imageUrl.startsWith('http') ? imageUrl : `${appUrl}${imageUrl}`;

  return {
    title: `${project.title} | Project Details | Construct Portfolio`,
    description: project.description,
    metadataBase: metadataBase,
    openGraph: {
      title: `${project.title} | Construct Portfolio`,
      description: project.description,
      images: [{
        url: absoluteImageUrl,
        width: 1200,
        height: 630,
        alt: project.title,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Construct Portfolio`,
      description: project.description,
      images: [absoluteImageUrl],
    }
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projectsData.find(p => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-16"> {/* pt-16 for fixed header */}
        <ScrollAnimatedComponent animationType="fadeIn">
          <section className="py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">
              <Button asChild variant="outline" className="mb-4 group inline-flex items-center">
                <Link href="/#projects">
                  <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  Back to All Projects
                </Link>
              </Button>

              <div className="text-center">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6">
                  {project.title}
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  {project.description}
                </p>
              </div>
              
              {/* Image Gallery Carousel */}
              <ScrollAnimatedComponent animationType="slideInUp" delay={100}>
                <Card className="overflow-hidden shadow-xl max-w-4xl mx-auto">
                  <CardHeader className="p-0">
                    {project.galleryImages && project.galleryImages.length > 0 ? (
                      <Carousel
                        opts={{
                          align: "start",
                          loop: true,
                        }}
                        className="w-full"
                      >
                        <CarouselContent>
                          {project.galleryImages.map((image, index) => (
                            <CarouselItem key={index}>
                              <div className="relative w-full aspect-[16/10] bg-muted">
                                <Image
                                  src={image.url}
                                  alt={image.alt || `${project.title} - Image ${index + 1}`}
                                  layout="fill"
                                  objectFit="cover"
                                  className="transition-transform duration-300 hover:scale-105"
                                  data-ai-hint={image.dataAiHint || "project image"}
                                  priority={index === 0} 
                                />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        {project.galleryImages.length > 1 && (
                          <>
                            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/50 hover:bg-background/75 text-primary" />
                            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/50 hover:bg-background/75 text-primary" />
                          </>
                        )}
                      </Carousel>
                    ) : (
                      <div className="relative w-full aspect-[16/10] bg-muted flex items-center justify-center">
                         <ImageIcon className="h-16 w-16 text-muted-foreground" />
                         <p className="text-muted-foreground ml-2">No gallery images available</p>
                      </div>
                    )}
                  </CardHeader>
                  <CardContent className="p-6">
                     <CardTitle className="text-xl flex items-center text-primary">
                       <ImageIcon className="mr-2 h-5 w-5 text-accent" />
                       Project Gallery
                     </CardTitle>
                  </CardContent>
                </Card>
              </ScrollAnimatedComponent>

              {/* Project Video - Conditional */}
              {project.videoUrl && (
                <ScrollAnimatedComponent animationType="slideInUp" delay={200}>
                  <Card className="overflow-hidden shadow-xl max-w-3xl mx-auto">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center text-primary p-6 pb-0">
                        <VideoIcon className="mr-2 h-5 w-5 text-accent" />
                        Project Video
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="aspect-video rounded-lg overflow-hidden border bg-muted">
                        <video
                          src={project.videoUrl}
                          controls
                          className="w-full h-full object-contain"
                          poster="https://placehold.co/1600x900.png?text=Video+Preview" // Generic poster
                          data-ai-hint="video preview"
                        >
                          Your browser does not support the video tag. Please ensure you have placed video files (e.g. MP4) in the `/public/videos` directory and the `videoUrl` in `portfolioData.ts` points to it correctly (e.g., `/videos/your-video.mp4`).
                        </video>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimatedComponent>
              )}

              {/* Project Highlights */}
              <ScrollAnimatedComponent animationType="slideInUp" delay={project.videoUrl ? 300 : 200}>
                 <Card className="shadow-xl max-w-3xl mx-auto">
                    <CardHeader>
                       <CardTitle className="text-xl flex items-center text-primary">
                         <Info className="mr-2 h-5 w-5 text-accent" /> {/* Using Info icon */}
                         Project Highlights
                       </CardTitle>
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
                       <p className="text-muted-foreground">
                         Further details about the project's scope, materials used, challenges overcome, and specific outcomes can be listed here. This section can be expanded as more structured data becomes available for each project. You can describe the client's requirements, the solutions provided, and the overall impact of the project.
                       </p>
                    </CardContent>
                 </Card>
              </ScrollAnimatedComponent>
            </div>
          </section>
        </ScrollAnimatedComponent>
      </main>
      <Footer />
    </div>
  );
}
