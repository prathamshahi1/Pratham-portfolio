import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.resolve(__dirname, '../public');

const dirs = [
  'images/profile',
  'images/projects',
  'images/education',
  'images/publications',
  'images/certificates',
  'images/sports',
];

dirs.forEach(d => {
  const fullPath = path.join(publicDir, d);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }
});

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
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>
  <style>
    .title { font-family: system-ui, -apple-system, sans-serif; font-weight: 800; fill: #ffffff; }
    .subtitle { font-family: system-ui, -apple-system, sans-serif; font-weight: 500; fill: #94a3b8; }
    .badge { font-family: monospace; font-size: 13px; font-weight: 600; }
  </style>
  ${content}
</svg>`;
}

// 1. Profile Avatar
const profileSvg = createSvg(600, 600, `
  <rect width="600" height="600" rx="36" fill="url(#bg-dark)" />
  <circle cx="300" cy="300" r="240" fill="none" stroke="url(#grad-cyan)" stroke-width="3" stroke-dasharray="8 6" opacity="0.6" />
  <circle cx="300" cy="220" r="100" fill="#1e293b" stroke="url(#grad-cyan)" stroke-width="4" />
  <!-- Stylized avatar face -->
  <path d="M 270 215 A 12 12 0 0 0 285 215" stroke="#38bdf8" stroke-width="4" fill="none" stroke-linecap="round" />
  <path d="M 315 215 A 12 12 0 0 0 330 215" stroke="#38bdf8" stroke-width="4" fill="none" stroke-linecap="round" />
  <path d="M 285 250 Q 300 265 315 250" stroke="#38bdf8" stroke-width="4" fill="none" stroke-linecap="round" />
  <!-- Body -->
  <path d="M 170 470 C 170 360, 430 360, 430 470 Z" fill="#1e293b" stroke="url(#grad-cyan)" stroke-width="4" />
  <!-- Tech badges floating -->
  <rect x="50" y="80" width="130" height="42" rx="21" fill="#0f172a" stroke="#06b6d4" stroke-width="2" />
  <text x="115" y="106" class="badge" fill="#38bdf8" text-anchor="middle">⚛️ React.js</text>
  
  <rect x="420" y="120" width="130" height="42" rx="21" fill="#0f172a" stroke="#10b981" stroke-width="2" />
  <text x="485" y="146" class="badge" fill="#34d399" text-anchor="middle">🍃 MERN Stack</text>

  <rect x="70" y="490" width="140" height="42" rx="21" fill="#0f172a" stroke="#8b5cf6" stroke-width="2" />
  <text x="140" y="516" class="badge" fill="#a78bfa" text-anchor="middle">⚡ Full Stack</text>

  <rect x="390" y="480" width="160" height="42" rx="21" fill="#0f172a" stroke="#f59e0b" stroke-width="2" />
  <text x="470" y="506" class="badge" fill="#fbbf24" text-anchor="middle">🏆 500+ Solved</text>
`);
fs.writeFileSync(path.join(publicDir, 'images/profile/avatar.png'), profileSvg);
fs.writeFileSync(path.join(publicDir, 'images/profile/avatar.svg'), profileSvg);

// 2. BookCart Project Mockup
const bookCartSvg = createSvg(800, 500, `
  <rect width="800" height="500" rx="24" fill="url(#bg-dark)" />
  <rect x="40" y="40" width="720" height="420" rx="16" fill="#1e293b" stroke="#334155" stroke-width="2" />
  <!-- Browser Header -->
  <rect x="40" y="40" width="720" height="44" rx="16" fill="#0f172a" />
  <circle cx="65" cy="62" r="6" fill="#ef4444" />
  <circle cx="85" cy="62" r="6" fill="#f59e0b" />
  <circle cx="105" cy="62" r="6" fill="#10b981" />
  <rect x="140" y="50" width="400" height="24" rx="6" fill="#1e293b" />
  <text x="160" y="66" class="subtitle" font-size="12">https://bookcart-store.dev</text>
  <!-- BookCart Content UI -->
  <rect x="65" y="105" width="220" height="330" rx="12" fill="#0b0f19" stroke="url(#grad-cyan)" stroke-width="2" />
  <rect x="80" y="125" width="190" height="180" rx="8" fill="#1e293b" />
  <text x="175" y="215" class="title" font-size="28" fill="url(#grad-cyan)" text-anchor="middle">📚</text>
  <text x="85" y="335" class="title" font-size="16">BookCart E-Store</text>
  <text x="85" y="360" class="subtitle" font-size="13">MERN Architecture</text>
  <rect x="85" y="380" width="90" height="28" rx="6" fill="#06b6d4" />
  <text x="130" y="399" class="badge" fill="#ffffff" text-anchor="middle">$39.99</text>

  <!-- Right Dashboard cards -->
  <rect x="310" y="105" width="425" height="150" rx="12" fill="#0b0f19" stroke="#334155" stroke-width="1.5" />
  <text x="330" y="138" class="title" font-size="17">⚡ Cart &amp; Real-time Checkout</text>
  <text x="330" y="165" class="subtitle" font-size="13">JWT Cookie Auth • MongoDB Aggregations • Payment Gateway</text>
  <rect x="330" y="190" width="90" height="32" rx="6" fill="#10b981" fill-opacity="0.2" stroke="#10b981" />
  <text x="375" y="211" class="badge" fill="#34d399" text-anchor="middle">In Stock</text>
  <rect x="435" y="190" width="140" height="32" rx="6" fill="#06b6d4" fill-opacity="0.2" stroke="#06b6d4" />
  <text x="505" y="211" class="badge" fill="#38bdf8" text-anchor="middle">Fast Checkout</text>

  <rect x="310" y="275" width="425" height="160" rx="12" fill="#0b0f19" stroke="#334155" stroke-width="1.5" />
  <text x="330" y="308" class="title" font-size="17">📊 Admin Inventory Metrics</text>
  <path d="M 335 390 L 390 350 L 450 370 L 520 330 L 590 345 L 680 300" fill="none" stroke="url(#grad-cyan)" stroke-width="3" />
`);
fs.writeFileSync(path.join(publicDir, 'images/projects/bookcart.png'), bookCartSvg);

// 3. Real Talks Project Mockup
const realTalksSvg = createSvg(800, 500, `
  <rect width="800" height="500" rx="24" fill="url(#bg-dark)" />
  <rect x="40" y="40" width="720" height="420" rx="16" fill="#1e293b" stroke="#334155" stroke-width="2" />
  <!-- Browser Header -->
  <rect x="40" y="40" width="720" height="44" rx="16" fill="#0f172a" />
  <circle cx="65" cy="62" r="6" fill="#ef4444" />
  <circle cx="85" cy="62" r="6" fill="#f59e0b" />
  <circle cx="105" cy="62" r="6" fill="#10b981" />
  <rect x="140" y="50" width="400" height="24" rx="6" fill="#1e293b" />
  <text x="160" y="66" class="subtitle" font-size="12">https://realtalks.chat</text>
  
  <!-- Sidebar -->
  <rect x="40" y="84" width="220" height="376" fill="#0f172a" />
  <text x="60" y="120" class="title" font-size="16">💬 Conversations</text>
  <rect x="55" y="140" width="190" height="44" rx="8" fill="#1e293b" stroke="url(#grad-emerald)" stroke-width="1.5" />
  <circle cx="75" cy="162" r="12" fill="#06b6d4" />
  <circle cx="83" cy="170" r="4" fill="#10b981" />
  <text x="96" y="166" class="title" font-size="13">Pratham Kumar</text>
  
  <rect x="55" y="195" width="190" height="44" rx="8" fill="#111827" />
  <circle cx="75" cy="217" r="12" fill="#8b5cf6" />
  <text x="96" y="221" class="title" font-size="13">Dev Team Alpha</text>

  <!-- Chat Area -->
  <rect x="260" y="84" width="500" height="376" fill="#0b0f19" />
  <!-- Messages -->
  <rect x="290" y="130" width="280" height="48" rx="12" fill="#1e293b" />
  <text x="310" y="160" class="title" font-size="13" fill="#e2e8f0">Hey Pratham! The WebSocket sync is ultra fast!</text>
  
  <rect x="440" y="200" width="290" height="52" rx="12" fill="#047857" />
  <text x="460" y="230" class="title" font-size="13" fill="#ffffff">Thanks! Powered by Socket.io &amp; MERN 🚀</text>
  
  <!-- Chat Input -->
  <rect x="280" y="390" width="460" height="48" rx="12" fill="#1e293b" stroke="#334155" stroke-width="1" />
  <text x="305" y="420" class="subtitle" font-size="13">Type a secure message...</text>
  <circle cx="710" cy="414" r="16" fill="#10b981" />
  <text x="704" y="420" fill="#ffffff" font-size="14">➤</text>
`);
fs.writeFileSync(path.join(publicDir, 'images/projects/realtalks.png'), realTalksSvg);

// 4. DevConnect Mockup
const devConnectSvg = createSvg(800, 500, `
  <rect width="800" height="500" rx="24" fill="url(#bg-dark)" />
  <rect x="40" y="40" width="720" height="420" rx="16" fill="#1e293b" stroke="#334155" stroke-width="2" />
  <!-- Header -->
  <rect x="40" y="40" width="720" height="44" rx="16" fill="#0f172a" />
  <text x="70" y="68" class="title" font-size="18" fill="url(#grad-purple)">⚡ DevConnect</text>
  <!-- Content cards -->
  <rect x="70" y="110" width="660" height="150" rx="12" fill="#0b0f19" stroke="#334155" stroke-width="1" />
  <circle cx="110" cy="150" r="22" fill="#8b5cf6" />
  <text x="145" y="150" class="title" font-size="16">Alex Rivera • Senior MERN Architect</text>
  <text x="145" y="172" class="subtitle" font-size="13">Looking for frontend contributors for open-source AI playground.</text>
  <rect x="145" y="195" width="80" height="24" rx="12" fill="#8b5cf6" fill-opacity="0.2" />
  <text x="185" y="211" class="badge" fill="#c084fc" text-anchor="middle">React</text>
  <rect x="235" y="195" width="90" height="24" rx="12" fill="#06b6d4" fill-opacity="0.2" />
  <text x="280" y="211" class="badge" fill="#38bdf8" text-anchor="middle">Node.js</text>

  <rect x="70" y="280" width="660" height="150" rx="12" fill="#0b0f19" stroke="#334155" stroke-width="1" />
  <circle cx="110" cy="320" r="22" fill="#10b981" />
  <text x="145" y="320" class="title" font-size="16">Pratham Kumar • Full-Stack Engineer</text>
  <text x="145" y="342" class="subtitle" font-size="13">Published paper on WebSocket performance benchmarks. Check it out!</text>
`);
fs.writeFileSync(path.join(publicDir, 'images/projects/devconnect.png'), devConnectSvg);

// 5. TaskFlow Pro Mockup
const taskflowSvg = createSvg(800, 500, `
  <rect width="800" height="500" rx="24" fill="url(#bg-dark)" />
  <rect x="40" y="40" width="720" height="420" rx="16" fill="#1e293b" stroke="#334155" stroke-width="2" />
  <rect x="40" y="40" width="720" height="44" rx="16" fill="#0f172a" />
  <text x="70" y="68" class="title" font-size="18" fill="url(#grad-amber)">📋 TaskFlow Kanban</text>
  <!-- Columns -->
  <rect x="70" y="105" width="205" height="330" rx="10" fill="#0b0f19" />
  <text x="85" y="132" class="title" font-size="14" fill="#94a3b8">TODO (3)</text>
  <rect x="80" y="150" width="185" height="70" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1" />
  <text x="95" y="175" class="title" font-size="13">Auth Interceptor</text>
  <text x="95" y="198" class="badge" font-size="10" fill="#f59e0b">HIGH PRIORITY</text>

  <rect x="295" y="105" width="205" height="330" rx="10" fill="#0b0f19" />
  <text x="310" y="132" class="title" font-size="14" fill="#38bdf8">IN PROGRESS (2)</text>
  <rect x="305" y="150" width="185" height="80" rx="8" fill="#1e293b" stroke="#06b6d4" stroke-width="1.5" />
  <text x="320" y="175" class="title" font-size="13">WebSocket Chat Feed</text>
  <text x="320" y="205" class="badge" font-size="10" fill="#38bdf8">REACT + SOCKET</text>

  <rect x="520" y="105" width="205" height="330" rx="10" fill="#0b0f19" />
  <text x="535" y="132" class="title" font-size="14" fill="#34d399">COMPLETED (8)</text>
  <rect x="530" y="150" width="185" height="70" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1" />
  <text x="545" y="175" class="title" font-size="13">Database Schema</text>
  <text x="545" y="198" class="badge" font-size="10" fill="#34d399">DONE ✓</text>
`);
fs.writeFileSync(path.join(publicDir, 'images/projects/taskflow.png'), taskflowSvg);

// 6. Algolyze Mockup
const algolyzeSvg = createSvg(800, 500, `
  <rect width="800" height="500" rx="24" fill="url(#bg-dark)" />
  <rect x="40" y="40" width="720" height="420" rx="16" fill="#1e293b" stroke="#334155" stroke-width="2" />
  <rect x="40" y="40" width="720" height="44" rx="16" fill="#0f172a" />
  <text x="70" y="68" class="title" font-size="18" fill="url(#grad-cyan)">📊 Algolyze Visualizer</text>
  <!-- Bars for Sorting visualizer -->
  <g transform="translate(100, 420) scale(1, -1)">
    <rect x="0" y="0" width="20" height="90" fill="#06b6d4" rx="4" />
    <rect x="30" y="0" width="20" height="140" fill="#06b6d4" rx="4" />
    <rect x="60" y="0" width="20" height="70" fill="#06b6d4" rx="4" />
    <rect x="90" y="0" width="20" height="220" fill="#ef4444" rx="4" />
    <rect x="120" y="0" width="20" height="180" fill="#f59e0b" rx="4" />
    <rect x="150" y="0" width="20" height="120" fill="#06b6d4" rx="4" />
    <rect x="180" y="0" width="20" height="260" fill="#10b981" rx="4" />
    <rect x="210" y="0" width="20" height="190" fill="#06b6d4" rx="4" />
    <rect x="240" y="0" width="20" height="290" fill="#10b981" rx="4" />
    <rect x="270" y="0" width="20" height="80" fill="#06b6d4" rx="4" />
    <rect x="300" y="0" width="20" height="160" fill="#06b6d4" rx="4" />
    <rect x="330" y="0" width="20" height="240" fill="#10b981" rx="4" />
    <rect x="360" y="0" width="20" height="110" fill="#06b6d4" rx="4" />
    <rect x="390" y="0" width="20" height="210" fill="#06b6d4" rx="4" />
    <rect x="420" y="0" width="20" height="150" fill="#06b6d4" rx="4" />
    <rect x="450" y="0" width="20" height="280" fill="#10b981" rx="4" />
  </g>
  <rect x="580" y="110" width="160" height="120" rx="8" fill="#0b0f19" stroke="#334155" />
  <text x="595" y="140" class="title" font-size="13">QuickSort</text>
  <text x="595" y="165" class="subtitle" font-size="12">Time: O(N log N)</text>
  <text x="595" y="190" class="subtitle" font-size="12">Swaps: 48</text>
`);
fs.writeFileSync(path.join(publicDir, 'images/projects/algolyze.png'), algolyzeSvg);

// 7. Certificates
const certs = [
  { name: 'web-dev-bootcamp.png', title: 'The Complete Web Development (MERN)', issuer: 'Udemy', color: 'url(#grad-purple)' },
  { name: 'meta-react.png', title: 'Meta Advanced React Professional', issuer: 'Meta Coursera', color: 'url(#grad-cyan)' },
  { name: 'dsa-java.png', title: 'Data Structures & Algorithms in Java', issuer: 'GeeksforGeeks', color: 'url(#grad-emerald)' },
  { name: 'postman-expert.png', title: 'Postman API Student Expert', issuer: 'Postman', color: 'url(#grad-amber)' },
  { name: 'mongodb-associate.png', title: 'MongoDB Node.js Developer Associate', issuer: 'MongoDB University', color: 'url(#grad-emerald)' },
  { name: 'git-workflow.png', title: 'Git & GitHub Professional Workflow', issuer: 'Coursera', color: 'url(#grad-cyan)' },
];

certs.forEach(c => {
  const svg = createSvg(800, 560, `
    <rect width="800" height="560" rx="20" fill="url(#bg-dark)" />
    <rect x="30" y="30" width="740" height="500" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2" />
    <rect x="50" y="50" width="700" height="460" rx="10" fill="none" stroke="${c.color}" stroke-width="3" stroke-dasharray="6 4" opacity="0.8" />
    
    <!-- Seal -->
    <circle cx="400" cy="130" r="45" fill="#1e293b" stroke="${c.color}" stroke-width="3" />
    <text x="400" y="142" font-size="34" text-anchor="middle">🎓</text>

    <text x="400" y="220" class="subtitle" font-size="16" letter-spacing="4" text-anchor="middle">CERTIFICATE OF ACCOMPLISHMENT</text>
    <text x="400" y="270" class="title" font-size="28" fill="#f8fafc" text-anchor="middle">${c.title}</text>
    
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

// 8. Research Paper Preview
const pubSvg = createSvg(800, 600, `
  <rect width="800" height="600" rx="20" fill="url(#bg-dark)" />
  <rect x="40" y="40" width="720" height="520" rx="12" fill="#ffffff" />
  <text x="80" y="100" font-family="serif" font-size="22" font-weight="bold" fill="#0f172a">Optimizing Real-Time Web Communication: WebSockets vs REST</text>
  <text x="80" y="135" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0284c7">Pratham Kumar, Dr. A. Sharma</text>
  <text x="80" y="160" font-family="sans-serif" font-size="12" fill="#64748b">IEEE ICACCT International Conference Proceedings • DOI: 10.1109/ICACCT.2024.1082914</text>
  
  <rect x="80" y="185" width="640" height="2" fill="#cbd5e1" />
  
  <text x="80" y="220" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0f172a">ABSTRACT</text>
  <text x="80" y="250" font-family="serif" font-size="13" fill="#334155">This paper benchmarks latency and throughput between WebSocket &amp; REST architectures</text>
  <text x="80" y="275" font-family="serif" font-size="13" fill="#334155">in high-concurrency microservices. Results demonstrate up to 68% packet overhead savings.</text>

  <!-- Graphs -->
  <rect x="80" y="320" width="300" height="200" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
  <text x="100" y="350" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a">Latency Comparison (ms)</text>
  <rect x="110" y="460" width="40" height="40" fill="#0284c7" />
  <rect x="180" y="390" width="40" height="110" fill="#ef4444" />
  <text x="130" y="515" font-size="11" fill="#475569" text-anchor="middle">WS</text>
  <text x="200" y="515" font-size="11" fill="#475569" text-anchor="middle">REST</text>

  <rect x="420" y="320" width="300" height="200" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
  <text x="440" y="350" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a">Throughput (Req/Sec)</text>
  <path d="M 440 480 L 490 450 L 540 420 L 600 380 L 680 340" fill="none" stroke="#10b981" stroke-width="3" />
`);
fs.writeFileSync(path.join(publicDir, 'images/publications/paper-preview.png'), pubSvg);

// 9. Sports & Achievements
const sportsList = [
  { name: 'badminton-championship.png', title: '🏸 Inter-College Badminton Gold', subtitle: 'Annual Sports Fest Spardha 2024' },
  { name: 'cricket-runnersup.png', title: '🏏 Inter-Department Cricket Trophy', subtitle: 'Runners-Up Award 2023' },
  { name: 'hackathon-win.png', title: '🏆 HackMatrix National Hackathon', subtitle: '2nd Runner-Up FinTech Track' },
  { name: 'coding-olympiad.png', title: '🥇 University Coding Olympiad', subtitle: 'Rank 1 Overall Winner 2023' },
];

sportsList.forEach(s => {
  const svg = createSvg(800, 520, `
    <rect width="800" height="520" rx="20" fill="url(#bg-dark)" />
    <rect x="30" y="30" width="740" height="460" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2" />
    
    <circle cx="400" cy="160" r="60" fill="#1e293b" stroke="url(#grad-amber)" stroke-width="4" />
    <text x="400" y="178" font-size="48" text-anchor="middle">🏆</text>

    <text x="400" y="270" class="title" font-size="28" fill="#ffffff" text-anchor="middle">${s.title}</text>
    <text x="400" y="315" class="subtitle" font-size="18" fill="#38bdf8" text-anchor="middle">${s.subtitle}</text>
    
    <rect x="250" y="360" width="300" height="46" rx="23" fill="url(#grad-amber)" fill-opacity="0.2" stroke="#f59e0b" stroke-width="1.5" />
    <text x="400" y="390" class="badge" font-size="16" fill="#fbbf24" text-anchor="middle">⭐ Verified Achievement</text>
  `);
  fs.writeFileSync(path.join(publicDir, `images/sports/${s.name}`), svg);
});

// 10. Education
const eduSvg = createSvg(400, 400, `
  <rect width="400" height="400" rx="24" fill="url(#bg-dark)" />
  <circle cx="200" cy="200" r="140" fill="#1e293b" stroke="url(#grad-cyan)" stroke-width="3" />
  <text x="200" y="215" font-size="80" text-anchor="middle">🏛️</text>
`);
fs.writeFileSync(path.join(publicDir, 'images/education/university.png'), eduSvg);
fs.writeFileSync(path.join(publicDir, 'images/education/school.png'), eduSvg);

// 11. Resume dummy PDF
fs.writeFileSync(path.join(publicDir, 'resume.pdf'), '%PDF-1.4 Pratham Kumar Full Stack Developer Resume');

console.log('All portfolio assets generated successfully.');
