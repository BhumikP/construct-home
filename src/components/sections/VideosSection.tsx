// src/components/sections/VideosSection.tsx
import { videosData, type VideoItem } from '@/data/portfolioData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollAnimatedComponent } from '@/components/ui/ScrollAnimatedComponent';

export function VideosSection({ id }: { id: string }) {
  return (
    <section id={id} className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimatedComponent animationType="fadeIn" className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Project Videos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch our projects come to life and hear from our team and clients.
          </p>
        </ScrollAnimatedComponent>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videosData.map((video, index) => (
            <ScrollAnimatedComponent key={video.id} animationType="slideInUp" delay={index * 100}>
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <CardHeader>
                  <div className="aspect-video rounded-t-lg overflow-hidden">
                    <iframe
                      src={video.embedUrl}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardTitle className="text-xl font-semibold mb-2 text-primary">{video.title}</CardTitle>
                  {video.description && (
                    <CardDescription className="text-sm text-muted-foreground line-clamp-3">{video.description}</CardDescription>
                  )}
                </CardContent>
              </Card>
            </ScrollAnimatedComponent>
          ))}
        </div>
      </div>
    </section>
  );
}
