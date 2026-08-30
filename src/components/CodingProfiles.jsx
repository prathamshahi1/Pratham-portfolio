import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';
import { GithubIcon, LeetCodeIcon, GeeksforGeeksIcon } from './Icons';
import { codingProfiles } from '../data/personal';
import SpotlightCard from './SpotlightCard';

const platformIcons = {
  LeetCode: LeetCodeIcon,
  GeeksforGeeks: GeeksforGeeksIcon,
  GitHub: GithubIcon,
};

export default function CodingProfiles() {
  return (
    <section id="coding-profiles" className="py-20 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-500 dark:text-emerald-400">
            <Code2 className="h-3.5 w-3.5" />
            <span>COMPETITIVE CODING &amp; OPEN SOURCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Live Coding Profiles &amp; Metrics
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Verified algorithmic problem solving and open-source software contributions across competitive platforms.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {codingProfiles.map((profile, idx) => {
            const Icon = platformIcons[profile.platform] || Code2;

            return (
              <motion.div
                key={profile.platform}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <SpotlightCard className="h-full flex flex-col justify-between p-6 sm:p-7 group">
                  <div>
                    {/* Top Header */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white transition-transform group-hover:scale-110">
                          <Icon className="h-6 w-6 text-cyan-500" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                            {profile.platform}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                      {profile.description}
                    </p>
                  </div>

                  {/* Profile Action Link */}
                  <a
                    href={profile.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 py-3 text-xs font-bold text-slate-900 dark:text-slate-100 transition-colors"
                  >
                    <span>View {profile.platform} Profile</span>
                    <ExternalLink className="h-3.5 w-3.5 text-cyan-500" />
                  </a>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
