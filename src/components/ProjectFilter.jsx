import React from 'react';
import { projectFilters } from '../data/projects';

export default function ProjectFilter({ activeFilter, onSelectFilter }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
      {projectFilters.map((filter) => {
        const isActive = activeFilter === filter.id;
        return (
          <button
            key={filter.id}
            onClick={() => onSelectFilter(filter.id)}
            className={`rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 ${
              isActive
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 scale-105'
                : 'border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300'
            }`}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
