import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, FileText, CheckCircle2, Search, Sparkles } from 'lucide-react';
import { publications } from '../data/publications';
import SpotlightCard from './SpotlightCard';
import ImageModal from './ImageModal';

export default function Publications() {
  const [selectedPaper, setSelectedPaper] = useState(null);

  return (
    <section id="publications" className="py-20 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3.5 py-1 text-xs font-semibold text-purple-500 dark:text-purple-400">
            <BookOpen className="h-3.5 w-3.5" />
            <span>RESEARCH &amp; PUBLICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Published Research Work
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Peer-reviewed research and performance benchmarks in distributed web architectures and real-time communications.
          </p>
        </div>

        {/* Publications Grid */}
        <div className="max-w-4xl mx-auto space-y-6">
          {publications.map((pub) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <SpotlightCard className="p-6 sm:p-8 space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  
                  {/* Left Paper Preview Thumbnail */}
                  <div
                    onClick={() => setSelectedPaper(pub)}
                    className="lg:col-span-4 relative group cursor-pointer overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-950 aspect-[4/3] flex items-center justify-center"
                  >
                    <img
                      src={pub.image}
                      alt={pub.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-bold backdrop-blur-xs">
                      <Search className="h-4 w-4 text-cyan-400" />
                      <span>Click to Inspect</span>
                    </div>
                  </div>

                  {/* Right Details */}
                  <div className="lg:col-span-8 space-y-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="rounded-md bg-purple-500/10 px-2.5 py-0.5 text-xs font-bold text-purple-600 dark:text-purple-400 border border-purple-500/20">
                          {pub.status}
                        </span>
                        <span className="text-xs font-mono text-slate-500">
                          {pub.date}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">
                        {pub.title}
                      </h3>
                      <p className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 mt-1">
                        Authors: {pub.authors.join(', ')}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        Venue: {pub.venue}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {pub.abstract}
                    </p>

                    {/* Keywords */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {pub.keywords.map((kw, kwIdx) => (
                        <span
                          key={kwIdx}
                          className="rounded-md border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 px-2 py-0.5 text-[11px] font-mono text-slate-600 dark:text-slate-400"
                        >
                          #{kw}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      {pub.doiUrl && (
                        <a
                          href={pub.doiUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-xs font-bold text-white shadow-md shadow-cyan-500/20 hover:opacity-95 transition-opacity"
                        >
                          <span>IEEE DOI Link</span>
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                      <button
                        onClick={() => setSelectedPaper(pub)}
                        className="flex items-center gap-1.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-4 py-2 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      >
                        <FileText className="h-3.5 w-3.5 text-cyan-500" />
                        <span>Preview Paper</span>
                      </button>
                    </div>
                  </div>

                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox / Modal for Paper Preview */}
      <ImageModal
        isOpen={Boolean(selectedPaper)}
        onClose={() => setSelectedPaper(null)}
        data={selectedPaper}
      />
    </section>
  );
}
