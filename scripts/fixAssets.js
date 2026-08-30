import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.resolve(__dirname, '../public');
const assetsDir = path.resolve(__dirname, '../src/assets');

if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// 1. Copy user's real profile picture
const userUploadPhoto = '/Users/pshahi/.gemini/antigravity-ide/brain/ac55a002-6496-485b-b14e-de65a1028d61/.user_uploaded/media_1788014799489.jpg';

if (fs.existsSync(userUploadPhoto)) {
  fs.copyFileSync(userUploadPhoto, path.join(assetsDir, 'profile.jpg'));
  fs.copyFileSync(userUploadPhoto, path.join(publicDir, 'images/profile/pratham.jpg'));
  fs.copyFileSync(userUploadPhoto, path.join(publicDir, 'images/profile/avatar.jpg'));
  console.log('Profile photo copied to src/assets/profile.jpg and public/images/profile/pratham.jpg');
}

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

// 2. Project Mockups
const imageInKbSvg = createSvg(800, 500, `
  <rect width="800" height="500" rx="24" fill="url(#bg-dark)" />
  <rect x="40" y="40" width="720" height="420" rx="16" fill="#1e293b" stroke="#334155" stroke-width="2" />
  <rect x="40" y="40" width="720" height="44" rx="16" fill="#0f172a" />
  <circle cx="65" cy="62" r="6" fill="#ef4444" />
  <circle cx="85" cy="62" r="6" fill="#f59e0b" />
  <circle cx="105" cy="62" r="6" fill="#10b981" />
  <rect x="140" y="50" width="400" height="24" rx="6" fill="#1e293b" />
  <text x="160" y="66" class="subtitle" font-size="12">https://imageinkb.com</text>
  
  <rect x="70" y="110" width="310" height="320" rx="12" fill="#0b0f19" stroke="url(#grad-cyan)" stroke-width="2" />
  <rect x="95" y="135" width="260" height="150" rx="8" fill="#1e293b" stroke="#475569" stroke-dasharray="4 4" />
  <text x="225" y="200" class="title" font-size="32" text-anchor="middle">🖼️</text>
  <text x="225" y="240" class="subtitle" font-size="13" text-anchor="middle">Zero-Storage In-Memory Buffer</text>
  
  <rect x="95" y="310" width="260" height="40" rx="8" fill="#1e293b" />
  <text x="110" y="335" class="title" font-size="12">Target Size: 50 KB</text>
  <rect x="250" y="318" width="95" height="24" rx="6" fill="#06b6d4" />
  <text x="297" y="334" class="badge" font-size="11" fill="#ffffff" text-anchor="middle">Compress</text>

  <rect x="95" y="365" width="260" height="42" rx="8" fill="#10b981" fill-opacity="0.15" stroke="#10b981" />
  <text x="225" y="391" class="badge" font-size="12" fill="#34d399" text-anchor="middle">✓ 90%+ Reduction Achieved</text>

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
fs.writeFileSync(path.join(publicDir, 'images/projects/imageinkb.svg'), imageInKbSvg);

const bookCartSvg = createSvg(800, 500, `
  <rect width="800" height="500" rx="24" fill="url(#bg-dark)" />
  <rect x="40" y="40" width="720" height="420" rx="16" fill="#1e293b" stroke="#334155" stroke-width="2" />
  <rect x="40" y="40" width="720" height="44" rx="16" fill="#0f172a" />
  <circle cx="65" cy="62" r="6" fill="#ef4444" />
  <circle cx="85" cy="62" r="6" fill="#f59e0b" />
  <circle cx="105" cy="62" r="6" fill="#10b981" />
  <rect x="140" y="50" width="400" height="24" rx="6" fill="#1e293b" />
  <text x="160" y="66" class="subtitle" font-size="12">https://bookcart-store.dev</text>
  
  <rect x="65" y="105" width="220" height="330" rx="12" fill="#0b0f19" stroke="url(#grad-cyan)" stroke-width="2" />
  <rect x="80" y="125" width="190" height="180" rx="8" fill="#1e293b" />
  <text x="175" y="215" class="title" font-size="32" fill="url(#grad-cyan)" text-anchor="middle">📚</text>
  <text x="85" y="335" class="title" font-size="16">BookCart E-Store</text>
  <text x="85" y="360" class="subtitle" font-size="13">MERN Architecture</text>
  <rect x="85" y="380" width="90" height="28" rx="6" fill="#06b6d4" />
  <text x="130" y="399" class="badge" fill="#ffffff" text-anchor="middle">$39.99</text>

  <rect x="310" y="105" width="425" height="150" rx="12" fill="#0b0f19" stroke="#334155" stroke-width="1.5" />
  <text x="330" y="138" class="title" font-size="17">⚡ Cart &amp; Real-time Checkout</text>
  <text x="330" y="165" class="subtitle" font-size="13">JWT Cookie Auth • MongoDB Aggregations • Atomic $inc Transactions</text>
  <rect x="330" y="190" width="90" height="32" rx="6" fill="#10b981" fill-opacity="0.2" stroke="#10b981" />
  <text x="375" y="211" class="badge" fill="#34d399" text-anchor="middle">In Stock</text>
  <rect x="435" y="190" width="140" height="32" rx="6" fill="#06b6d4" fill-opacity="0.2" stroke="#06b6d4" />
  <text x="505" y="211" class="badge" fill="#38bdf8" text-anchor="middle">Fast Checkout</text>

  <rect x="310" y="275" width="425" height="160" rx="12" fill="#0b0f19" stroke="#334155" stroke-width="1.5" />
  <text x="330" y="308" class="title" font-size="17">📊 65KB Serverless Function Bundle</text>
  <path d="M 335 390 L 390 350 L 450 370 L 520 330 L 590 345 L 680 300" fill="none" stroke="url(#grad-cyan)" stroke-width="3" />
`);
fs.writeFileSync(path.join(publicDir, 'images/projects/bookcart.svg'), bookCartSvg);

const realTalksSvg = createSvg(800, 500, `
  <rect width="800" height="500" rx="24" fill="url(#bg-dark)" />
  <rect x="40" y="40" width="720" height="420" rx="16" fill="#1e293b" stroke="#334155" stroke-width="2" />
  <rect x="40" y="40" width="720" height="44" rx="16" fill="#0f172a" />
  <circle cx="65" cy="62" r="6" fill="#ef4444" />
  <circle cx="85" cy="62" r="6" fill="#f59e0b" />
  <circle cx="105" cy="62" r="6" fill="#10b981" />
  <rect x="140" y="50" width="400" height="24" rx="6" fill="#1e293b" />
  <text x="160" y="66" class="subtitle" font-size="12">https://realtalks.chat</text>
  
  <rect x="40" y="84" width="220" height="376" fill="#0f172a" />
  <text x="60" y="120" class="title" font-size="16">💬 Conversations</text>
  <rect x="55" y="140" width="190" height="44" rx="8" fill="#1e293b" stroke="url(#grad-emerald)" stroke-width="1.5" />
  <circle cx="75" cy="162" r="12" fill="#06b6d4" />
  <circle cx="83" cy="170" r="4" fill="#10b981" />
  <text x="96" y="166" class="title" font-size="13">Pratham Kumar</text>
  
  <rect x="260" y="84" width="500" height="376" fill="#0b0f19" />
  <rect x="290" y="130" width="280" height="48" rx="12" fill="#1e293b" />
  <text x="310" y="160" class="title" font-size="13" fill="#e2e8f0">Sub-10ms Socket.IO Multiplexing 🚀</text>
  
  <rect x="440" y="200" width="290" height="52" rx="12" fill="#047857" />
  <text x="460" y="230" class="title" font-size="13" fill="#ffffff">Automated 24h TTL Index Pruning ✓</text>
  
  <rect x="280" y="390" width="460" height="48" rx="12" fill="#1e293b" stroke="#334155" stroke-width="1" />
  <text x="305" y="420" class="subtitle" font-size="13">Type a message...</text>
  <circle cx="710" cy="414" r="16" fill="#10b981" />
  <text x="704" y="420" fill="#ffffff" font-size="14">➤</text>
`);
fs.writeFileSync(path.join(publicDir, 'images/projects/realtalks.svg'), realTalksSvg);

// 3. Certificates SVGs
const certs = [
  { name: 'oracle-academy.svg', title: 'Java, Database & AI Foundations Associate', issuer: 'Oracle Academy', color: 'url(#grad-amber)' },
  { name: 'apna-dsa.svg', title: 'Data Structures & Algorithms in Java', issuer: 'Apna College', color: 'url(#grad-emerald)' },
  { name: 'mysirg-java.svg', title: 'Java Standard Edition (Core Java)', issuer: 'MySirG (Saurabh Shukla)', color: 'url(#grad-purple)' },
  { name: 'mern-bootcamp.svg', title: 'Full-Stack MERN Development Bootcamp', issuer: 'MERN Stack Certification Program', color: 'url(#grad-cyan)' },
];

certs.forEach(c => {
  const svg = createSvg(800, 560, `
    <rect width="800" height="560" rx="20" fill="url(#bg-dark)" />
    <rect x="30" y="30" width="740" height="500" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2" />
    <rect x="50" y="50" width="700" height="460" rx="10" fill="none" stroke="${c.color}" stroke-width="3" stroke-dasharray="6 4" opacity="0.8" />
    
    <circle cx="400" cy="130" r="45" fill="#1e293b" stroke="${c.color}" stroke-width="3" />
    <text x="400" y="142" font-size="34" text-anchor="middle">🎓</text>

    <text x="400" y="220" class="subtitle" font-size="15" letter-spacing="4" text-anchor="middle">CERTIFICATE OF RECOGNITION</text>
    <text x="400" y="270" class="title" font-size="24" fill="#f8fafc" text-anchor="middle">${c.title}</text>
    
    <text x="400" y="330" class="subtitle" font-size="16" text-anchor="middle">Awarded to</text>
    <text x="400" y="375" class="title" font-size="32" fill="url(#grad-cyan)" text-anchor="middle">PRATHAM KUMAR</text>
    
    <text x="400" y="425" class="subtitle" font-size="15" text-anchor="middle">Issued by ${c.issuer} • Verified Credential</text>
    
    <line x1="160" y1="460" x2="340" y2="460" stroke="#475569" stroke-width="1.5" />
    <text x="250" y="485" class="subtitle" font-size="12" text-anchor="middle">Authorized Signature</text>
    
    <line x1="460" y1="460" x2="640" y2="460" stroke="#475569" stroke-width="1.5" />
    <text x="550" y="485" class="subtitle" font-size="12" text-anchor="middle">Official Verification</text>
  `);
  fs.writeFileSync(path.join(publicDir, `images/certificates/${c.name}`), svg);
});

// 4. Research Publication
const pubSvg = createSvg(800, 600, `
  <rect width="800" height="600" rx="20" fill="url(#bg-dark)" />
  <rect x="40" y="40" width="720" height="520" rx="12" fill="#ffffff" />
  <text x="80" y="100" font-family="serif" font-size="22" font-weight="bold" fill="#0f172a">A Systematic Framework for Text-to-Speech System</text>
  <text x="80" y="135" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0284c7">Pratham Kumar, Co-Authors</text>
  <text x="80" y="160" font-family="sans-serif" font-size="12" fill="#64748b">IEEE International Conference &amp; Proceedings • Published 2025</text>
  
  <rect x="80" y="185" width="640" height="2" fill="#cbd5e1" />
  
  <text x="80" y="220" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0f172a">ABSTRACT</text>
  <text x="80" y="250" font-family="serif" font-size="13" fill="#334155">This paper presents a structured architectural framework for modern Text-to-Speech (TTS)</text>
  <text x="80" y="275" font-family="serif" font-size="13" fill="#334155">systems, detailing audio synthesis pipelines and real-time latency optimization.</text>

  <rect x="80" y="320" width="300" height="200" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
  <text x="100" y="350" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a">TTS Synthesis Pipeline (ms)</text>
  <rect x="110" y="460" width="40" height="40" fill="#0284c7" />
  <rect x="180" y="390" width="40" height="110" fill="#10b981" />
  <text x="130" y="515" font-size="11" fill="#475569" text-anchor="middle">Acoustic</text>
  <text x="200" y="515" font-size="11" fill="#475569" text-anchor="middle">Vocoder</text>

  <rect x="420" y="320" width="300" height="200" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
  <text x="440" y="350" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a">Inference Speed Benchmark</text>
  <path d="M 440 480 L 490 450 L 540 420 L 600 380 L 680 340" fill="none" stroke="#10b981" stroke-width="3" />
`);
fs.writeFileSync(path.join(publicDir, 'images/publications/paper-preview.svg'), pubSvg);

// 5. Sports & Achievements SVGs
const ttSvg = createSvg(800, 520, `
  <rect width="800" height="520" rx="20" fill="url(#bg-dark)" />
  <rect x="30" y="30" width="740" height="460" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2" />
  <circle cx="400" cy="160" r="60" fill="#1e293b" stroke="url(#grad-cyan)" stroke-width="4" />
  <text x="400" y="178" font-size="48" text-anchor="middle">🏓</text>

  <text x="400" y="270" class="title" font-size="24" fill="#ffffff" text-anchor="middle">All India University Table Tennis Tournament</text>
  <text x="400" y="315" class="subtitle" font-size="16" fill="#38bdf8" text-anchor="middle">Represented Sharda University Contingent</text>
  
  <rect x="250" y="360" width="300" height="46" rx="23" fill="url(#grad-cyan)" fill-opacity="0.2" stroke="#06b6d4" stroke-width="1.5" />
  <text x="400" y="390" class="badge" font-size="14" fill="#38bdf8" text-anchor="middle">⭐ National University Athlete</text>
`);
fs.writeFileSync(path.join(publicDir, 'images/sports/tabletennis.svg'), ttSvg);

const ngoSvg = createSvg(800, 520, `
  <rect width="800" height="520" rx="20" fill="url(#bg-dark)" />
  <rect x="30" y="30" width="740" height="460" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2" />
  <circle cx="400" cy="160" r="60" fill="#1e293b" stroke="url(#grad-emerald)" stroke-width="4" />
  <text x="400" y="178" font-size="48" text-anchor="middle">🤝</text>

  <text x="400" y="270" class="title" font-size="26" fill="#ffffff" text-anchor="middle">Kartavya NGO Active Facilitator</text>
  <text x="400" y="315" class="subtitle" font-size="16" fill="#34d399" text-anchor="middle">Community Outreach &amp; Child Education Leadership</text>
  
  <rect x="250" y="360" width="300" height="46" rx="23" fill="url(#grad-emerald)" fill-opacity="0.2" stroke="#10b981" stroke-width="1.5" />
  <text x="400" y="390" class="badge" font-size="14" fill="#34d399" text-anchor="middle">🌿 Social Impact &amp; Teamwork</text>
`);
fs.writeFileSync(path.join(publicDir, 'images/sports/ngo.svg'), ngoSvg);

// 6. Education SVGs
const uniSvg = createSvg(400, 400, `
  <rect width="400" height="400" rx="24" fill="url(#bg-dark)" />
  <circle cx="200" cy="200" r="140" fill="#1e293b" stroke="url(#grad-cyan)" stroke-width="3" />
  <text x="200" y="215" font-size="80" text-anchor="middle">🏛️</text>
`);
fs.writeFileSync(path.join(publicDir, 'images/education/university.svg'), uniSvg);
fs.writeFileSync(path.join(publicDir, 'images/education/school.svg'), uniSvg);

console.log('All SVG and JPG assets fixed successfully.');
