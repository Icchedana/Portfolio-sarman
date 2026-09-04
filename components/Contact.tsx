'use client';

import React, { useState } from 'react';
import { portfolioData } from '@/lib/portfolio-data';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mb-6" />
          <p className="text-slate-400 text-lg">
            Have a project in mind or want to connect? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white">Let's build something exceptional together.</h3>
            <p className="text-slate-300 leading-relaxed">
              Whether you are looking for a software developer, web application engineer, UI/UX designer, or collaboration on tech projects, my inbox is always open.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase">Email</h4>
                  <a href={`mailto:${portfolioData.email}`} className="text-white font-medium hover:text-blue-400 transition-colors">
                    {portfolioData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
                <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase">Location</h4>
                  <span className="text-white font-medium">{portfolioData.location}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-slate-800/30 border border-slate-700/50">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-4"
              >
                <div className="w-16 h-16 bg-green-500/10 text-green-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                <p className="text-slate-300">Thank you for reaching out. I will get back to you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="aksarman962@gmail.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Hello Sarman, let's talk about..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/25 flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
