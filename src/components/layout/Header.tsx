// src/components/layout/Header.tsx
"use client";

import Link from 'next/link';
import { Building2, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  // { href: '#videos', label: 'Videos' }, // Removed Videos link
  { href: '#contact', label: 'Contact Us' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);

    let currentSection = ''; // Default to empty if no section is active
    const sections = navLinks.map(link => document.getElementById(link.href.substring(1))).filter(Boolean);
    
    // Find the section that is currently most visible or at the top of the viewport
    let highestVisibleSection: HTMLElement | null = null;
    let highestVisibleSectionTop = Infinity;

    for (const sectionElement of sections) {
        if (sectionElement) {
            const rect = sectionElement.getBoundingClientRect();
            // Check if the section is at all visible in the viewport (top edge is above bottom, bottom edge is below top)
            // and its top is closer to or above the scroll threshold (100px from top)
            if (rect.top < window.innerHeight && rect.bottom > 0 && rect.top < highestVisibleSectionTop && rect.top <= 100) {
                highestVisibleSection = sectionElement;
                highestVisibleSectionTop = rect.top;
            }
        }
    }
    if (highestVisibleSection) {
        currentSection = highestVisibleSection.id;
    } else if (window.scrollY < 200) { // If at the very top, default to home
        currentSection = 'home';
    }
    
    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    event.preventDefault();
    const element = document.getElementById(id.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
       // Manually set active section on click for immediate feedback
      setActiveSection(id.substring(1));
      // Close sheet if in mobile view
      if (event.currentTarget.closest('[data-radix-dialog-content]')) {
        const closeButton = event.currentTarget.closest('[data-radix-dialog-content]')?.querySelector('button[aria-label="Close menu"]');
        if (closeButton instanceof HTMLElement) {
          closeButton.click();
        }
      }
    } else if (id === '/#projects' || id === '/#home' || id === '/#contact') { // Handle navigation from other pages
        window.location.href = id;
    }
  };


  const NavLinkItems = ({isMobile = false}: {isMobile?: boolean}) => navLinks.map((link) => {
    const NavElement = isMobile ? SheetClose : 'a';
    const commonProps = {
        key: link.href,
        href: link.href,
        onClick: scrollToSection(link.href),
        className: cn(
          "px-3 py-2 rounded-md text-sm font-medium transition-colors",
          activeSection === link.href.substring(1)
            ? "text-accent"
            : "text-foreground hover:text-accent/80",
          isMobile && "block w-full text-left text-lg py-3"
        )
    };

    if (isMobile) {
        return (
            <SheetClose asChild key={link.href}>
                <button {...commonProps} type="button" className={commonProps.className}>
                    {link.label}
                </button>
            </SheetClose>
        );
    }

    return (
      <a {...commonProps}>
        {link.label}
      </a>
    );
  });

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/#home" onClick={scrollToSection('/#home')} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <Building2 className="h-8 w-8" />
            <span className="text-xl font-bold">ConstructCo</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            <NavLinkItems />
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-6 w-6 text-primary" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-background p-6">
                <div className="flex flex-col space-y-6">
                  <div className="flex justify-between items-center">
                     <SheetClose asChild>
                        <Link href="/#home" onClick={scrollToSection('/#home')} className="flex items-center gap-2 text-primary">
                            <Building2 className="h-7 w-7" />
                            <span className="text-lg font-bold">ConstructCo</span>
                        </Link>
                     </SheetClose>
                    <SheetClose asChild>
                       <Button variant="ghost" size="icon" aria-label="Close menu">
                          <X className="h-6 w-6 text-primary" />
                       </Button>
                    </SheetClose>
                  </div>
                  <nav className="flex flex-col space-y-2">
                    <NavLinkItems isMobile={true} />
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
