import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicCertDir = path.resolve(__dirname, '../public/images/certificates');

if (!fs.existsSync(publicCertDir)) {
  fs.mkdirSync(publicCertDir, { recursive: true });
}

function makeCertSvg(title, issuer, credentialId, accentColor, iconSvg) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 380" width="600" height="380">
  <defs>
    <linearGradient id="cert-border-${accentColor}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${accentColor === 'cyan' ? '#06b6d4' : accentColor === 'amber' ? '#f59e0b' : accentColor === 'purple' ? '#a855f7' : '#10b981'}" />
      <stop offset="100%" stop-color="${accentColor === 'cyan' ? '#3b82f6' : accentColor === 'amber' ? '#ef4444' : accentColor === 'purple' ? '#3b82f6' : '#06b6d4'}" />
    </linearGradient>
    <linearGradient id="cert-bg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#090d16" />
    </linearGradient>
    <pattern id="cert-grid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#334155" stroke-width="0.5" stroke-opacity="0.3"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="600" height="380" rx="16" fill="url(#cert-bg)" />
  <rect width="600" height="380" rx="16" fill="url(#cert-grid)" />

  <!-- Outer Certificate Border Frame -->
  <rect x="18" y="18" width="564" height="344" rx="12" fill="none" stroke="url(#cert-border-${accentColor})" stroke-width="2" stroke-dasharray="6 4"/>
  <rect x="26" y="26" width="548" height="328" rx="8" fill="none" stroke="#334155" stroke-width="1"/>

  <!-- Corner Ornaments -->
  <circle cx="36" cy="36" r="4" fill="${accentColor === 'cyan' ? '#06b6d4' : accentColor === 'amber' ? '#f59e0b' : accentColor === 'purple' ? '#a855f7' : '#10b981'}" />
  <circle cx="564" cy="36" r="4" fill="${accentColor === 'cyan' ? '#06b6d4' : accentColor === 'amber' ? '#f59e0b' : accentColor === 'purple' ? '#a855f7' : '#10b981'}" />
  <circle cx="36" cy="344" r="4" fill="${accentColor === 'cyan' ? '#06b6d4' : accentColor === 'amber' ? '#f59e0b' : accentColor === 'purple' ? '#a855f7' : '#10b981'}" />
  <circle cx="564" cy="344" r="4" fill="${accentColor === 'cyan' ? '#06b6d4' : accentColor === 'amber' ? '#f59e0b' : accentColor === 'purple' ? '#a855f7' : '#10b981'}" />

  <!-- Top Badge / Seal -->
  <g transform="translate(270, 48)">
    <circle cx="30" cy="30" r="28" fill="#1e293b" stroke="url(#cert-border-${accentColor})" stroke-width="2"/>
    ${iconSvg}
  </g>

  <!-- Certificate Subheader -->
  <text x="300" y="130" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="11" font-weight="700" fill="#94a3b8" letter-spacing="3" text-anchor="middle">CERTIFICATE OF RECOGNITION</text>
  <text x="300" y="150" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="10" font-weight="600" fill="#64748b" letter-spacing="1.5" text-anchor="middle">VERIFIED ACADEMIC &amp; INDUSTRY CREDENTIAL</text>

  <!-- Main Course / Certificate Title -->
  <text x="300" y="185" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="17" font-weight="800" fill="#f8fafc" text-anchor="middle">${title}</text>

  <!-- Awarded To Line -->
  <text x="300" y="218" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="11" font-weight="500" fill="#94a3b8" text-anchor="middle">Awarded to</text>
  <text x="300" y="248" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="22" font-weight="800" fill="#ffffff" letter-spacing="1" text-anchor="middle">PRATHAM KUMAR</text>

  <!-- Issued By & Verification -->
  <text x="300" y="280" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="12" font-weight="600" fill="${accentColor === 'cyan' ? '#38bdf8' : accentColor === 'amber' ? '#fbbf24' : accentColor === 'purple' ? '#c084fc' : '#34d399'}" text-anchor="middle">Issued by ${issuer}</text>

  <!-- Divider & Credential ID footer -->
  <line x1="120" y1="302" x2="480" y2="302" stroke="#334155" stroke-width="1" />
  <text x="140" y="325" font-family="'JetBrains Mono', monospace" font-size="10" fill="#64748b">ID: ${credentialId}</text>
  <text x="460" y="325" font-family="'JetBrains Mono', monospace" font-size="10" fill="#10b981" text-anchor="end">✓ VERIFIED CREDENTIAL</text>
</svg>`;
}

const certs = [
  {
    file: 'oracle-academy.svg',
    title: 'Java Fundamentals, Database & AI Foundations',
    issuer: 'Oracle Academy',
    id: 'ORCL-ACADEMY-JAVA-DB-AI',
    color: 'amber',
    icon: '<polygon points="30,12 36,24 48,26 40,35 42,47 30,41 18,47 20,35 12,26 24,24" fill="#f59e0b"/>'
  },
  {
    file: 'apna-dsa.svg',
    title: 'Data Structures & Algorithms (DSA) in Java',
    issuer: 'Apna College',
    id: 'APNA-DSA-JAVA-PRATHAM',
    color: 'cyan',
    icon: '<polygon points="30,12 36,24 48,26 40,35 42,47 30,41 18,47 20,35 12,26 24,24" fill="#06b6d4"/>'
  },
  {
    file: 'mysirg-java.svg',
    title: 'Java Standard Edition (Core Java)',
    issuer: 'MySirG (Saurabh Shukla)',
    id: 'MYSIRG-JAVA-SE-CERT',
    color: 'purple',
    icon: '<polygon points="30,12 36,24 48,26 40,35 42,47 30,41 18,47 20,35 12,26 24,24" fill="#a855f7"/>'
  },
  {
    file: 'mern-bootcamp.svg',
    title: 'Full-Stack MERN Development Bootcamp',
    issuer: 'MERN Stack Certification Program',
    id: 'MERN-FULLSTACK-CERT',
    color: 'emerald',
    icon: '<polygon points="30,12 36,24 48,26 40,35 42,47 30,41 18,47 20,35 12,26 24,24" fill="#10b981"/>'
  }
];

certs.forEach(c => {
  const svg = makeCertSvg(c.title, c.issuer, c.id, c.color, c.icon);
  fs.writeFileSync(path.join(publicCertDir, c.file), svg);
});

console.log('All certificate SVGs regenerated cleanly.');
