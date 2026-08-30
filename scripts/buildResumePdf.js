import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import PDFDocument from 'pdfkit';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputPath = path.resolve(__dirname, '../public/resume.pdf');

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 32, bottom: 32, left: 36, right: 36 }
});

const writeStream = fs.createWriteStream(outputPath);
doc.pipe(writeStream);

const pageWidth = 595.28;
const leftMargin = 36;
const rightMargin = 36;
const contentWidth = pageWidth - leftMargin - rightMargin;

// Color Palette
const cBlack = '#111827';
const cDark = '#1e293b';
const cGray = '#475569';
const cLightGray = '#64748b';
const cRule = '#94a3b8';
const cLink = '#0f172a';

// Helper for section header with underline rule
function drawSectionHeader(title) {
  doc.moveDown(0.35);
  doc.font('Helvetica-Bold').fontSize(9.5).fillColor(cBlack).text(title.toUpperCase(), { characterSpacing: 0.5 });
  const y = doc.y + 1.5;
  doc.strokeColor(cRule).lineWidth(0.6).moveTo(leftMargin, y).lineTo(pageWidth - rightMargin, y).stroke();
  doc.y = y + 3.5;
}

// Helper for bullet items with bold prefix
function drawBullet(leadText, normalText, extraSpace = 2) {
  const startX = leftMargin + 10;
  const bulletX = leftMargin + 2;
  const currentY = doc.y;
  
  doc.font('Helvetica').fontSize(8.5).fillColor(cBlack).text('•', bulletX, currentY, { width: 8, lineGap: 1 });
  doc.y = currentY;
  
  if (leadText) {
    doc.font('Helvetica-Bold').fontSize(8.5).fillColor(cBlack).text(leadText + ' ', startX, currentY, {
      continued: true,
      width: contentWidth - 10,
      lineGap: 1.2
    });
    doc.font('Helvetica').fontSize(8.5).fillColor(cDark).text(normalText, {
      continued: false,
      lineGap: 1.2
    });
  } else {
    doc.font('Helvetica').fontSize(8.5).fillColor(cDark).text(normalText, startX, currentY, {
      width: contentWidth - 10,
      lineGap: 1.2
    });
  }
  doc.y += extraSpace;
}

// 1. Header: Name & Contact Info
doc.font('Helvetica-Bold').fontSize(22).fillColor(cBlack).text('Pratham Kumar', { align: 'center' });
doc.moveDown(0.2);

const contactY = doc.y;
doc.font('Helvetica').fontSize(8.5).fillColor(cGray);

const contactText = 'Noida, Uttar Pradesh, India  |  +91-8409635355  |  prathamshahi0001@gmail.com  |  ';
doc.text(contactText, leftMargin, contactY, {
  align: 'center',
  continued: true
});

// Clickable links
doc.fillColor(cLink).text('LinkedIn', {
  link: 'https://www.linkedin.com/in/pshahi5/',
  underline: true,
  continued: true
});
doc.fillColor(cGray).text('  |  ', { underline: false, continued: true });

doc.fillColor(cLink).text('GitHub', {
  link: 'https://github.com/prathamshahi1',
  underline: true,
  continued: true
});
doc.fillColor(cGray).text('  |  ', { underline: false, continued: true });

doc.fillColor(cLink).text('GFG', {
  link: 'https://www.geeksforgeeks.org/profile/pshahi5?tab=activity',
  underline: true,
  continued: true
});
doc.fillColor(cGray).text('  |  ', { underline: false, continued: true });

doc.fillColor(cLink).text('LeetCode', {
  link: 'https://leetcode.com/problemset/',
  underline: true,
  continued: false
});

doc.moveDown(0.3);

// 2. PROFESSIONAL SUMMARY
drawSectionHeader('Professional Summary');
doc.font('Helvetica').fontSize(8.5).fillColor(cDark).text(
  'B.Tech Computer Science graduate with a CGPA of 7.63/10 and hands-on experience in full-stack web development using the MERN stack. Skilled in Java, JavaScript, SQL, Data Structures and Algorithms, and REST API development. Solved 120+ DSA problems and built full-stack web applications using MongoDB, Express.js, React.js, and Node.js. IEEE-published researcher with a strong foundation in software development and problem-solving.',
  leftMargin,
  doc.y,
  { width: contentWidth, align: 'justify', lineGap: 1.2 }
);

