import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import PDFDocument from 'pdfkit';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.resolve(__dirname, '../public');
const distDir = path.resolve(__dirname, '../dist');
const outputPath = path.resolve(publicDir, 'resume.pdf');
const namedPath = path.resolve(publicDir, 'Pratham_Kumar_Resume.pdf');

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Pratham Kumar - Resume</title>
<style>
  @page {
    size: letter;
    margin: 0.32in 0.45in 0.28in 0.45in;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
    font-size: 8.8pt;
    line-height: 1.22;
    color: #000000;
    background: #ffffff;
    -webkit-print-color-adjust: exact;
  }
  a {
    color: #000000;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  .header {
    text-align: center;
    margin-bottom: 4px;
  }
  .header h1 {
    font-size: 20pt;
    font-weight: 800;
    letter-spacing: -0.2px;
    margin-bottom: 1.5px;
  }
  .header h1 a {
    color: #000000;
    text-decoration: none;
  }
  .contact-line {
    font-size: 8.2pt;
    color: #111827;
  }
  .contact-line a {
    text-decoration: none;
  }
  .sep {
    color: #4b5563;
    padding: 0 1.5px;
  }
  .section-title {
    font-size: 9.8pt;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-bottom: 0.75px solid #1f2937;
    padding-bottom: 1px;
    margin-top: 4.5px;
    margin-bottom: 2.5px;
  }
  .summary {
    font-size: 8.5pt;
    line-height: 1.25;
    text-align: justify;
    margin-bottom: 1px;
  }
  .list {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }
  .list-item {
    font-size: 8.5pt;
    line-height: 1.24;
    margin-bottom: 1px;
  }
  .list-item strong {
    font-weight: 700;
  }
  .project-block, .edu-block {
    margin-bottom: 3px;
  }
  .row-flex {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
  .proj-title {
    font-size: 9pt;
    font-weight: 700;
  }
  .proj-title a {
    text-decoration: none;
  }
  .proj-title a:hover {
    text-decoration: underline;
  }
  .proj-tech, .edu-date {
    font-size: 8.1pt;
    font-style: italic;
    color: #374151;
    text-align: right;
  }
  .proj-role {
    font-size: 8.3pt;
    font-style: italic;
    color: #1f2937;
  }
  .bullet-list {
    list-style: none;
    padding-left: 11px;
    margin-top: 0.5px;
    margin-bottom: 1px;
  }
  .bullet-item {
    position: relative;
    font-size: 8.3pt;
    line-height: 1.22;
    margin-bottom: 0.8px;
    text-align: justify;
  }
  .bullet-item::before {
    content: "•";
    position: absolute;
    left: -9px;
    top: 0;
    font-size: 7.5pt;
    color: #000000;
  }
  .simple-bullet {
    position: relative;
    padding-left: 10px;
    font-size: 8.4pt;
    line-height: 1.22;
    margin-bottom: 1.2px;
  }
  .simple-bullet::before {
    content: "•";
    position: absolute;
    left: 0;
    top: 0;
    font-size: 7.5pt;
    color: #000000;
  }
  .simple-bullet strong {
    font-weight: 700;
  }
</style>
</head>
<body>

<div class="header">
  <h1><a href="https://pratham-portfolio-tau.vercel.app">Pratham Kumar</a></h1>
  <div class="contact-line">
    Noida, Uttar Pradesh, India
    <span class="sep">|</span> +91-8409635355
    <span class="sep">|</span> <a href="mailto:prathamshahi0001@gmail.com">prathamshahi0001@gmail.com</a>
    <span class="sep">|</span> <a href="https://www.linkedin.com/in/pshahi5/">LinkedIn</a>
    <span class="sep">|</span> <a href="https://github.com/prathamshahi1">GitHub</a>
    <span class="sep">|</span> <a href="https://www.geeksforgeeks.org/profile/pshahi5?tab=activity">GFG</a>
    <span class="sep">|</span> <a href="https://leetcode.com/u/_pshahi/">LeetCode</a>
  </div>
</div>

<div class="section-title">Professional Summary</div>
<p class="summary">
  B.Tech Computer Science graduate with a CGPA of 7.63/10 and hands-on experience in full-stack web development using the MERN stack. Skilled in Java, JavaScript, SQL, Data Structures and Algorithms, and REST API development. Solved 120+ DSA problems and built full-stack web applications using MongoDB, Express.js, React.js, and Node.js. IEEE-published researcher with a strong foundation in software development and problem-solving.
</p>

<div class="section-title">Technical Skills</div>
<div class="list">
  <div class="list-item"><strong>Programming Languages</strong>: Java, C, C++, JavaScript, SQL, Python</div>
  <div class="list-item"><strong>Web Technologies</strong>: HTML, CSS, React.js, Node.js, Express.js, REST APIs, Firebase, MongoDB</div>
  <div class="list-item"><strong>Tools &amp; Platforms</strong>: Git, GitHub, VS Code, IntelliJ IDEA, Postman, MySQL</div>
  <div class="list-item"><strong>Core Concepts</strong>: Data Structures &amp; Algorithms, OOP, Database Management Systems (DBMS)</div>
</div>

<div class="section-title">Projects</div>
<div class="project-block">
  <div class="row-flex">
    <span class="proj-title"><a href="https://imageinkb.com/">Image In Kb</a></span>
    <span class="proj-tech"><a href="https://github.com/prathamshahi1/Image-In-Kb">GitHub</a></span>
  </div>
  <div class="row-flex" style="margin-bottom: 1.5px;">
    <span class="proj-role">Full-Stack Developer</span>
    <span class="proj-tech">React, Node.js, Express, Sharp, MongoDB, Cloudflare Workers, Tailwind CSS</span>
  </div>
  <ul class="bullet-list">
    <li class="bullet-item">Architected a privacy-first, zero-storage image optimization platform delivering sub-100ms transformations using in-memory Node.js buffers, eliminating disk I/O and data retention risk</li>
    <li class="bullet-item">Developed an iterative binary-search quality-tuning algorithm to hit exact target file sizes (e.g. 50KB for visa/exam portal uploads), achieving 90%+ size reduction with minimal quality loss</li>
    <li class="bullet-item">Deployed globally on Cloudflare Workers with custom SPA routing, automated CI/CD pipeline, and Google Search Console SEO optimization for improved discoverability</li>
  </ul>
</div>

<div class="project-block">
  <div class="row-flex">
    <span class="proj-title"><a href="https://book-cart-omega.vercel.app">BookCart</a></span>
    <span class="proj-tech"><a href="https://github.com/prathamshahi1/BookCart">GitHub</a></span>
  </div>
  <div class="row-flex" style="margin-bottom: 1.5px;">
    <span class="proj-role">Full-Stack Developer</span>
    <span class="proj-tech">React, Node.js, Express.js, MongoDB Atlas, Redux Toolkit, Tailwind CSS, Vite, esbuild, Vercel</span>
  </div>
  <ul class="bullet-list">
    <li class="bullet-item">Architected a full-stack MERN e-commerce bookstore platform featuring 350ms debounced search, dynamic price-range filtering (₹59–₹199), and a single-page 1-click checkout flow</li>
    <li class="bullet-item">Engineered a serverless Express API with global Mongoose connection caching and atomic $inc stock transactions, eliminating checkout race conditions and reducing cold-start latency by 40%</li>
    <li class="bullet-item">Bundled serverless functions into a 65KB standalone distribution using esbuild and deployed on Vercel Edge with SPA rewrites, automated CI/CD, and JWT role-based access control</li>
  </ul>
</div>

<div class="project-block">
  <div class="row-flex">
    <span class="proj-title"><a href="https://real-talks-eight.vercel.app/login">Real Talks</a></span>
    <span class="proj-tech"><a href="https://github.com/prathamshahi1/Real-Talks">GitHub</a></span>
  </div>
  <div class="row-flex" style="margin-bottom: 1.5px;">
    <span class="proj-role">Full-Stack Developer</span>
    <span class="proj-tech">React, Node.js, Express.js, Socket.IO, MongoDB Atlas, Tailwind CSS, Cloudinary, JWT, Vercel, Render</span>
  </div>
  <ul class="bullet-list">
    <li class="bullet-item">Architected a high-concurrency real-time chat platform delivering sub-10ms bidirectional message delivery via Socket.IO room multiplexing, multi-tab presence tracking, and debounced typing indicators</li>
    <li class="bullet-item">Engineered zero-overhead database maintenance using MongoDB native TTL indexes (86,400s) for automated 24-hour message pruning, paired with a dual-layer authentication system (HTTP-Only cookies + Bearer token fallback) to handle cross-origin restrictions</li>
    <li class="bullet-item">Developed role-based group channel governance with automated admin succession and a Multer + Cloudinary media pipeline with interactive lightbox zoom, deployed across Vercel Edge CDN and Render</li>
  </ul>
</div>

<div class="section-title">Publications</div>
<div class="simple-bullet">
  <a href="https://ieeexplore.ieee.org/document/11325188">“A Systematic Framework for Text-to-Speech System,”</a> IEEE, 2025 – Co-authored a research paper presenting a structured framework for TTS system design and implementation
</div>

<div class="section-title">Education</div>
<div class="edu-block">
  <div class="row-flex">
    <span style="font-weight: 700; font-size: 9.1pt;">Sharda University</span>
    <span class="edu-date" style="font-style: normal; font-size: 8.8pt;">2022 – 2026</span>
  </div>
  <div class="row-flex">
    <span style="font-style: italic; font-size: 8.6pt; color: #374151;">B.Tech in Computer Science</span>
    <span style="font-style: italic; font-size: 8.6pt; color: #111827;">CGPA: 7.63 / 10</span>
  </div>
</div>

<div class="edu-block">
  <div class="row-flex">
    <span style="font-weight: 700; font-size: 9.1pt;">Asian School</span>
    <span class="edu-date" style="font-style: normal; font-size: 8.8pt;">2021</span>
  </div>
  <div class="row-flex">
    <span style="font-style: italic; font-size: 8.6pt; color: #374151;">Senior Secondary Education (Class XII)</span>
    <span style="font-style: italic; font-size: 8.6pt; color: #111827;">Percentage: 84.2%</span>
  </div>
</div>

<div class="edu-block">
  <div class="row-flex">
    <span style="font-weight: 700; font-size: 9.1pt;">Asian School</span>
    <span class="edu-date" style="font-style: normal; font-size: 8.8pt;">2019</span>
  </div>
  <div class="row-flex">
    <span style="font-style: italic; font-size: 8.6pt; color: #374151;">Secondary Education (Class X)</span>
    <span style="font-style: italic; font-size: 8.6pt; color: #111827;">Percentage: 85%</span>
  </div>
</div>

<div class="section-title">Certifications</div>
<div class="simple-bullet">
  <strong>Oracle Academy:</strong> Java Fundamentals, Database Foundations, and AI Foundations Associate – core programming, relational databases, and AI concepts
</div>
<div class="simple-bullet">
  <strong>Apna College:</strong> Data Structures &amp; Algorithms (DSA) in Java – intensive problem-solving and competitive programming training
</div>
<div class="simple-bullet">
  <strong>MySirG:</strong> Java Standard Edition (Core Java) – 3-month comprehensive Core Java training program
</div>
<div class="simple-bullet">
  <strong>MERN Stack Bootcamp –</strong> hands-on full-stack development training using MongoDB, Express.js, React.js, and Node.js
</div>

<div class="section-title">Extracurricular Activities</div>
<div class="simple-bullet">
  <strong>Table Tennis Player:</strong> Represented Sharda University at the All India University Table Tennis Tournament, demonstrating discipline, competitiveness, and time management
</div>
<div class="simple-bullet">
  <strong>Kartavya NGO:</strong> Active member and facilitator, coordinating community outreach and social impact activities, demonstrating leadership and teamwork
</div>

</body>
</html>`;

function copyToOutputs() {
  fs.copyFileSync(outputPath, namedPath);
  if (fs.existsSync(distDir)) {
    fs.copyFileSync(outputPath, path.join(distDir, 'resume.pdf'));
    fs.copyFileSync(outputPath, path.join(distDir, 'Pratham_Kumar_Resume.pdf'));
  }
}

function buildWithChrome() {
  const chromePaths = [
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser',
    '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
    'google-chrome',
    'chromium',
    'chromium-browser'
  ];

  const chromeBin = chromePaths.find(p => fs.existsSync(p));
  if (!chromeBin) return false;

  const tempHtml = path.resolve(__dirname, '../public/_resume_temp.html');
  fs.writeFileSync(tempHtml, htmlContent);

  try {
    const cmd = `"${chromeBin}" --headless=new --disable-gpu --no-sandbox --disable-background-networking --disable-default-apps --disable-extensions --disable-sync --disable-translate --hide-scrollbars --metrics-recording-only --mute-audio --no-first-run --print-to-pdf-no-header --print-to-pdf="${outputPath}" "file://${tempHtml}"`;
    execSync(cmd, { stdio: 'ignore' });
    fs.unlinkSync(tempHtml);
    copyToOutputs();
    console.log('✓ Crystal-clear LaTeX PDF resume built via Chrome Headless at ' + outputPath);
    return true;
  } catch (err) {
    if (fs.existsSync(tempHtml)) fs.unlinkSync(tempHtml);
    return false;
  }
}

function buildWithPDFKit() {
  const doc = new PDFDocument({
    size: 'A4',
    margins: { top: 26, bottom: 26, left: 34, right: 34 }
  });

  const writeStream = fs.createWriteStream(outputPath);
  doc.pipe(writeStream);

  const pageWidth = 595.28;
  const leftMargin = 34;
  const rightMargin = 34;
  const contentWidth = pageWidth - leftMargin - rightMargin;

  const cBlack = '#000000';
  const cDark = '#111827';
  const cGray = '#4b5563';
  const cRule = '#1f2937';

  function drawSectionHeader(title) {
    doc.moveDown(0.28);
    doc.font('Helvetica-Bold').fontSize(9.8).fillColor(cBlack).text(title.toUpperCase(), { characterSpacing: 0.5 });
    const y = doc.y + 1.2;
    doc.strokeColor(cRule).lineWidth(0.7).moveTo(leftMargin, y).lineTo(pageWidth - rightMargin, y).stroke();
    doc.y = y + 3;
  }

  function drawBullet(leadText, normalText, extraSpace = 1.6, url = null) {
    const startX = leftMargin + 9;
    const bulletX = leftMargin;
    const currentY = doc.y;
    
    doc.font('Helvetica').fontSize(8.5).fillColor(cBlack).text('•', bulletX, currentY, { width: 8, lineGap: 0.8 });
    doc.y = currentY;
    
    if (leadText) {
      doc.font('Helvetica-Bold').fontSize(8.5).fillColor(cBlack).text(leadText + ' ', startX, currentY, {
        continued: true,
        width: contentWidth - 9,
        lineGap: 1.1
      });
    }
    
    const textOptions = {
      continued: false,
      width: contentWidth - 9,
      lineGap: 1.1
    };
    if (url) {
      textOptions.link = url;
      textOptions.underline = true;
    }
    
    doc.font('Helvetica').fontSize(8.5).fillColor(cDark).text(normalText, leadText ? undefined : startX, leadText ? undefined : currentY, textOptions);
    doc.y += extraSpace;
  }

  // Header
  doc.font('Helvetica-Bold').fontSize(22).fillColor(cBlack).text('Pratham Kumar', {
    align: 'center',
    link: 'https://pratham-portfolio-tau.vercel.app'
  });
  doc.moveDown(0.15);

  const contactY = doc.y;
  doc.font('Helvetica').fontSize(8.4).fillColor(cDark);
  doc.text('Noida, Uttar Pradesh, India | +91-8409635355 | ', leftMargin, contactY, { align: 'center', continued: true });
  doc.text('prathamshahi0001@gmail.com', { link: 'mailto:prathamshahi0001@gmail.com', continued: true });
  doc.text(' | ', { continued: true });
  doc.text('LinkedIn', { link: 'https://www.linkedin.com/in/pshahi5/', continued: true });
  doc.text(' | ', { continued: true });
  doc.text('GitHub', { link: 'https://github.com/prathamshahi1', continued: true });
  doc.text(' | ', { continued: true });
  doc.text('GFG', { link: 'https://www.geeksforgeeks.org/profile/pshahi5?tab=activity', continued: true });
  doc.text(' | ', { continued: true });
  doc.text('LeetCode', { link: 'https://leetcode.com/u/_pshahi/', continued: false });

  doc.moveDown(0.22);

  // Professional Summary
  drawSectionHeader('Professional Summary');
  doc.font('Helvetica').fontSize(8.5).fillColor(cDark).text(
    'B.Tech Computer Science graduate with a CGPA of 7.63/10 and hands-on experience in full-stack web development using the MERN stack. Skilled in Java, JavaScript, SQL, Data Structures and Algorithms, and REST API development. Solved 120+ DSA problems and built full-stack web applications using MongoDB, Express.js, React.js, and Node.js. IEEE-published researcher with a strong foundation in software development and problem-solving.',
    leftMargin,
    doc.y,
    { width: contentWidth, align: 'justify', lineGap: 1.1 }
  );

  // Technical Skills
  drawSectionHeader('Technical Skills');
  const skillsList = [
    { label: 'Programming Languages: ', val: 'Java, C, C++, JavaScript, SQL, Python' },
    { label: 'Web Technologies: ', val: 'HTML, CSS, React.js, Node.js, Express.js, REST APIs, Firebase, MongoDB' },
    { label: 'Tools & Platforms: ', val: 'Git, GitHub, VS Code, IntelliJ IDEA, Postman, MySQL' },
    { label: 'Core Concepts: ', val: 'Data Structures & Algorithms, OOP, Database Management Systems (DBMS)' }
  ];

  skillsList.forEach(item => {
    doc.font('Helvetica-Bold').fontSize(8.5).fillColor(cBlack).text(item.label, leftMargin, doc.y, { continued: true, lineGap: 1 });
    doc.font('Helvetica').fontSize(8.5).fillColor(cDark).text(item.val, { continued: false, lineGap: 1 });
    doc.y += 0.6;
  });

  // Projects
  drawSectionHeader('Projects');

  function drawProject(title, titleUrl, githubUrl, tech, bullets) {
    const pY = doc.y;
    doc.font('Helvetica-Bold').fontSize(9.3).fillColor(cBlack).text(title, leftMargin, pY, { link: titleUrl, continued: false });
    doc.font('Helvetica').fontSize(8.4).fillColor(cBlack).text('GitHub', pageWidth - rightMargin - 35, pY, { link: githubUrl, align: 'right' });
    
    doc.y = pY + 11;
    doc.font('Helvetica-Oblique').fontSize(8.5).fillColor(cBlack).text('Full-Stack Developer', leftMargin, doc.y, { continued: true });
    doc.font('Helvetica-Oblique').fontSize(8).fillColor(cGray).text('     ' + tech, { align: 'right' });
    doc.y += 1.8;

    bullets.forEach(b => drawBullet('', b, 1));
    doc.y += 1.5;
  }

  drawProject('Image In Kb', 'https://imageinkb.com/', 'https://github.com/prathamshahi1/Image-In-Kb', 'React, Node.js, Express, Sharp, MongoDB, Cloudflare Workers, Tailwind CSS', [
    'Architected a privacy-first, zero-storage image optimization platform delivering sub-100ms transformations using in-memory Node.js buffers, eliminating disk I/O and data retention risk',
    'Developed an iterative binary-search quality-tuning algorithm to hit exact target file sizes (e.g. 50KB for visa/exam portal uploads), achieving 90%+ size reduction with minimal quality loss',
    'Deployed globally on Cloudflare Workers with custom SPA routing, automated CI/CD pipeline, and Google Search Console SEO optimization for improved discoverability'
  ]);

  drawProject('BookCart', 'https://book-cart-omega.vercel.app', 'https://github.com/prathamshahi1/BookCart', 'React, Node.js, Express.js, MongoDB Atlas, Redux Toolkit, Tailwind CSS, Vite, esbuild, Vercel', [
    'Architected a full-stack MERN e-commerce bookstore platform featuring 350ms debounced search, dynamic price-range filtering (₹59–₹199), and a single-page 1-click checkout flow',
    'Engineered a serverless Express API with global Mongoose connection caching and atomic $inc stock transactions, eliminating checkout race conditions and reducing cold-start latency by 40%',
    'Bundled serverless functions into a 65KB standalone distribution using esbuild and deployed on Vercel Edge with SPA rewrites, automated CI/CD, and JWT role-based access control'
  ]);

  drawProject('Real Talks', 'https://real-talks-eight.vercel.app/login', 'https://github.com/prathamshahi1/Real-Talks', 'React, Node.js, Express.js, Socket.IO, MongoDB Atlas, Tailwind CSS, Cloudinary, JWT, Vercel, Render', [
    'Architected a high-concurrency real-time chat platform delivering sub-10ms bidirectional message delivery via Socket.IO room multiplexing, multi-tab presence tracking, and debounced typing indicators',
    'Engineered zero-overhead database maintenance using MongoDB native TTL indexes (86,400s) for automated 24-hour message pruning, paired with a dual-layer authentication system (HTTP-Only cookies + Bearer token fallback) to handle cross-origin restrictions',
    'Developed role-based group channel governance with automated admin succession and a Multer + Cloudinary media pipeline with interactive lightbox zoom, deployed across Vercel Edge CDN and Render'
  ]);

  // Publications
  drawSectionHeader('Publications');
  drawBullet('', '“A Systematic Framework for Text-to-Speech System,” IEEE, 2025 – Co-authored a research paper presenting a structured framework for TTS system design and implementation', 1.8, 'https://ieeexplore.ieee.org/document/11325188');

  // Education
  drawSectionHeader('Education');
  function drawEducationRow(inst, degree, dates, grade) {
    const startY = doc.y;
    doc.font('Helvetica-Bold').fontSize(9).fillColor(cBlack).text(inst, leftMargin, startY, { continued: false });
    doc.font('Helvetica').fontSize(8.5).fillColor(cDark).text(dates, leftMargin, startY, { align: 'right' });
    
    const line2Y = startY + 10.5;
    doc.font('Helvetica-Oblique').fontSize(8.5).fillColor(cGray).text(degree, leftMargin, line2Y, { continued: false });
    doc.font('Helvetica').fontSize(8.5).fillColor(cBlack).text(grade, leftMargin, line2Y, { align: 'right' });
    doc.y = line2Y + 11.5;
  }

  drawEducationRow('Sharda University', 'B.Tech in Computer Science', '2022 – 2026', 'CGPA: 7.63 / 10');
  drawEducationRow('Asian School', 'Senior Secondary Education (Class XII)', '2021', 'Percentage: 84.2%');
  drawEducationRow('Asian School', 'Secondary Education (Class X)', '2019', 'Percentage: 85%');

  // Certifications
  drawSectionHeader('Certifications');
  drawBullet('Oracle Academy:', 'Java Fundamentals, Database Foundations, and AI Foundations Associate – core programming, relational databases, and AI concepts', 1);
  drawBullet('Apna College:', 'Data Structures & Algorithms (DSA) in Java – intensive problem-solving and competitive programming training', 1);
  drawBullet('MySirG:', 'Java Standard Edition (Core Java) – 3-month comprehensive Core Java training program', 1);
  drawBullet('MERN Stack Bootcamp –', 'hands-on full-stack development training using MongoDB, Express.js, React.js, and Node.js', 1.5);

  // Extracurricular Activities
  drawSectionHeader('Extracurricular Activities');
  drawBullet('Table Tennis Player:', 'Represented Sharda University at the All India University Table Tennis Tournament, demonstrating discipline, competitiveness, and time management', 1);
  drawBullet('Kartavya NGO:', 'Active member and facilitator, coordinating community outreach and social impact activities, demonstrating leadership and teamwork', 1);

  doc.end();

  writeStream.on('finish', () => {
    copyToOutputs();
    console.log('✓ Vector PDF resume built via PDFKit at ' + outputPath);
  });
}

if (!buildWithChrome()) {
  buildWithPDFKit();
}


