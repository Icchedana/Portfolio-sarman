import type { Metadata } from 'next';
import './globals.css';
import { portfolioData } from '@/lib/portfolio-data';

export const metadata: Metadata = {
  title: `${portfolioData.name} — Portfolio`,
  description: portfolioData.headline,
  openGraph: {
    title: `${portfolioData.name} — Portfolio`,
    description: portfolioData.introduction,
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-background text-foreground antialiased selection:bg-blue-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
