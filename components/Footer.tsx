import React from 'react';
import { portfolioData } from '@/lib/portfolio-data';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-800/80 bg-slate-950/50 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} {portfolioData.name}. All rights reserved. Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
