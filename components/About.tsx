'use client';

import React from 'react';
import { portfolioData } from '@/lib/portfolio-data';
import { motion } from 'framer-motion';
import { UserCheck, MapPin, Mail, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-slate-900/40 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">About Me</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mb-6" />
          <p className="text-slate-400 text-lg">
            A quick glimpse into my background, academic pursuits, and professional interests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-slate-200">
              Passionate Developer, Student Leader & Designer
            </h3>
            <p className="text-slate-300 leading-relaxed">
              I am currently pursuing a Bachelor of Science degree in Computer Science and Engineering (CSE). Alongside my rigorous academic training, I serve as a Class Representative and as an Event Coordinator for the CEC Club, cultivating strong leadership and organizational skills.
            </p>
            <p className="text-slate-300 leading-relaxed">
              My expertise spans software development across multiple languages (Python, Kotlin, C#), full-stack web applications, UI/UX design, and commercial e-commerce execution with WooCommerce.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-slate-800/40 border border-slate-700/50">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-sm text-slate-300">{portfolioData.location}</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-slate-800/40 border border-slate-700/50">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-sm text-slate-300 truncate">{portfolioData.email}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold text-white">Academics</h4>
              <p className="text-sm text-slate-400">B.Sc. in Computer Science & Engineering with focus on systems and networking.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                <UserCheck className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold text-white">Leadership</h4>
              <p className="text-sm text-slate-400">Class Representative and CEC Club Event Coordinator driving successful initiatives.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
