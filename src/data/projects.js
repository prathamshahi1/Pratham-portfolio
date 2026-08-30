export const projectFilters = [
  { id: "all", label: "All Projects" },
  { id: "mern", label: "MERN Stack" },
  { id: "fullstack", label: "Full Stack" },
  { id: "react", label: "React" },
  { id: "edge", label: "Edge & Serverless" }
];

export const projects = [
  {
    id: "imageinkb",
    title: "Image In Kb",
    tagline: "Fast, In-Memory Image Compressor, Resizer & Converter to Exact Target KB Sizes",
    featured: true,
    categories: ["fullstack", "react", "edge"],
    image: "/images/projects/imageinkb-dark.png",
    images: [
      "/images/projects/imageinkb-dark.png",
      "/images/projects/imageinkb-light.png"
    ],
    imageLabels: ["Dark UI Mode", "Light UI Mode"],
    accentColor: "from-cyan-500 to-blue-600",
    shortDescription: "A privacy-first image processing platform engineered with Libvips/Sharp and Node.js in-memory buffers to compress images to exact target KB limits (10KB, 20KB, 50KB, 100KB, 200KB) with zero disk retention.",
    technologies: ["React", "Node.js", "Express.js", "Sharp (Libvips)", "MongoDB", "Cloudflare Workers", "Tailwind CSS"],
    highlights: [
      "Exact target file size presets (10KB, 20KB, 50KB, 100KB, 200KB) & custom KB slider input",
      "Specialized Passport Photo & Signature compressors tuned for UPSC, SSC, NEET & Visa portals",
      "Privacy-first zero-storage architecture with sub-100ms in-memory buffer transformations",
      "Global deployment on Cloudflare Workers edge with custom SPA routing and automated CI/CD"
    ],
    liveUrl: "https://imageinkb.com/",
    githubUrl: "https://github.com/prathamshahi1/Image-In-Kb",
    
    // Deep Dive Modal Details
    overview: "Image In Kb is a high-speed web utility built to compress, resize, and convert images to exact kilobyte boundaries required by competitive examination, job application, and visa portals.",
    problemStatement: "Most image tools save user files to disk, creating privacy and security risks. Additionally, traditional quality sliders require frustrating manual trial-and-error to meet strict government portal size caps.",
    solution: "Engineered an in-memory streaming pipeline powered by Libvips and Sharp. Designed an iterative binary-search quality tuning algorithm that converges on the exact target KB size within milliseconds without writing files to disk.",
    architecture: "React Single Page Application deployed on Cloudflare Workers edge, routing requests to a stateless Node.js stream-processing microservice running in-memory Sharp buffer transformations.",
    databaseSchema: "Zero persistent file storage; transient analytics logging.",
    authentication: "Stateless client requests with CORS origin validation and rate limiting.",
    apiEndpoints: [
      "POST /api/compress (in-memory buffer stream with binary search target KB)",
      "POST /api/resize (aspect-ratio preserved dimensional scaling)",
      "POST /api/convert (instant WebP, JPEG, PNG format transcoding)",
      "POST /api/passport (strict 20KB-50KB portal presets)",
      "POST /api/signature (strict 10KB-20KB portal presets)"
    ],
    challenges: [
      "Converging on exact target file sizes (e.g. 50KB ± 1KB) with minimal compression iterations.",
      "Managing in-memory buffers under high-concurrency 25MB multi-file uploads without heap exhaustion.",
      "Optimizing SEO and Core Web Vitals for global discoverability on Cloudflare Workers edge."
    ],
    learnings: [
      "Mastered low-level Node.js Buffer manipulation and binary search heuristics in Libvips.",
      "Gained deep expertise in edge serverless routing and zero-storage privacy architectures.",
      "Delivered a production platform serving real users requiring exact portal upload compliance."
    ]
  },
  {
    id: "bookcart",
    title: "BookCart",
    tagline: "Full-Stack MERN E-Commerce Bookstore Platform",
    featured: true,
    categories: ["mern", "fullstack", "react"],
    image: "/images/projects/bookcart-home.png",
    images: [
      "/images/projects/bookcart-home.png",
      "/images/projects/bookcart-browse.png",
      "/images/projects/bookcart-cart.png"
    ],
    imageLabels: ["Storefront & Hero", "Browse & Filter Catalog", "1-Click Checkout Cart"],
    accentColor: "from-blue-500 to-indigo-600",
    shortDescription: "A scalable MERN bookstore featuring 350ms debounced search, dynamic price-range filtering (59–199), single-page 1-click checkout, and atomic stock transactions.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB Atlas", "Redux Toolkit", "Tailwind CSS", "Vite", "esbuild", "Vercel"],
    highlights: [
      "350ms debounced product search & dynamic price-range filtering (59–199)",
      "Single-page 1-click checkout flow with atomic $inc stock transactions",
      "Serverless Express API with global Mongoose connection caching reducing cold-start latency by 40%",
      "65KB standalone serverless function bundle built with esbuild & deployed on Vercel Edge"
    ],
    liveUrl: "https://book-cart-omega.vercel.app",
    githubUrl: "https://github.com/prathamshahi1/BookCart",
    
    // Deep Dive Modal Details
    overview: "BookCart is an e-commerce platform designed for bibliophiles, featuring instant catalog navigation, seamless inventory updates, and friction-free purchasing.",
    problemStatement: "E-commerce stores frequently face checkout race conditions during simultaneous orders, slow cold starts on serverless hosting, and heavy client-side bundles.",
    solution: "Engineered atomic MongoDB $inc stock transactions to eliminate overselling race conditions. Optimized backend serverless routines with esbuild into a lightweight 65KB distribution with connection caching.",
    architecture: "Vite + React frontend with Redux Toolkit state, communicating with serverless Express API handlers hosted on Vercel Edge and connected to MongoDB Atlas.",
    databaseSchema: "Users (roles, addresses), Books (ISBN, title, author, price, inventory count), Orders (items, atomic transaction state, payment reference).",
    authentication: "JWT role-based access control protecting admin inventory routes and user order history.",
    apiEndpoints: [
      "POST /api/auth/login & /register",
      "GET /api/books (debounced query, price range filter)",
      "POST /api/orders/checkout (atomic $inc inventory decrement)",
      "GET /api/admin/inventory (stock level metrics)"
    ],
    challenges: [
      "Eliminating checkout race conditions when multiple users buy the last available copy.",
      "Minimizing serverless cold-start latency on Vercel Edge functions.",
      "Designing responsive product grids with instant filtered state sync."
    ],
    learnings: [
      "Implemented transactional safety in MongoDB with atomic operators.",
      "Optimized production bundle size down to 65KB with esbuild bundling.",
      "Mastered Redux Toolkit slice patterns for reliable cart state management."
    ]
  },
  {
    id: "realtalks",
    title: "Real Talks",
    tagline: "High-Concurrency Real-Time Chat & Media Hub",
    featured: true,
    categories: ["mern", "fullstack", "react"],
    image: "/images/projects/realtalks-chat.png",
    images: [
      "/images/projects/realtalks-chat.png",
      "/images/projects/realtalks-auth.png"
    ],
    imageLabels: ["Live Real-Time Chat Hub", "Secure Auth Portal"],
    accentColor: "from-emerald-500 to-teal-600",
    shortDescription: "A real-time chat platform delivering sub-10ms bidirectional message delivery via Socket.IO room multiplexing, automated 24-hour TTL message pruning, and dual-layer auth.",
    technologies: ["React", "Node.js", "Express.js", "Socket.IO", "MongoDB Atlas", "Tailwind CSS", "Cloudinary", "JWT", "Vercel", "Render"],
    highlights: [
      "Sub-10ms bidirectional messaging via Socket.IO room multiplexing & typing indicators",
      "Zero-overhead MongoDB native TTL indexes (86,400s) for automated 24h message pruning",
      "Dual-layer auth system (HTTP-Only cookies + Bearer token fallback) for cross-origin reliability",
      "Multer + Cloudinary media pipeline with interactive lightbox zoom & group governance"
    ],
    liveUrl: "https://real-talks-eight.vercel.app/login",
    githubUrl: "https://github.com/prathamshahi1/Real-Talks",

    // Deep Dive Modal Details
    overview: "Real Talks provides high-speed, ephemeral communication channels with multimedia attachments, live online presence tracking, and role-based group administration.",
    problemStatement: "Maintaining real-time socket connections across restrictive cross-origin deployments often causes cookie-dropping issues, and long-term chat storage bloats database instances.",
    solution: "Engineered dual-layer authentication supporting both HTTP-Only cookies and Bearer tokens. Integrated MongoDB TTL indexes to automatically prune messages after 24 hours without background cron overhead.",
    architecture: "React SPA deployed on Vercel CDN paired with a dedicated Node.js/Socket.IO server on Render and Cloudinary CDN for media assets.",
    databaseSchema: "Users (avatar, presence, lastSeen), Channels (members, admins, succession), Messages (sender, channelId, mediaUrl, TTL expireAfterSeconds: 86400).",
    authentication: "Dual-layer JWT authentication verified on Socket handshake and Express REST endpoints.",
    apiEndpoints: [
      "POST /api/auth/token & /refresh",
      "GET /api/channels/:id/messages",
      "POST /api/media/upload (Multer + Cloudinary)",
      "Socket Events: join_room, send_message, typing_status, user_presence"
    ],
    challenges: [
      "Handling cross-origin cookie restrictions between Vercel frontend and Render backend.",
      "Implementing graceful admin succession when a group creator leaves the channel.",
      "Optimizing WebSocket reconnection recovery after mobile sleep cycles."
    ],
    learnings: [
      "Deep understanding of WebSocket multiplexing and TTL database automation.",
      "Built resilient fallback mechanisms for cross-origin cookie and token authentication.",
      "Created fluid chat UI physics with auto-scrolling and unread badge counters."
    ]
  }
];
