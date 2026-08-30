import React from 'react';
import { 
  Atom, 
  FileCode2, 
  Palette, 
  Layout, 
  Sparkles, 
  Server, 
  Cpu, 
  Network, 
  ShieldCheck, 
  Database, 
  Layers, 
  Coffee, 
  Binary, 
  Terminal, 
  GitBranch, 
  Code, 
  Send, 
  Cloud, 
  PenTool
} from 'lucide-react';
import { GithubIcon } from './Icons';
import SpotlightCard from './SpotlightCard';

const iconComponents = {
  Atom,
  FileCode2,
  Palette,
  Layout,
  Sparkles,
  Server,
  Cpu,
  Network,
  ShieldCheck,
  Database,
  Layers,
  Coffee,
  Binary,
  Terminal,
  GitBranch,
  Github: GithubIcon,
  Code,
  Send,
  Cloud,
  Figma: PenTool
};

const levelBadges = {
  Proficient: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400',
  Intermediate: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  Advanced: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400',
};

export default function SkillCard({ skill }) {
  const IconComponent = iconComponents[skill.icon] || Code;
  const levelStyle = levelBadges[skill.level] || levelBadges.Proficient;

  return (
    <SpotlightCard className="p-5 h-full flex flex-col justify-between group transition-all duration-300">
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-transform group-hover:scale-110">
            <IconComponent className="h-5 w-5" />
          </div>
          <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${levelStyle}`}>
            {skill.level}
          </span>
        </div>

        <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1 group-hover:text-cyan-500 transition-colors">
          {skill.name}
        </h4>
        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
          {skill.description}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
        <span className="capitalize">{skill.category}</span>
        <span className="text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity">
          Verified ✓
        </span>
      </div>
    </SpotlightCard>
  );
}
