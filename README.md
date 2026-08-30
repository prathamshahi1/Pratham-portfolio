# Pratham Kumar — Full-Stack & MERN Developer Portfolio

A bespoke, production-quality, 100% frontend personal portfolio website engineered with **React**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**.

---

## 🚀 Features

- **Obsidian Dark & Crisp Light Mode**: High-contrast theme system with `localStorage` persistence and system preference default.
- **Spotlight Hover Interactions**: Real-time cursor-following radial spotlight effects and 3D micro-depth across cards.
- **Systematic Media & Lightbox Viewers**:
  - **Certifications & Publications**: Interactive full-screen preview lightbox with credential verification links.
  - **Sports & Extracurriculars**: Visual showcase with photo zoom modal and position tags.
  - **Project Case Studies**: Multi-tab deep dive into system architecture, API routes, database schemas, and engineering challenges.
- **Dynamic Category Filtering**: Instant client-side filtering for technical skills and project stacks (MERN, React, Full Stack, JavaScript).
- **Recruiter Utilities**:
  - 1-click clipboard copy for email/phone with toast alerts.
  - Dynamic client-side mail composer (`mailto:`).
  - Resume download trigger with particle confetti.
  - Direct live coding metrics (LeetCode, GitHub, GeeksforGeeks).

---

## 📁 Architecture & Data Organization

All portfolio content is decoupled from components and stored in modular JavaScript files inside `src/data/`:

```text
src/data/
├── personal.js        # Contact details, bio, roles, stats & coding profiles
├── skills.js          # Categorized technical skills & proficiency badges
├── projects.js        # Featured & all projects with deep-dive case studies
├── education.js       # Academic qualifications, CGPA & coursework
├── publications.js    # Research publications with DOI & abstract
├── certifications.js  # Industry credentials & verification links
└── achievements.js    # Sports championships & hackathon honors
```

---

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
```bash
# Clone or navigate into the workspace
cd "Pratham Portfolio"

# Install dependencies
npm install

# Start local development server
npm run dev
```

The site will be available at `http://localhost:5173/`.

### Production Build
```bash
npm run build
```
Generates an optimized, production-ready static bundle in the `dist/` directory.

---

## 📄 License
© 2026 Pratham Kumar. All rights reserved.
