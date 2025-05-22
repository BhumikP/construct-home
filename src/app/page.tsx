import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
// VideosSection import removed
import { ContactSection } from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection id="home" />
        <ProjectsSection id="projects" />
        {/* VideosSection component usage removed */}
        <ContactSection id="contact" />
      </main>
      <Footer />
    </div>
  );
}
