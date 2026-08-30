import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Target, 
  Compass, 
  Code, 
  CheckCircle2, 
  Sparkles, 
  Laptop,
  GraduationCap
} from 'lucide-react';
import { personalInfo } from '../data/personal';
import SpotlightCard from './SpotlightCard';

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold text-cyan-500 dark:text-cyan-400">
            <User className="h-3.5 w-3.5" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Engineering High-Impact Digital Experiences
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            A comprehensive overview of my technical foundation, engineering philosophies, and future ambitions.
          </p>
        </div>

        {/* Two-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Biography & Career Focus */}
          <div className="lg:col-span-7 space-y-6">
            <SpotlightCard className="p-6 sm:p-8 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-cyan-500 font-bold text-sm">
                  <Compass className="h-4 w-4" />
                  <span>PROFESSIONAL SUMMARY</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                  {personalInfo.summary}
                </p>
              </div>

              {/* Development Interests */}
              <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2 text-emerald-500 font-bold text-sm">
                  <Laptop className="h-4 w-4" />
                  <span>CORE TECHNICAL FOCUS &amp; INTERESTS</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {personalInfo.developmentInterests.map((interest, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 rounded-xl bg-slate-100/60 dark:bg-slate-950/40 p-3 text-xs sm:text-sm text-slate-800 dark:text-slate-300 border border-slate-200/50 dark:border-slate-800/50"
                    >
                      <CheckCircle2 className="h-4 w-4 text-cyan-500 mt-0.5 shrink-0" />
                      <span>{interest}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Goals */}
              <div className="space-y-2 pt-4 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2 text-amber-500 font-bold text-sm">
                  <Target className="h-4 w-4" />
                  <span>CAREER ASPIRATION</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {personalInfo.careerGoals}
                </p>
              </div>
            </SpotlightCard>
          </div>

          {/* Right Column: Visual Highlights & Attributes */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <SpotlightCard className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-cyan-500">
                    ENGINEERING VALUES
                  </span>
                  <Sparkles className="h-4 w-4 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  Engineering Principles &amp; Core Subjects
                </h3>
                <ul className="space-y-3.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-xs">
                      1
                    </span>
                    <span><strong>Data Structures &amp; Algorithms (DSA):</strong> Applying optimal algorithmic paradigms (Dynamic Programming, Graph traversals, Binary Search) in Java for minimal time and space complexity.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs">
                      2
                    </span>
                    <span><strong>Full-Stack Systems &amp; Concurrency:</strong> Building high-throughput MERN architectures with in-memory stream buffers, sub-10ms WebSocket multiplexing, and serverless edge functions.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-purple-400 font-bold text-xs">
                      3
                    </span>
                    <span><strong>Database Systems (DBMS) &amp; ACID Transactions:</strong> Designing normalized database schemas, atomic <code>$inc</code> inventory locking, and zero-overhead native TTL indexing in MongoDB.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-amber-400 font-bold text-xs">
                      4
                    </span>
                    <span><strong>Object-Oriented Programming (OOP in Java):</strong> Applying core OOP pillars—Encapsulation, Inheritance, Polymorphism, and Abstraction—alongside Collections and Interfaces to build robust, maintainable systems.</span>
                  </li>
                </ul>
              </div>
            </SpotlightCard>
          </div>

        </div>

      </div>
    </section>
  );
}
