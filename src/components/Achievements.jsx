import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Calendar, MapPin, Search, Sparkles, CheckCircle2 } from 'lucide-react';
import { achievements } from '../data/achievements';
import SpotlightCard from './SpotlightCard';
import ImageModal from './ImageModal';

const badgeColors = {
  amber: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30',
  cyan: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/30',
  emerald: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
  purple: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30',
};

export default function Achievements() {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  return (
    <section id="achievements" className="py-20 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-500 dark:text-amber-400">
            <Trophy className="h-3.5 w-3.5" />
            <span>EXCELLENCE &amp; LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Sports &amp; Extracurricular Honors
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Demonstrating dedication, resilience, tactical agility, and competitive spirit on and off the court.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((item, idx) => {
            const badgeStyle = badgeColors[item.badgeColor] || badgeColors.amber;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <SpotlightCard className="h-full flex flex-col justify-between overflow-hidden group">
                  <div>
                    {/* Media Thumbnail with Focused Face Alignment */}
                    <div
                      onClick={() => setSelectedAchievement(item)}
                      className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 cursor-pointer border-b border-slate-200 dark:border-slate-800"
                    >
                      <img
                        src={item.thumbnail || item.image}
                        alt={item.title}
                        style={{ objectPosition: item.imagePosition || 'center center' }}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-3">
                      <div>
                        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
                          <span className="font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider font-mono">
                            {item.category}
                          </span>
                          <span className="flex items-center gap-1 font-mono">
                            <Calendar className="h-3.5 w-3.5" />
                            {item.year}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs font-medium text-slate-500 mt-0.5">
                          Event: {item.event} &bull; {item.organization}
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      {item.highlights && (
                        <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                          {item.highlights.map((hl, hIdx) => (
                            <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                              <CheckCircle2 className="h-3.5 w-3.5 text-amber-500 mt-0.5 shrink-0" />
                              <span>{hl}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-800/80 mt-2 flex items-center justify-between">
                    {item.position === 'Facilitator' ? (
                      <span className="text-xs font-mono font-bold text-slate-400">
                        Role: <span className="text-slate-800 dark:text-slate-200">Facilitator</span>
                      </span>
                    ) : (
                      <span className="text-xs font-mono font-bold text-slate-400">
                        All India University Squad
                      </span>
                    )}

                    <button
                      onClick={() => setSelectedAchievement(item)}
                      className="text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:underline"
                    >
                      View Photo
                    </button>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Achievement Photo Modal */}
      <ImageModal
        isOpen={Boolean(selectedAchievement)}
        onClose={() => setSelectedAchievement(null)}
        data={selectedAchievement}
      />
    </section>
  );
}
