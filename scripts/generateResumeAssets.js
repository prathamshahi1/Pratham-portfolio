import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.resolve(__dirname, '../public');

// Helper to create SVG
function createSvg(width, height, content) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <defs>
    <linearGradient id="grad-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06b6d4" />
      <stop offset="100%" stop-color="#3b82f6" />
    </linearGradient>
    <linearGradient id="grad-emerald" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981" />
      <stop offset="100%" stop-color="#06b6d4" />
    </linearGradient>
    <linearGradient id="grad-purple" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8b5cf6" />
      <stop offset="100%" stop-color="#ec4899" />
    </linearGradient>
    <linearGradient id="grad-amber" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" />
      <stop offset="100%" stop-color="#ef4444" />
    </linearGradient>
    <linearGradient id="bg-dark" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#111827" />
      <stop offset="100%" stop-color="#0b0f19" />
    </linearGradient>
  </defs>
  <style>
    .title { font-family: system-ui, -apple-system, sans-serif; font-weight: 800; fill: #ffffff; }
    .subtitle { font-family: system-ui, -apple-system, sans-serif; font-weight: 500; fill: #94a3b8; }
    .badge { font-family: monospace; font-size: 13px; font-weight: 600; }
  </style>
  ${content}
</svg>`;
}

// Image In Kb Mockup
const imageInKbSvg = createSvg(800, 500, `
  <rect width="800" height="500" rx="24" fill="url(#bg-dark)" />
  <rect x="40" y="40" width="720" height="420" rx="16" fill="#1e293b" stroke="#334155" stroke-width="2" />
  <!-- Browser Header -->
  <rect x="40" y="40" width="720" height="44" rx="16" fill="#0f172a" />
  <circle cx="65" cy="62" r="6" fill="#ef4444" />
  <circle cx="85" cy="62" r="6" fill="#f59e0b" />
  <circle cx="105" cy="62" r="6" fill="#10b981" />
  <rect x="140" y="50" width="400" height="24" rx="6" fill="#1e293b" />
  <text x="160" y="66" class="subtitle" font-size="12">https://imageinkb.com</text>
  
  <!-- ImageInKB Content UI -->
  <rect x="70" y="110" width="310" height="320" rx="12" fill="#0b0f19" stroke="url(#grad-cyan)" stroke-width="2" />
  <rect x="95" y="135" width="260" height="150" rx="8" fill="#1e293b" stroke="#475569" stroke-dasharray="4 4" />
  <text x="225" y="200" class="title" font-size="32" text-anchor="middle">🖼️</text>
  <text x="225" y="240" class="subtitle" font-size="13" text-anchor="middle">Drop Image or Select File</text>
  <text x="225" y="260" class="subtitle" font-size="11" fill="#64748b" text-anchor="middle">Zero-Storage In-Memory Buffer</text>
  
  <!-- Target size input slider -->
  <rect x="95" y="310" width="260" height="40" rx="8" fill="#1e293b" />
  <text x="110" y="335" class="title" font-size="12">Target Size: 50 KB</text>
  <rect x="250" y="318" width="95" height="24" rx="6" fill="#06b6d4" />
  <text x="297" y="334" class="badge" font-size="11" fill="#ffffff" text-anchor="middle">Compress</text>

  <rect x="95" y="365" width="260" height="42" rx="8" fill="#10b981" fill-opacity="0.15" stroke="#10b981" />
  <text x="225" y="391" class="badge" font-size="12" fill="#34d399" text-anchor="middle">✓ 90%+ Reduction Achieved</text>

  <!-- Right Performance Metrics -->
  <rect x="410" y="110" width="320" height="150" rx="12" fill="#0b0f19" stroke="#334155" />
  <text x="430" y="145" class="title" font-size="16">⚡ Binary Search Quality Tuning</text>
  <text x="430" y="175" class="subtitle" font-size="13">Sub-100ms transformation in Node.js buffer.</text>
  <text x="430" y="200" class="subtitle" font-size="13">Zero disk writes for privacy &amp; speed.</text>
  <rect x="430" y="220" width="130" height="26" rx="6" fill="#06b6d4" fill-opacity="0.2" />
  <text x="495" y="238" class="badge" font-size="11" fill="#38bdf8" text-anchor="middle">Sharp Engine</text>

  <rect x="410" y="280" width="320" height="150" rx="12" fill="#0b0f19" stroke="#334155" />
  <text x="430" y="315" class="title" font-size="16">🌐 Cloudflare Workers Edge</text>
  <text x="430" y="345" class="subtitle" font-size="13">SPA Routing &bull; CI/CD &bull; Google SEO Optimized</text>
  <path d="M 430 400 L 480 370 L 530 385 L 590 350 L 660 330" fill="none" stroke="url(#grad-emerald)" stroke-width="3" />
`);
fs.writeFileSync(path.join(publicDir, 'images/projects/imageinkb.png'), imageInKbSvg);

// Table Tennis Sports SVG
const ttSvg = createSvg(800, 520, `
  <rect width="800" height="520" rx="20" fill="url(#bg-dark)" />
  <rect x="30" y="30" width="740" height="460" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2" />
  <circle cx="400" cy="160" r="60" fill="#1e293b" stroke="url(#grad-cyan)" stroke-width="4" />
  <text x="400" y="178" font-size="48" text-anchor="middle">🏓</text>

  <text x="400" y="270" class="title" font-size="26" fill="#ffffff" text-anchor="middle">All India University Table Tennis Tournament</text>
  <text x="400" y="315" class="subtitle" font-size="17" fill="#38bdf8" text-anchor="middle">Represented Sharda University Contingent</text>
  
  <rect x="250" y="360" width="300" height="46" rx="23" fill="url(#grad-cyan)" fill-opacity="0.2" stroke="#06b6d4" stroke-width="1.5" />
  <text x="400" y="390" class="badge" font-size="15" fill="#38bdf8" text-anchor="middle">⭐ University Representative</text>
`);
fs.writeFileSync(path.join(publicDir, 'images/sports/tabletennis.png'), ttSvg);

// Kartavya NGO SVG
const ngoSvg = createSvg(800, 520, `
  <rect width="800" height="520" rx="20" fill="url(#bg-dark)" />
  <rect x="30" y="30" width="740" height="460" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2" />
  <circle cx="400" cy="160" r="60" fill="#1e293b" stroke="url(#grad-emerald)" stroke-width="4" />
  <text x="400" y="178" font-size="48" text-anchor="middle">🤝</text>

  <text x="400" y="270" class="title" font-size="28" fill="#ffffff" text-anchor="middle">Kartavya NGO Active Facilitator</text>
  <text x="400" y="315" class="subtitle" font-size="17" fill="#34d399" text-anchor="middle">Community Outreach &amp; Social Impact Leadership</text>
  
  <rect x="250" y="360" width="300" height="46" rx="23" fill="url(#grad-emerald)" fill-opacity="0.2" stroke="#10b981" stroke-width="1.5" />
  <text x="400" y="390" class="badge" font-size="15" fill="#34d399" text-anchor="middle">🌿 Social Impact &amp; Teamwork</text>
`);
fs.writeFileSync(path.join(publicDir, 'images/sports/ngo.png'), ngoSvg);

console.log('Resume assets generated.');