// 3. TECHNICAL SKILLS
drawSectionHeader('Technical Skills');
const skillsList = [
  { label: 'Programming Languages: ', val: 'Java, C, C++, JavaScript, SQL, Python' },
  { label: 'Web Technologies: ', val: 'HTML, CSS, React.js, Node.js, Express.js, REST APIs, Firebase, MongoDB' },
  { label: 'Tools & Platforms: ', val: 'Git, GitHub, VS Code, IntelliJ IDEA, Postman, MySQL' },
  { label: 'Core Concepts: ', val: 'Data Structures & Algorithms, OOP, Database Management Systems (DBMS)' }
];

skillsList.forEach(item => {
  doc.font('Helvetica-Bold').fontSize(8.5).fillColor(cBlack).text(item.label, leftMargin, doc.y, {
    continued: true,
    lineGap: 1
  });
  doc.font('Helvetica').fontSize(8.5).fillColor(cDark).text(item.val, {
    continued: false,
    lineGap: 1
  });
  doc.y += 1;
});

// 4. PROJECTS
drawSectionHeader('Projects');

// Project 1: Image In Kb
const p1Y = doc.y;
doc.font('Helvetica-Bold').fontSize(9.5).fillColor(cBlack).text('Image In Kb', leftMargin, p1Y, { continued: false });
doc.font('Helvetica').fontSize(8.5).fillColor(cLink).text('GitHub', pageWidth - rightMargin - 35, p1Y, {
  link: 'https://github.com/prathamshahi1/Image-In-Kb',
  underline: true,
  align: 'right'
});

doc.y = p1Y + 11;
doc.font('Helvetica-Oblique').fontSize(8.5).fillColor(cBlack).text('Full-Stack Developer', leftMargin, doc.y, { continued: true });
doc.font('Helvetica-Oblique').fontSize(8).fillColor(cGray).text('     React, Node.js, Express, Sharp, MongoDB, Cloudflare Workers, Tailwind CSS', { align: 'right' });
doc.y += 2;

drawBullet('', 'Architected a privacy-first, zero-storage image optimization platform delivering sub-100ms transformations using in-memory Node.js buffers, eliminating disk I/O and data retention risk', 1);
drawBullet('', 'Developed an iterative binary-search quality-tuning algorithm to hit exact target file sizes (e.g. 50KB for visa/exam portal uploads), achieving 90%+ size reduction with minimal quality loss', 1);
drawBullet('', 'Deployed globally on Cloudflare Workers with custom SPA routing, automated CI/CD pipeline, and Google Search Console SEO optimization for improved discoverability', 3);

// Project 2: BookCart
const p2Y = doc.y;
doc.font('Helvetica-Bold').fontSize(9.5).fillColor(cBlack).text('BookCart', leftMargin, p2Y, { continued: false });
doc.font('Helvetica').fontSize(8.5).fillColor(cLink).text('GitHub', pageWidth - rightMargin - 35, p2Y, {
  link: 'https://github.com/prathamshahi1/BookCart',
  underline: true,
  align: 'right'
});

doc.y = p2Y + 11;
doc.font('Helvetica-Oblique').fontSize(8.5).fillColor(cBlack).text('Full-Stack Developer', leftMargin, doc.y, { continued: true });
doc.font('Helvetica-Oblique').fontSize(8).fillColor(cGray).text('     React, Node.js, Express.js, MongoDB Atlas, Redux Toolkit, Tailwind CSS, Vite, esbuild, Vercel', { align: 'right' });
doc.y += 2;

drawBullet('', 'Architected a full-stack MERN e-commerce bookstore platform featuring 350ms debounced search, dynamic price-range filtering (59–199), and a single-page 1-click checkout flow', 1);
drawBullet('', 'Engineered a serverless Express API with global Mongoose connection caching and atomic $inc stock transactions, eliminating checkout race conditions and reducing cold-start latency by 40%', 1);
drawBullet('', 'Bundled serverless functions into a 65KB standalone distribution using esbuild and deployed on Vercel Edge with SPA rewrites, automated CI/CD, and JWT role-based access control', 3);

