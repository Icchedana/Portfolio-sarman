'use client';

import React from 'react';
import { portfolioData } from '@/lib/portfolio-data';
import { motion } from 'framer-motion';
import { Code, Globe, Palette, Server } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-5 h-5 text-blue-400" />,
      skills: portfolioData.skills.languages,
    },
    {
      title: 'Web Development',
      icon: <Globe className="w-5 h-5 text-indigo-400" />,
      skills: portfolioData.skills.webDevelopment,
    },
    {
      title: 'Design & UI/UX',
      icon: <Palette className="w-5 h-5 text-purple-400" />,
      skills: portfolioData.skills.design,
    },
    {
      title: 'Systems & Networking',
      icon: <Server className="w-5 h-5 text-cyan-400" />,
      skills: portfolioData.skills.systems,
    },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Technical Skills</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mb-6" />
          <p className="text-slate-400 text-lg">
            Technologies and tools I utilize to build modern software and digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-blue-500/30 transition-all group"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 rounded-xl bg-slate-800 border border-slate-700/60 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-lg bg-slate-800/60 border border-slate-700/40 text-slate-300 text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
