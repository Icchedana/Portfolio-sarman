'use client';

import React from 'react';
import { portfolioData } from '@/lib/portfolio-data';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Code, Cpu } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-medium mb-6"
        >
          <Cpu className="w-4 h-4" />
          <span>B.Sc. in CSE Student & Event Coordinator</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6"
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">{portfolioData.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl sm:text-2xl text-slate-300 font-medium max-w-2xl mx-auto mb-6"
        >
          {portfolioData.headline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          {portfolioData.introduction}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/25 group"
          >
            View Projects
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-800 text-slate-200 font-medium hover:bg-slate-700 transition-all border border-slate-700"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center space-x-5 text-slate-400"
        >
          <a href={portfolioData.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-800 hover:text-white border border-slate-700/50 transition-all">
            <Github className="w-5 h-5" />
          </a>
          <a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-800 hover:text-white border border-slate-700/50 transition-all">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href={portfolioData.socials.kaggle} target="_blank" rel="noopener noreferrer" aria-label="Kaggle" className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-800 hover:text-white border border-slate-700/50 transition-all">
            <Code className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
