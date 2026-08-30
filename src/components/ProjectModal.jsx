import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Layers, Cpu, Database, Shield, Zap, Sparkles, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const imageList = project?.images && project.images.length > 0 ? project.images : [project?.image];

  // Auto-cycle modal image every 2 seconds when open
  useEffect(() => {
    if (!isOpen || imageList.length <= 1) return;
    const interval = setInterval(() => {
      setModalImageIndex((prev) => (prev + 1) % imageList.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isOpen, imageList.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 text-slate-100 shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950/80 px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Layers className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{project.title}</h3>
                <p className="text-xs text-slate-400">{project.tagline}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 rounded-lg bg-cyan-500/10 px-3 py-1.5 text-xs font-semibold text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20 transition-colors"
              >
                <span>Live Demo</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 rounded-lg bg-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-200 border border-slate-700 hover:bg-slate-700 transition-colors"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                <span>Source</span>
              </a>
              <button
                onClick={onClose}
                className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
                aria-label="Close details"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-slate-800 bg-slate-950/50 px-6 overflow-x-auto scrollbar-none">
            {[
              { id: 'overview', label: 'Overview & Solution' },
              { id: 'architecture', label: 'Architecture & APIs' },
              { id: 'features', label: 'Features & Database' },
              { id: 'challenges', label: 'Challenges & Learnings' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-3 text-xs sm:text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'text-cyan-400 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeModalTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Content Body */}
          <div className="overflow-y-auto p-6 space-y-6">
            {/* Tab 1: Overview */}
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* Systematic Device Browser Showcase Frame with 2s Auto Slideshow */}
                <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl">
                  {/* Browser Window Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 bg-slate-950/90 px-4 py-2.5">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
                      <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
                      <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
                      <div className="ml-3 hidden sm:flex items-center gap-2 rounded-md border border-slate-800 bg-slate-900 px-3 py-1 text-[11px] font-mono text-slate-400">
                        <span className="text-emerald-400">🔒</span>
                        <span>{project.liveUrl || 'https://imageinkb.com'}</span>
                      </div>
                    </div>

                    {/* Auto-cycling Indicator Badge */}
                    {imageList.length > 1 && (
                      <div className="flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-mono text-cyan-300">
                        <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                        <span>
                          {project.imageLabels && project.imageLabels[modalImageIndex]
                            ? project.imageLabels[modalImageIndex]
                            : (modalImageIndex === 0 ? 'Dark Mode UI' : 'Light Mode UI')}
                        </span>
                        <div className="flex gap-1 ml-1">
                          {imageList.map((_, idx) => (
                            <span
                              key={idx}
                              className={`h-1.5 rounded-full transition-all duration-300 ${
                                idx === modalImageIndex ? 'w-3 bg-cyan-400' : 'w-1.5 bg-slate-600'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Centered High-Definition Image Viewport with Smooth Cross-Fade */}
                  <div className="relative flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 min-h-[280px] max-h-[460px] overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={imageList[modalImageIndex || 0]}
                        src={imageList[modalImageIndex || 0]}
                        alt={`${project.title} Interface Preview`}
                        initial={{ opacity: 0.2, scale: 0.99 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0.2 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="max-h-[400px] w-auto max-w-full rounded-lg object-contain shadow-2xl border border-slate-800/80"
                      />
                    </AnimatePresence>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-4 space-y-2">
                    <div className="flex items-center gap-2 text-red-400 font-semibold text-sm">
                      <Zap className="h-4 w-4" />
                      <h4>Problem Statement</h4>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                      {project.problemStatement || project.shortDescription}
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-4 space-y-2">
                    <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                      <Sparkles className="h-4 w-4" />
                      <h4>Engineered Solution</h4>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                      {project.solution || project.overview}
                    </p>
                  </div>
                </div>

                {/* Tech Stack Grid */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Technology Stack &amp; Libraries
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 font-mono text-xs font-medium text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tab 2: Architecture & APIs */}
            {activeTab === 'architecture' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-5 space-y-3">
                  <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm">
                    <Cpu className="h-4 w-4" />
                    <h4>System Architecture</h4>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                    {project.architecture || "Modular Client-Server Architecture utilizing RESTful standards and component-driven React state management."}
                  </p>
                </div>

                {project.authentication && (
                  <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-5 space-y-3">
                    <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm">
                      <Shield className="h-4 w-4" />
                      <h4>Security &amp; Authentication</h4>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                      {project.authentication}
                    </p>
                  </div>
                )}

                {project.apiEndpoints && project.apiEndpoints.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Key API Endpoints &amp; Operations
                    </h4>
                    <div className="space-y-2 font-mono text-xs">
                      {project.apiEndpoints.map((ep, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-cyan-300"
                        >
                          <span className="text-slate-500">❯</span>
                          <span>{ep}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* Tab 3: Features & Database */}
            {activeTab === 'features' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Core Functionalities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.highlights.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 rounded-xl border border-slate-800/80 bg-slate-950/60 p-3.5"
                      >
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                        <span className="text-xs sm:text-sm text-slate-200">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {project.databaseSchema && (
                  <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-5 space-y-3">
                    <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
                      <Database className="h-4 w-4" />
                      <h4>Database Schema Design</h4>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-300 font-mono">
                      {project.databaseSchema}
                    </p>
                  </div>
                )}
              </motion.div>
            )}

            {/* Tab 4: Challenges & Learnings */}
            {activeTab === 'challenges' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {project.challenges && project.challenges.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                      Technical Challenges Faced &amp; Solved
                    </h4>
                    <div className="space-y-2.5">
                      {project.challenges.map((ch, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 rounded-xl border border-amber-500/20 bg-amber-500/5 p-3.5 text-xs sm:text-sm text-slate-300"
                        >
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-amber-400 font-mono font-bold text-[10px]">
                            {idx + 1}
                          </span>
                          <span>{ch}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {project.learnings && project.learnings.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                      Key Engineering Insights &amp; Takeaways
                    </h4>
                    <div className="space-y-2.5">
                      {project.learnings.map((lrn, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-3.5 text-xs sm:text-sm text-slate-300"
                        >
                          <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{lrn}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </div>

          {/* Footer Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 bg-slate-950/80 px-6 py-4">
            <div className="text-xs text-slate-400">
              Recruiter-Friendly Case Study • Pure Frontend Data
            </div>
            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-200 transition-colors hover:bg-slate-700"
              >
                <GithubIcon className="h-4 w-4" />
                <span>GitHub Repo</span>
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:opacity-95"
              >
                <span>Launch Demo</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
