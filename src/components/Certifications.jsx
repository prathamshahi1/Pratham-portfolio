import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useAnimation } from 'framer-motion';
import { 
  Award, 
  ExternalLink, 
  Search, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  CheckCircle2,
  X,
  MoveHorizontal,
  Hand
} from 'lucide-react';
import { certifications } from '../data/certifications';
import SpotlightCard from './SpotlightCard';
import ImageModal from './ImageModal';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [showAllModal, setShowAllModal] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  
  const containerRef = useRef(null);
  const carouselRef = useRef(null);
  const wheelTimeoutRef = useRef(null);
  const x = useMotionValue(0);
  const controls = useAnimation();

  // Triple the list for a seamless infinite loop in both directions
  const displayList = [...certifications, ...certifications, ...certifications, ...certifications];
  const singleSetWidth = certifications.length * 384; // 360px + 24px gap

  // Continuous auto-scroll from right to left
  useEffect(() => {
    let animationFrameId;
    let lastTime = performance.now();
    const speed = 0.5; // Pixels per frame (~30px/sec)

    const animate = (currentTime) => {
      const delta = currentTime - lastTime;
      lastTime = currentTime;

      if (!isPaused && !isDragging && !showAllModal && carouselRef.current) {
        const currentX = x.get();
        let nextX = currentX - (speed * (delta / 16.66));
        
        // Loop back seamlessly
        if (Math.abs(nextX) >= singleSetWidth * 2) {
          nextX = -singleSetWidth;
        }
        x.set(nextX);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, isDragging, showAllModal, singleSetWidth, x]);

  // Two-Finger Trackpad & Mouse Wheel gesture handler (No click required)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onWheel = (e) => {
      // Prioritize horizontal trackpad swipe (deltaX) or horizontal motion
      const horizontalDelta = Math.abs(e.deltaX) > 0 ? e.deltaX : (e.shiftKey ? e.deltaY : (Math.abs(e.deltaY) > 5 ? e.deltaY * 0.8 : 0));

      if (Math.abs(horizontalDelta) > 0.5) {
        setIsPaused(true);

        if (wheelTimeoutRef.current) clearTimeout(wheelTimeoutRef.current);
        wheelTimeoutRef.current = setTimeout(() => {
          setIsPaused(false);
        }, 1600);

        const currentX = x.get();
        let nextX = currentX - horizontalDelta * 1.15;

        // Wrap boundaries
        if (nextX > 0) {
          nextX = -singleSetWidth + nextX;
        } else if (Math.abs(nextX) >= singleSetWidth * 2.5) {
          nextX = -singleSetWidth;
        }

        x.set(nextX);
      }
    };

    container.addEventListener('wheel', onWheel, { passive: true });
    return () => {
      container.removeEventListener('wheel', onWheel);
      if (wheelTimeoutRef.current) clearTimeout(wheelTimeoutRef.current);
    };
  }, [singleSetWidth, x]);

  const handleManualNudge = (direction) => {
    const shift = direction === 'left' ? -384 : 384;
    const currentX = x.get();
    const targetX = currentX + shift;
    
    controls.start({
      x: targetX,
      transition: { type: 'spring', stiffness: 220, damping: 26 }
    }).then(() => {
      x.set(targetX);
    });
  };

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[700px] rounded-full bg-amber-500/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-500 dark:text-amber-400">
              <Award className="h-3.5 w-3.5" />
              <span>VERIFIED CREDENTIALS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Certifications
            </h2>
          </div>

          {/* Action Header Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowAllModal(true)}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 hover:from-amber-500/30 hover:to-orange-500/30 border border-amber-500/30 px-4 py-2.5 text-xs font-bold text-amber-600 dark:text-amber-400 transition-all shadow-sm"
            >
              <Sparkles className="h-4 w-4 text-amber-500" />
              <span>View All Certificates (10+)</span>
            </button>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => handleManualNudge('right')}
                aria-label="Previous Certificate"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-slate-800 transition-colors shadow-sm"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => handleManualNudge('left')}
                aria-label="Next Certificate"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-slate-800 transition-colors shadow-sm"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Gesture Hint Bar */}
        <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-4 px-1">
          <div className="flex items-center gap-2 text-cyan-500 dark:text-cyan-400">
            <Hand className="h-3.5 w-3.5" />
            <span>Swipe with 2 fingers on trackpad or drag cursor in either direction</span>
          </div>
        </div>

        {/* Interactive Trackpad Gesture & Drag Carousel Container */}
        <div 
          ref={containerRef}
          className="relative overflow-hidden cursor-grab active:cursor-grabbing select-none py-2"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            setIsDragging(false);
          }}
        >
          <motion.div
            ref={carouselRef}
            style={{ x }}
            animate={controls}
            drag="x"
            dragElastic={0.15}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            className="flex gap-6 w-max"
          >
            {displayList.map((cert, idx) => (
              <div
                key={`${cert.id}-${idx}`}
                className="w-[320px] sm:w-[360px] shrink-0"
              >
                <SpotlightCard className="h-full flex flex-col justify-between overflow-hidden group border border-slate-200 dark:border-slate-800/90 shadow-xl bg-white/80 dark:bg-slate-900/90 backdrop-blur-md">
                  <div>
                    {/* Certificate Image Frame */}
                    <div
                      onClick={() => {
                        if (!isDragging) setSelectedCert(cert);
                      }}
                      className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 cursor-pointer border-b border-slate-200 dark:border-slate-800 p-2 flex items-center justify-center"
                    >
                      <img
                        src={cert.image}
                        alt={cert.title}
                        draggable="false"
                        className="h-full w-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
                      />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-bold backdrop-blur-xs">
                        <Search className="h-4 w-4 text-cyan-400" />
                        <span>Click to Enlarge Certificate</span>
                      </div>

                      {/* Category Pill */}
                      <div className="absolute top-3 left-3 rounded-full border border-slate-700 bg-slate-950/85 px-2.5 py-0.5 text-[10px] font-mono font-bold text-cyan-300 backdrop-blur-md">
                        {cert.category}
                      </div>
                    </div>

                    {/* Body Content - Pure Clean Title & Issuer */}
                    <div className="p-5 space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 line-clamp-1">
                          {cert.issuer}
                        </span>
                        <span className="text-[10px] font-mono text-emerald-500 font-semibold flex items-center gap-1 shrink-0">
                          <CheckCircle2 className="h-3 w-3" /> Verified
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors line-clamp-2">
                        {cert.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="p-5 pt-0 border-t border-slate-100 dark:border-slate-800/80 mt-3 flex items-center justify-between gap-2">
                    <button
                      onClick={() => {
                        if (!isDragging) setSelectedCert(cert);
                      }}
                      className="flex items-center gap-1 text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:underline"
                    >
                      <span>View Certificate</span>
                    </button>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      {cert.category}
                    </span>
                  </div>
                </SpotlightCard>
              </div>
            ))}
          </motion.div>
        </div>

      </div>

      {/* 1. Lightbox Modal for Individual Certificate Inspection */}
      <ImageModal
        isOpen={Boolean(selectedCert)}
        onClose={() => setSelectedCert(null)}
        data={selectedCert}
      />

      {/* 2. All Certificates Full Accredited Gallery Modal */}
      <AnimatePresence>
        {showAllModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAllModal(false)}
              className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative z-10 flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 text-slate-100 shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950 px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">All Verified Certifications &amp; Credentials</h3>
                    <p className="text-xs text-slate-400">Authentic credentials from Oracle, Apna College, MySirG, NPTEL IIT Roorkee &amp; Deloitte</p>
                  </div>
                </div>

                <button
                  onClick={() => setShowAllModal(false)}
                  className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Modal Grid Body */}
              <div className="overflow-y-auto p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {certifications.map((cert) => (
                    <div
                      key={cert.id}
                      className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 flex flex-col justify-between space-y-4 hover:border-amber-500/30 transition-all group"
                    >
                      <div className="space-y-3">
                        <div 
                          onClick={() => {
                            setShowAllModal(false);
                            setSelectedCert(cert);
                          }}
                          className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-slate-950 cursor-pointer border border-slate-800 p-1 flex items-center justify-center"
                        >
                          <img
                            src={cert.image}
                            alt={cert.title}
                            className="h-full w-full object-contain rounded transition-transform group-hover:scale-105"
                          />
                        </div>

                        <div>
                          <div className="flex items-center justify-between text-xs text-cyan-400 font-semibold mb-1">
                            <span>{cert.issuer}</span>
                            <span className="text-[10px] font-mono text-slate-500">{cert.category}</span>
                          </div>
                          <h4 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                            {cert.title}
                          </h4>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                        <button
                          onClick={() => {
                            setShowAllModal(false);
                            setSelectedCert(cert);
                          }}
                          className="text-xs font-semibold text-cyan-400 hover:underline"
                        >
                          View Certificate
                        </button>
                        <span className="text-[10px] font-mono text-emerald-400 font-semibold">
                          ✓ Verified
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
