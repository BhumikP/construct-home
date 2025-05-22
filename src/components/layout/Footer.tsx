// src/components/layout/Footer.tsx
import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="#" aria-label="Twitter" className="text-secondary-foreground hover:text-accent transition-colors">
            <Twitter className="h-6 w-6" />
          </Link>
          <Link href="#" aria-label="LinkedIn" className="text-secondary-foreground hover:text-accent transition-colors">
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link href="#" aria-label="GitHub" className="text-secondary-foreground hover:text-accent transition-colors">
            <Github className="h-6 w-6" />
          </Link>
        </div>
        <p className="text-sm">
          &copy; {currentYear} Construct Portfolio. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