// Project 3: Real Talks
const p3Y = doc.y;
doc.font('Helvetica-Bold').fontSize(9.5).fillColor(cBlack).text('Real Talks', leftMargin, p3Y, { continued: false });
doc.font('Helvetica').fontSize(8.5).fillColor(cLink).text('GitHub', pageWidth - rightMargin - 35, p3Y, {
  link: 'https://github.com/prathamshahi1/Real-Talks',
  underline: true,
  align: 'right'
});

doc.y = p3Y + 11;
doc.font('Helvetica-Oblique').fontSize(8.5).fillColor(cBlack).text('Full-Stack Developer', leftMargin, doc.y, { continued: true });
doc.font('Helvetica-Oblique').fontSize(8).fillColor(cGray).text('     React, Node.js, Express.js, Socket.IO, MongoDB Atlas, Tailwind CSS, Cloudinary, JWT, Vercel, Render', { align: 'right' });
doc.y += 2;

drawBullet('', 'Architected a high-concurrency real-time chat platform delivering sub-10ms bidirectional message delivery via Socket.IO room multiplexing, multi-tab presence tracking, and debounced typing indicators', 1);
drawBullet('', 'Engineered zero-overhead database maintenance using MongoDB native TTL indexes (86,400s) for automated 24-hour message pruning, paired with a dual-layer authentication system (HTTP-Only cookies + Bearer token fallback) to handle cross-origin restrictions', 1);
drawBullet('', 'Developed role-based group channel governance with automated admin succession and a Multer + Cloudinary media pipeline with interactive lightbox zoom, deployed across Vercel Edge CDN and Render', 3);

// 5. PUBLICATIONS
drawSectionHeader('Publications');
drawBullet('•', '“A Systematic Framework for Text-to-Speech System,” IEEE, 2025 – Co-authored a research paper presenting a structured framework for TTS system design and implementation', 2);

// 6. EDUCATION
drawSectionHeader('Education');

function drawEducationRow(inst, degree, dates, grade) {
  const startY = doc.y;
  doc.font('Helvetica-Bold').fontSize(9).fillColor(cBlack).text(inst, leftMargin, startY, { continued: false });
  doc.font('Helvetica').fontSize(8.5).fillColor(cDark).text(dates, leftMargin, startY, { align: 'right' });
  
  const line2Y = startY + 11;
  doc.font('Helvetica-Oblique').fontSize(8.5).fillColor(cGray).text(degree, leftMargin, line2Y, { continued: false });
  doc.font('Helvetica').fontSize(8.5).fillColor(cBlack).text(grade, leftMargin, line2Y, { align: 'right' });
  doc.y = line2Y + 13;
}

drawEducationRow('Sharda University', 'B.Tech in Computer Science', '2022 – 2026', 'CGPA: 7.63 / 10');
drawEducationRow('Asian School', 'Senior Secondary Education (Class XII)', '2021', 'Percentage: 84.2%');
drawEducationRow('Asian School', 'Secondary Education (Class X)', '2019', 'Percentage: 85%');

// 7. CERTIFICATIONS
drawSectionHeader('Certifications');
drawBullet('• Oracle Academy:', 'Java Fundamentals, Database Foundations, and AI Foundations Associate – core programming, relational databases, and AI concepts', 1.5);
drawBullet('• Apna College:', 'Data Structures & Algorithms (DSA) in Java – intensive problem-solving and competitive programming training', 1.5);
drawBullet('• MySirG:', 'Java Standard Edition (Core Java) – 3-month comprehensive Core Java training program', 1.5);
drawBullet('• MERN Stack Bootcamp:', 'hands-on full-stack development training using MongoDB, Express.js, React.js, and Node.js', 2);

// 8. EXTRACURRICULAR ACTIVITIES
drawSectionHeader('Extracurricular Activities');
drawBullet('• Table Tennis Player:', 'Represented Sharda University at the All India University Table Tennis Tournament, demonstrating discipline, competitiveness, and time management', 1.5);
drawBullet('• Kartavya NGO:', 'Active member and facilitator, coordinating community outreach and social impact activities, demonstrating leadership and teamwork', 1.5);

doc.end();

writeStream.on('finish', () => {
  console.log('PDF resume successfully built at ' + outputPath);
});
