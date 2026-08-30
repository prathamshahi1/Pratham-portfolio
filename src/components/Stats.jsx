import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Code2, Award, BookOpen } from 'lucide-react';
import { stats } from '../data/personal';
import SpotlightCard from './SpotlightCard';

const iconMap = {
  FolderGit2: FolderGit2,
  Code2: Code2,
  Award: Award,
  BookOpen: BookOpen,
};

const accentStyles = {
  cyan: {
    bg: 'bg-cyan-500/10 dark:bg-cyan-500/15',
    text: 'text-cyan-600 dark:text-cyan-400',
    border: 'border-cyan-500/20',
    spotlight: 'rgba(6, 182, 212, 0.25)',
  },
  emerald: {
    bg: 'bg-emerald-500/10 dark:bg-emerald-500/15',
    text: 'text-emerald-600 dark:text-emerald-400',
    border: 'border-emerald-500/20',
    spotlight: 'rgba(16, 185, 129, 0.25)',
  },
  amber: {
    bg: 'bg-amber-500/10 dark:bg-amber-500/15',
    text: 'text-amber-600 dark:text-amber-400',
    border: 'border-amber-500/20',
    spotlight: 'rgba(245, 158, 11, 0.25)',
  },
  violet: {
    bg: 'bg-violet-500/10 dark:bg-violet-500/15',
    text: 'text-violet-600 dark:text-violet-400',
    border: 'border-violet-500/20',
    spotlight: 'rgba(139, 92, 246, 0.25)',
  },
};

export default function Stats() {
  return (
    <section className="py-12 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, idx) => {
            const Icon = iconMap[stat.icon] || Code2;
            const style = accentStyles[stat.accent] || accentStyles.cyan;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <SpotlightCard
                  spotlightColor={style.spotlight}
                  className="p-6 h-full flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${style.bg} ${style.text} border ${style.border} transition-transform group-hover:scale-110`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-mono text-xs font-semibold text-slate-400 uppercase">
                      STAT #{idx + 1}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm font-bold text-slate-800 dark:text-slate-200">
                      {stat.label}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {stat.subtext}
                    </p>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
