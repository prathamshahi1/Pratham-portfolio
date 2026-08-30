import React from 'react';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon, GeeksforGeeksIcon } from './Icons';
import { personalInfo } from '../data/personal';
import profilePhoto from '../assets/profile.jpg';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Publications', href: '#publications' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative border-t border-slate-200 dark:border-slate-800/80 bg-white/50 dark:bg-slate-950/80 backdrop-blur-md pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#hero"
              className="flex items-center gap-2.5 text-xl font-extrabold tracking-tight text-slate-900 dark:text-white"
            >
              <img
                src={profilePhoto}
                alt="Pratham Kumar"
                className="h-9 w-9 rounded-xl object-cover ring-2 ring-cyan-500/30 shadow-md shadow-cyan-500/20"
              />
              <span>
                PRATHAM<span className="text-cyan-500">.</span>
              </span>
            </a>
            
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              {personalInfo.summary}
            </p>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-cyan-500 hover:border-cyan-500/40 transition-colors"
                title="GitHub"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-500 hover:border-blue-500/40 transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href={personalInfo.socialLinks.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-amber-500 hover:border-amber-500/40 transition-colors"
                title="LeetCode"
              >
                <LeetCodeIcon className="h-4 w-4" />
              </a>
              <a
                href={personalInfo.socialLinks.geeksforgeeks}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-emerald-500 hover:border-emerald-500/40 transition-colors"
                title="GeeksforGeeks"
              >
                <GeeksforGeeksIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400">
              QUICK SECTIONS
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 dark:text-slate-400 hover:text-cyan-500 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Back to top and Resume CTA */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between space-y-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 px-4 py-2.5 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-sm hover:border-cyan-500 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-4 w-4 text-cyan-500" />
            </button>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Pratham_Kumar_Resume.pdf"
              className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
            >
              Download PDF Resume &rarr;
            </a>
          </div>

        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>
            &copy; 2026 {personalInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span>Engineered with React, Tailwind &amp; Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
