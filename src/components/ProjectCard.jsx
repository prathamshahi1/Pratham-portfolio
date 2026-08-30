import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Info, Sparkles, CheckCircle2, Layers, Eye } from 'lucide-react';
import { GithubIcon } from './Icons';
import SpotlightCard from './SpotlightCard';

export default function ProjectCard({ project, onOpenDetails, isFeatured = false }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageList = project.images && project.images.length > 0 ? project.images : [project.image];

  // Automatically cycle images every 2 seconds (2000ms)
  useEffect(() => {
    if (imageList.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % imageList.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [imageList.length]);

  return (
    <SpotlightCard
      className={`h-full flex flex-col justify-between overflow-hidden group ${
        isFeatured
          ? 'border-cyan-500/30 dark:border-cyan-500/30 ring-1 ring-cyan-500/20'
          : ''
      }`}
    >
      <div>
        {/* Project Image & Interactive Overlay with 2s Auto Slideshow */}
        <div 
          className="relative aspect-video w-full overflow-hidden bg-slate-950 cursor-pointer"
          onClick={() => onOpenDetails(project)}
        >
          {/* Animated Image Slideshow */}
          <div className="relative h-full w-full">
            <AnimatePresence mode="wait">
              <motion.img
                key={imageList[currentImageIndex]}
                src={imageList[currentImageIndex]}
                alt={`${project.title} Preview ${currentImageIndex + 1}`}
                initial={{ opacity: 0.2, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0.2 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </AnimatePresence>
          </div>
          
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent pointer-events-none" />

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full border border-cyan-400/40 bg-slate-950/85 px-3 py-1 text-[11px] font-bold text-cyan-300 backdrop-blur-md z-10">
              <Sparkles className="h-3 w-3 text-cyan-400" />
              <span>FEATURED PROJECT</span>
            </div>
          )}

          {/* Multiple Image Slideshow Indicator */}
          {imageList.length > 1 && (
            <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full border border-white/20 bg-slate-900/80 px-2.5 py-0.5 text-[10px] font-mono font-semibold text-slate-200 backdrop-blur-md z-10">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>
                {project.imageLabels && project.imageLabels[currentImageIndex]
                  ? project.imageLabels[currentImageIndex]
                  : (currentImageIndex === 0 ? 'Dark UI' : 'Light UI')}
              </span>
              <div className="flex gap-1 ml-1">
                {imageList.map((_, idx) => (
                  <span
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentImageIndex ? 'w-3 bg-cyan-400' : 'w-1.5 bg-slate-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Cursor Hover Overlay: Prominent Case Study Details trigger */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 bg-slate-950/75 opacity-0 backdrop-blur-[3px] transition-all duration-300 group-hover:opacity-100 p-4 z-20">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onOpenDetails(project);
              }}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 bg-size-200 bg-pos-0 hover:bg-pos-100 px-5 py-2.5 text-xs font-bold text-white shadow-2xl shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
            >
              <Info className="h-4 w-4 text-white" />
              <span>Case Study Details</span>
            </button>
            <span className="text-[11px] font-mono text-slate-300">
              Click to view architecture &amp; metrics
            </span>
          </div>
        </div>

        {/* Card Content Area */}
        <div className="p-6 space-y-4">
          <div>
            <div className="flex items-center justify-between gap-2 mb-1">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                {project.title}
              </h3>
            </div>
            <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400 mb-2">
              {project.tagline}
            </p>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
              {project.shortDescription}
            </p>
          </div>

          {/* Key Features Bullet Points */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
              {project.highlights.slice(0, 3).map((hl, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                  <CheckCircle2 className="h-3.5 w-3.5 text-cyan-500 mt-0.5 shrink-0" />
                  <span className="line-clamp-1">{hl}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.technologies.slice(0, 5).map((tech, idx) => (
              <span
                key={idx}
                className="rounded-md border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 px-2 py-0.5 text-[11px] font-mono text-slate-700 dark:text-slate-300"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="rounded-md border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 px-2 py-0.5 text-[11px] font-mono text-slate-500">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-800/80 mt-4 flex items-center justify-between gap-2">
        <button
          onClick={() => onOpenDetails(project)}
          className="flex items-center gap-1.5 text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:underline"
        >
          <Info className="h-4 w-4" />
          <span>Case Study Details</span>
        </button>

        <div className="flex items-center gap-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            title="GitHub Repository"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-3.5 py-2 text-xs font-bold text-white shadow-md shadow-cyan-500/20 hover:opacity-95 transition-all"
          >
            <span>Live Demo</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </SpotlightCard>
  );
}
