import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Award, Calendar } from 'lucide-react';

export default function ImageModal({ isOpen, onClose, data }) {
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

  if (!isOpen || !data) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ type: 'spring', damping: 26, stiffness: 320 }}
          className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 text-slate-100 shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950 px-6 py-3.5">
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-amber-400" />
              <span className="text-xs font-semibold tracking-wider text-slate-300 uppercase">
                {data.category || data.type || 'Certificate Document'}
              </span>
            </div>
            <button
              onClick={onClose}
              className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Clean Image Viewport */}
          <div className="flex flex-col md:flex-row overflow-y-auto">
            {/* Certificate Preview Frame */}
            <div className="flex flex-1 items-center justify-center bg-slate-950/80 p-4 sm:p-6 min-h-[280px]">
              <img
                src={data.image}
                alt={data.title}
                className="max-h-[68vh] w-auto max-w-full rounded-lg object-contain shadow-2xl border border-slate-800"
              />
            </div>

            {/* Essential Clean Details Sidebar */}
            <div className="flex w-full flex-col justify-between border-t border-slate-800 bg-slate-900 p-6 md:w-72 md:border-t-0 md:border-l space-y-4">
              <div className="space-y-3">
                <span className="text-[11px] font-mono font-semibold text-cyan-400 uppercase tracking-wider block">
                  {data.category || data.type || 'Verified Certificate'}
                </span>
                
                <h3 className="text-base font-bold text-white leading-snug">
                  {data.title}
                </h3>

                {(data.issuer || data.organization) && (
                  <p className="text-xs text-slate-400">
                    Issued by <span className="text-slate-200 font-semibold">{data.issuer || data.organization}</span>
                  </p>
                )}
              </div>

              {/* Clean Single Action Button */}
              <div className="pt-3 border-t border-slate-800">
                <a
                  href={data.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-cyan-500/20 transition-all hover:opacity-95"
                >
                  <span>Open Full Resolution</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
