'use client';

import React from 'react';
import { portfolioData } from '@/lib/portfolio-data';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Experience & Education</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mb-6" />
          <p className="text-slate-400 text-lg">
            My leadership roles, academic background, and professional timeline.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative pl-8 border-l border-slate-700/80 group"
            >
              <div className="absolute -left-3.5 top-0 w-7 h-7 rounded-full bg-slate-800 border-2 border-blue-500 flex items-center justify-center text-blue-400">
                <Briefcase className="w-3.5 h-3.5" />
              </div>
              <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-blue-500/30 transition-all">
                <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {exp.period}
                </span>
                <h3 className="text-xl font-bold text-white mt-3">{exp.role}</h3>
                <h4 className="text-sm font-medium text-slate-400 mb-2">{exp.organization}</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}

          {portfolioData.education.map((edu, index) => (
            <motion.div
              key={edu.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="relative pl-8 border-l border-slate-700/80 group"
            >
              <div className="absolute -left-3.5 top-0 w-7 h-7 rounded-full bg-slate-800 border-2 border-indigo-500 flex items-center justify-center text-indigo-400">
                <GraduationCap className="w-3.5 h-3.5" />
              </div>
              <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-indigo-500/30 transition-all">
                <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  {edu.period}
                </span>
                <h3 className="text-xl font-bold text-white mt-3">{edu.role}</h3>
                <h4 className="text-sm font-medium text-slate-400 mb-2">{edu.organization}</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
