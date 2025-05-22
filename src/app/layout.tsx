import type { Metadata } from 'next';
import { Reddit_Sans, Reddit_Mono } from 'next/font/google'; // Changed from Geist
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

// Initialize Reddit Sans font
const redditSans = Reddit_Sans({
  variable: '--font-reddit-sans',
  subsets: ['latin'],
  display: 'swap', // Ensures text remains visible during font loading
});

// Initialize Reddit Mono font
const redditMono = Reddit_Mono({
  variable: '--font-reddit-mono',
  subsets: ['latin'],
  display: 'swap', // Ensures text remains visible during font loading
});

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: 'Construct Portfolio | Quality Construction Services',
  description: 'Showcasing top-quality construction projects, innovative designs, and reliable building services. Explore our work and contact us for your next project.',
  keywords: ['construction', 'building', 'portfolio', 'projects', 'contractor', 'design', 'architecture'],
  metadataBase: new URL(APP_URL),
  openGraph: {
    title: 'Construct Portfolio | Quality Construction Services',
    description: 'Explore our diverse range of construction projects and professional services.',
    url: APP_URL,
    siteName: 'Construct Portfolio',
    images: [
      {
        url: `${APP_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Construct Portfolio Projects Showcase',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Construct Portfolio | Quality Construction Services',
    description: 'Explore our diverse range of construction projects and professional services.',
    images: [`${APP_URL}/twitter-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "ConstructionBusiness",
  "name": "Construct Portfolio",
  "image": `${APP_URL}/logo-schema.png`,
  "url": APP_URL,
  "telephone": "+1-555-123-4567",
  "description": "Specializing in high-quality construction projects, renovations, and new builds. View our portfolio to see our commitment to excellence.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Construct Ave",
    "addressLocality": "Builderville",
    "addressRegion": "CA",
    "postalCode": "90210",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-123-4567",
    "contactType": "customer service"
  },
  "potentialAction": {
    "@type": "ViewAction",
    "target": `${APP_URL}/#projects`
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body 
        className={`${redditSans.variable} ${redditMono.variable} font-sans antialiased`} // Updated font variables
        suppressHydrationWarning={true}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
