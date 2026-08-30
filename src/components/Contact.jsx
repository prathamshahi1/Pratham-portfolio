import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  CheckCircle2, 
  MessageSquare, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/personal';
import SpotlightCard from './SpotlightCard';
import Toast from './Toast';

export default function Contact() {
  const [copiedField, setCopiedField] = useState(null);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  // Mailto composer form state
  const [formData, setFormData] = useState({
    senderName: '',
    senderEmail: '',
    subject: '',
    message: ''
  });

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setToastMessage(`Copied ${fieldName} to clipboard!`);
    setShowToast(true);
    setTimeout(() => {
      setCopiedField(null);
      setShowToast(false);
    }, 2500);
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      formData.subject || `Inquiry from ${formData.senderName || 'Portfolio Visitor'}`
    );
    const body = encodeURIComponent(
      `Hello Pratham,\n\n${formData.message}\n\nFrom:\nName: ${formData.senderName}\nEmail: ${formData.senderEmail}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold text-cyan-500 dark:text-cyan-400">
            <MessageSquare className="h-3.5 w-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Let's Discuss Opportunities
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Whether you are looking to hire a dedicated full-stack developer, collaborate on a project, or connect, feel free to reach out.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Info & Copy Buttons */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <SpotlightCard className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-500 border border-cyan-500/20">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 font-bold block">
                      EMAIL ADDRESS
                    </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm sm:text-base font-bold text-slate-900 dark:text-white hover:text-cyan-500 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalInfo.email, 'Email')}
                  className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-cyan-500 transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedField === 'Email' ? (
                    <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  ) : (
                    <Copy className="h-5 w-5" />
                  )}
                </button>
              </div>
            </SpotlightCard>

            {/* Phone Card */}
            <SpotlightCard className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 font-bold block">
                      DIRECT PHONE / WHATSAPP
                    </span>
                    <a
                      href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                      className="text-sm sm:text-base font-bold text-slate-900 dark:text-white hover:text-emerald-500 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalInfo.phone, 'Phone number')}
                  className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-emerald-500 transition-colors"
                  title="Copy phone to clipboard"
                  aria-label="Copy phone"
                >
                  {copiedField === 'Phone number' ? (
                    <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  ) : (
                    <Copy className="h-5 w-5" />
                  )}
                </button>
              </div>
            </SpotlightCard>

            {/* Location Card */}
            <SpotlightCard className="p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-purple-500 border border-purple-500/20">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-slate-400 font-bold block">
                    LOCATION &amp; MOBILITY
                  </span>
                  <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                    {personalInfo.location} &bull; Remote &amp; Relocation Open
                  </span>
                </div>
              </div>
            </SpotlightCard>

            {/* Social Grid quick links */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 p-3 text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-blue-500 hover:border-blue-500/40 transition-colors"
              >
                <LinkedinIcon className="h-4 w-4 text-blue-500" />
                <span>LinkedIn</span>
              </a>
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 p-3 text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-cyan-500 hover:border-cyan-500/40 transition-colors"
              >
                <GithubIcon className="h-4 w-4 text-cyan-500" />
                <span>GitHub</span>
              </a>
            </div>

          </div>

          {/* Right Column: Direct Mailto Composer Form */}
          <div className="lg:col-span-7">
            <SpotlightCard className="p-6 sm:p-8 space-y-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-500 uppercase">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>CLIENT-SIDE EMAIL COMPOSER</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Fill out the fields below to launch your default mail app with your message pre-composed.
                </p>
              </div>

              <form onSubmit={handleSendEmail} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.senderName}
                      onChange={(e) => setFormData({ ...formData, senderName: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@company.com"
                      value={formData.senderEmail}
                      onChange={(e) => setFormData({ ...formData, senderEmail: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Full-Stack Developer Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Share role details, project scope, or any questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-4 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-cyan-500/25 hover:opacity-95 transition-all hover:scale-[1.01]"
                >
                  <Send className="h-4 w-4" />
                  <span>Launch Email Client (mailto:)</span>
                </button>
              </form>
            </SpotlightCard>
          </div>

        </div>

      </div>

      <Toast
        message={toastMessage}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </section>
  );
}
