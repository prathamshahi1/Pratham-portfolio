import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { educationList } from '../data/education';
import SpotlightCard from './SpotlightCard';

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold text-cyan-500 dark:text-cyan-400">
            <GraduationCap className="h-3.5 w-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Education &amp; Qualifications
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Academic milestones, core computer science coursework, and scholastic honors.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative max-w-4xl mx-auto space-y-8">
          {/* Vertical timeline line */}
          <div className="hidden sm:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-slate-300 dark:to-slate-800" />

          {educationList.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative flex flex-col sm:flex-row gap-6 items-start"
            >
              {/* Timeline marker icon */}
              <div className="hidden sm:flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border-2 border-cyan-500 bg-slate-900 text-cyan-400 shadow-lg shadow-cyan-500/20 z-10">
                <GraduationCap className="h-7 w-7" />
              </div>

              {/* Education Card */}
              <SpotlightCard className="flex-1 p-6 sm:p-8 w-full space-y-5">
                {/* Header info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="rounded-full bg-cyan-500/10 px-3 py-0.5 font-mono text-xs font-bold text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                        {edu.startYear} &mdash; {edu.endYear}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        ({edu.status})
                      </span>
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">
                      {edu.field}
                    </p>
                  </div>

                  {/* CGPA Badge */}
                  <div className="flex sm:flex-col items-center sm:items-end justify-between gap-1 rounded-xl bg-slate-100 dark:bg-slate-950 p-3 border border-slate-200 dark:border-slate-800">
                    <span className="text-[10px] font-mono font-bold uppercase text-slate-400">
                      GRADE / CGPA
                    </span>
                    <span className="text-base font-extrabold text-emerald-600 dark:text-emerald-400">
                      {edu.cgpa}
                    </span>
                  </div>
                </div>

                {/* Institution & Location */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="h-4 w-4 text-cyan-500" />
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{edu.institution}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-slate-400" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {edu.description}
                </p>

                {/* Relevant Coursework */}
                {edu.relevantCoursework && (
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Key Coursework:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.relevantCoursework.map((course, cIdx) => (
                        <span
                          key={cIdx}
                          className="rounded-lg bg-slate-100 dark:bg-slate-950 px-2.5 py-1 text-xs font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Academic Highlights */}
                {edu.achievements && (
                  <div className="space-y-1.5 pt-2">
                    {edu.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="h-3.5 w-3.5 text-cyan-500 mt-0.5 shrink-0" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                )}
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
