import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Terminal, 
  Mail, 
  Phone, 
  ArrowRight, 
  FileDown, 
  Sparkles, 
  CheckCircle,
  Flame,
  ChevronDown
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon, GeeksforGeeksIcon } from './Icons';
import { personalInfo } from '../data/personal';
import confetti from 'canvas-confetti';
import profilePhoto from '../assets/profile.jpg';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentRole = personalInfo.roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const handleResumeDownload = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#06b6d4', '#3b82f6', '#10b981', '#f59e0b']
    });
  };

  const socialButtons = [
    { name: 'GitHub', icon: GithubIcon, href: personalInfo.socialLinks.github, color: 'hover:text-cyan-400 hover:border-cyan-400' },
    { name: 'LinkedIn', icon: LinkedinIcon, href: personalInfo.socialLinks.linkedin, color: 'hover:text-blue-400 hover:border-blue-400' },
    { name: 'LeetCode', icon: LeetCodeIcon, href: personalInfo.socialLinks.leetcode, color: 'hover:text-amber-400 hover:border-amber-400' },
    { name: 'GeeksforGeeks', icon: GeeksforGeeksIcon, href: personalInfo.socialLinks.geeksforgeeks, color: 'hover:text-emerald-400 hover:border-emerald-400' },
    { name: 'Email', icon: Mail, href: personalInfo.socialLinks.email, color: 'hover:text-rose-400 hover:border-rose-400' },
    { name: 'Phone', icon: Phone, href: personalInfo.socialLinks.phone, color: 'hover:text-teal-400 hover:border-teal-400' },
  ];

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Dynamic Ambient Background Glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[600px] rounded-full bg-gradient-to-tr from-cyan-500/15 via-blue-500/10 to-transparent blur-3xl" />
        <div className="absolute top-1/3 -left-20 h-[350px] w-[350px] rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-10 -right-20 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for technical opportunities</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <p className="font-mono text-sm sm:text-base font-semibold text-cyan-600 dark:text-cyan-400 tracking-wider">
                Hi, I'm
              </p>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {personalInfo.name}
              </h1>
              
              {/* Typewriter Role Title */}
              <div className="flex items-center justify-center lg:justify-start gap-2 pt-1 min-h-[44px]">
                <span className="text-2xl sm:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-400 bg-clip-text text-transparent">
                  {displayText}
                </span>
                <span className="w-1 h-8 bg-cyan-400 animate-pulse inline-block" />
              </div>
            </div>

            {/* Intro Tagline */}
            <p className="max-w-2xl text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mx-auto lg:mx-0">
              {personalInfo.tagline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] hover:shadow-cyan-500/40"
              >
                <span>View Projects</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Pratham_Kumar_Resume.pdf"
                onClick={handleResumeDownload}
                className="flex items-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 px-6 py-3.5 text-sm font-bold text-slate-800 dark:text-slate-200 shadow-sm transition-all hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-[1.02]"
              >
                <FileDown className="h-4 w-4 text-cyan-500" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links Row */}
            <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80">
              <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-wider">
                Connect &amp; Verify Profiles
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                {socialButtons.map((btn) => {
                  const Icon = btn.icon;
                  return (
                    <a
                      key={btn.name}
                      href={btn.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 px-3 py-2 text-xs font-medium text-slate-600 dark:text-slate-300 transition-all duration-200 ${btn.color}`}
                      title={btn.name}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="hidden sm:inline">{btn.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Hero Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Outer decorative halo */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-cyan-500 via-emerald-400 to-blue-600 opacity-30 blur-lg transition duration-500 group-hover:opacity-100" />
              
              {/* Card Container */}
              <div className="relative rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 p-6 shadow-2xl backdrop-blur-xl">
                {/* Visual Image / Avatar */}
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-950 flex items-center justify-center">
                  <img
                    src={profilePhoto}
                    onError={(e) => {
                      e.currentTarget.src = '/images/profile/pratham.jpg';
                    }}
                    alt="Pratham Kumar Full-Stack Developer"
                    className="h-full w-full object-cover object-top"
                  />
                </div>

                {/* Floating Micro-Badges under avatar */}
                <div className="mt-4 grid grid-cols-2 gap-2 text-center text-xs font-medium">
                  <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 p-2.5">
                    <span className="text-slate-500 dark:text-slate-400 block text-[10px]">CORE FOCUS</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">Software Enthusiast</span>
                  </div>
                  <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 p-2.5">
                    <span className="text-slate-500 dark:text-slate-400 block text-[10px]">DSA SOLVED</span>
                    <span className="font-bold text-cyan-500">120+ Questions</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Scroll down indicator */}
        <div className="mt-12 flex justify-center">
          <a
            href="#about"
            aria-label="Scroll to About section"
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <span className="text-[11px] font-mono tracking-wider uppercase">Explore Portfolio</span>
            <ChevronDown className="h-4 w-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
