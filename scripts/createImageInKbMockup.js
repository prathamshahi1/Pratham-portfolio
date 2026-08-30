import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.resolve(__dirname, '../public');

const imageInKbDetailedSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 560" width="900" height="560">
  <defs>
    <linearGradient id="brand-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6366F1" />
      <stop offset="100%" stop-color="#06B6D4" />
    </linearGradient>
    <linearGradient id="emerald-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10B981" />
      <stop offset="100%" stop-color="#06B6D4" />
    </linearGradient>
    <linearGradient id="bg-canvas" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#090d16" />
    </linearGradient>
    <linearGradient id="panel-bg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1e293b" />
      <stop offset="100%" stop-color="#111827" />
    </linearGradient>
    <filter id="card-shadow" x="-5%" y="-5%" width="110%" height="115%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#000" flood-opacity="0.6"/>
    </filter>
  </defs>

  <style>
    .title { font-family: 'Plus Jakarta Sans', system-ui, sans-serif; font-weight: 800; fill: #ffffff; }
    .subtitle { font-family: 'Plus Jakarta Sans', system-ui, sans-serif; font-weight: 500; fill: #94a3b8; }
    .mono { font-family: 'JetBrains Mono', monospace; font-size: 12px; }
  </style>

  <!-- Background Canvas -->
  <rect width="900" height="560" rx="24" fill="url(#bg-canvas)" />
  
  <!-- Browser Frame Window -->
  <rect x="25" y="25" width="850" height="510" rx="16" fill="#0b0f19" stroke="#334155" stroke-width="1.5" filter="url(#card-shadow)" />
  
  <!-- Top Browser Header Bar -->
  <rect x="25" y="25" width="850" height="50" rx="16" fill="#0f172a" />
  <circle cx="55" cy="50" r="6" fill="#ef4444" />
  <circle cx="75" cy="50" r="6" fill="#f59e0b" />
  <circle cx="95" cy="50" r="6" fill="#10b981" />
  
  <!-- URL Address Pill -->
  <rect x="130" y="37" width="460" height="26" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1" />
  <text x="150" y="54" class="mono" fill="#38bdf8">🔒 https://imageinkb.com</text>
  <rect x="530" y="41" width="50" height="18" rx="4" fill="#06b6d4" fill-opacity="0.2" />
  <text x="555" y="54" class="mono" font-size="10" fill="#38bdf8" text-anchor="middle">LIVE</text>

  <!-- App Header Navigation inside Mockup -->
  <g transform="translate(45, 90)">
    <!-- App Logo -->
    <rect width="36" height="36" rx="9" fill="url(#brand-grad)" />
    <path d="M10 25L16 18L20 22L26 14L30 25H10Z" fill="white" fill-opacity="0.9"/>
    <circle cx="14" cy="13" r="2.5" fill="#38BDF8"/>
    <text x="46" y="24" class="title" font-size="18">Image In Kb</text>
    <text x="160" y="24" class="mono" font-size="11" fill="#10b981">● Zero-Storage In-Memory Engine</text>

    <!-- Header Tools Pills -->
    <rect x="520" y="6" width="75" height="24" rx="6" fill="#1e293b" />
    <text x="557" y="22" class="mono" font-size="11" fill="#94a3b8" text-anchor="middle">Compress</text>
    
    <rect x="605" y="6" width="60" height="24" rx="6" fill="#1e293b" />
    <text x="635" y="22" class="mono" font-size="11" fill="#94a3b8" text-anchor="middle">Resize</text>

    <rect x="675" y="6" width="65" height="24" rx="6" fill="#1e293b" />
    <text x="707" y="22" class="mono" font-size="11" fill="#94a3b8" text-anchor="middle">Convert</text>

    <rect x="750" y="6" width="55" height="24" rx="6" fill="url(#brand-grad)" />
    <text x="777" y="22" class="mono" font-size="11" fill="#ffffff" text-anchor="middle">Portal</text>
  </g>

  <!-- Left Main Compressor Card -->
  <g transform="translate(45, 145)">
    <rect width="470" height="360" rx="14" fill="url(#panel-bg)" stroke="#334155" stroke-width="1.2" />
    
    <!-- Upload Dropzone Area -->
    <rect x="20" y="20" width="430" height="150" rx="10" fill="#0b0f19" stroke="url(#brand-grad)" stroke-width="1.5" stroke-dasharray="6 4" />
    <circle cx="235" cy="75" r="24" fill="#1e293b" />
    <text x="235" y="83" font-size="22" text-anchor="middle">📸</text>
    <text x="235" y="120" class="title" font-size="15" text-anchor="middle">Drop Image or Select File</text>
    <text x="235" y="140" class="subtitle" font-size="12" text-anchor="middle">Instant in-memory transformation (Max 25MB)</text>

    <!-- Target Size Selector Buttons -->
    <text x="20" y="200" class="title" font-size="13">SELECT TARGET FILE SIZE PRESET:</text>
    <g transform="translate(20, 215)">
      <rect x="0" y="0" width="65" height="32" rx="8" fill="#1e293b" stroke="#475569" />
      <text x="32" y="20" class="mono" fill="#f8fafc" text-anchor="middle">10 KB</text>

      <rect x="73" y="0" width="65" height="32" rx="8" fill="#1e293b" stroke="#475569" />
      <text x="105" y="20" class="mono" fill="#f8fafc" text-anchor="middle">20 KB</text>

      <!-- Active 50KB Pill -->
      <rect x="146" y="0" width="68" height="32" rx="8" fill="url(#brand-grad)" />
      <text x="180" y="20" class="mono" font-weight="bold" fill="#ffffff" text-anchor="middle">50 KB ✓</text>

      <rect x="222" y="0" width="68" height="32" rx="8" fill="#1e293b" stroke="#475569" />
      <text x="256" y="20" class="mono" fill="#f8fafc" text-anchor="middle">100 KB</text>

      <rect x="298" y="0" width="68" height="32" rx="8" fill="#1e293b" stroke="#475569" />
      <text x="332" y="20" class="mono" fill="#f8fafc" text-anchor="middle">200 KB</text>

      <rect x="374" y="0" width="56" height="32" rx="8" fill="#1e293b" stroke="#475569" />
      <text x="402" y="20" class="mono" fill="#f8fafc" text-anchor="middle">Custom</text>
    </g>

    <!-- Compression Action Bar & Status -->
    <g transform="translate(20, 275)">
      <rect width="430" height="60" rx="10" fill="#0b0f19" stroke="#10b981" stroke-width="1.2" />
      <circle cx="35" cy="30" r="14" fill="#10b981" fill-opacity="0.2" />
      <text x="35" y="35" font-size="14" text-anchor="middle" fill="#10b981">✓</text>
      <text x="60" y="25" class="title" font-size="13" fill="#34d399">Binary-Search Compression Succeeded</text>
      <text x="60" y="44" class="mono" font-size="11" fill="#94a3b8">Original: 3.42 MB → Result: 49.6 KB (98.5% Reduced)</text>
      
      <rect x="330" y="14" width="85" height="32" rx="6" fill="#10b981" />
      <text x="372" y="34" class="mono" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">Download</text>
    </g>
  </g>

  <!-- Right Features & Special Tools Column -->
  <g transform="translate(535, 145)">
    <!-- Specialized Tools Card -->
    <rect width="320" height="170" rx="14" fill="url(#panel-bg)" stroke="#334155" stroke-width="1.2" />
    <text x="20" y="32" class="title" font-size="14" fill="url(#brand-grad)">⚡ SPECIALIZED PORTAL COMPRESSORS</text>
    
    <g transform="translate(20, 50)">
      <rect width="280" height="46" rx="8" fill="#0b0f19" stroke="#334155" />
      <text x="15" y="22" class="title" font-size="12">🛂 Passport Photo Compressor</text>
      <text x="15" y="38" class="subtitle" font-size="10">UPSC, SSC, Visa &amp; Exam Portals (20KB - 50KB)</text>
    </g>

    <g transform="translate(20, 106)">
      <rect width="280" height="46" rx="8" fill="#0b0f19" stroke="#334155" />
      <text x="15" y="22" class="title" font-size="12">✍️ Signature Compressor</text>
      <text x="15" y="38" class="subtitle" font-size="10">Strict 10KB - 20KB exact threshold tuning</text>
    </g>

    <!-- Architecture & Performance Metrics Card -->
    <g transform="translate(0, 190)">
      <rect width="320" height="170" rx="14" fill="url(#panel-bg)" stroke="#334155" stroke-width="1.2" />
      <text x="20" y="32" class="title" font-size="14" fill="#38bdf8">🌐 ARCHITECTURE METRICS</text>
      
      <g transform="translate(20, 48)">
        <rect width="130" height="48" rx="8" fill="#0b0f19" />
        <text x="12" y="20" class="mono" font-size="10" fill="#64748b">LATENCY</text>
        <text x="12" y="38" class="title" font-size="14" fill="#34d399">&lt; 100ms In-Memory</text>

        <rect x="145" y="0" width="135" height="48" rx="8" fill="#0b0f19" />
        <text x="157" y="20" class="mono" font-size="10" fill="#64748b">DEPLOYMENT</text>
        <text x="157" y="38" class="title" font-size="14" fill="#38bdf8">Cloudflare Edge</text>
      </g>

      <g transform="translate(20, 106)">
        <rect width="280" height="46" rx="8" fill="#0b0f19" stroke="#334155" />
        <text x="15" y="20" class="mono" font-size="10" fill="#64748b">CORE PIPELINE</text>
        <text x="15" y="38" class="mono" font-size="11" fill="#f8fafc">Libvips / Sharp + Binary Search</text>
      </g>
    </g>
  </g>
</svg>`;

fs.writeFileSync(path.join(publicDir, 'images/projects/imageinkb.svg'), imageInKbDetailedSvg);
console.log('Detailed Image In Kb SVG mockup created.');
