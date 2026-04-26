export const portfolioData = {
  name: "Athar",
  role: "Senior Full Stack Engineer",
  location: "Remote / Global",
  bio: "Engineering high-performance web architectures with the MERN stack and Next.js. With 4 years of professional experience, I specialize in building scalable, type-safe applications that bridge the gap between complex backend logic and fluid user experiences.",
  email: "athar@engineer.com",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  skills: [
    { category: "Frontend Architecture", items: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion"] },
    { category: "Backend & Cloud", items: ["Node.js", "Express", "MongoDB", "Redis", "REST APIs", "Vercel"] },
    { category: "Engineering Standards", items: ["System Design", "Performance Optimization", "Responsive Design", "Clean Code", "Git"] },
  ],
  stats: [
    { label: "Projects Delivered", value: "12", suffix: "+" },
    { label: "Performance Gain", value: "40", suffix: "%" },
    { label: "Uptime Maintained", value: "99.9", suffix: "%" },
    { label: "Freelance Clients", value: "5", suffix: "+" },
  ],
  testimonials: [
    {
      name: "Sarah Chen",
      role: "Founder, Bloom Health",
      content: "Athar transformed our vision into a high-performance reality. His deep understanding of Next.js and user experience was pivotal in our successful launch.",
      avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    {
      name: "James Wilson",
      role: "CEO, FinTrack",
      content: "Working with Athar was a game-changer. He doesn't just code; he thinks about the product strategy. The real-time dashboard he built is now our core selling point.",
      avatar: "https://i.pravatar.cc/150?u=james"
    },
    {
      name: "Elena Rodriguez",
      role: "Product Lead, EcoSync",
      content: "The most reliable freelancer I've worked with. His ability to solve complex state management issues in our MERN app saved us weeks of development time.",
      avatar: "https://i.pravatar.cc/150?u=elena"
    }
  ],
  experience: [
    {
      company: "Freelance / Independent",
      role: "Senior Full Stack Developer",
      period: "2023 - Present",
      description: "Partnering with global startups to build MVP and scale existing platforms. Specializing in rapid development without compromising on code quality or performance.",
      highlights: [
        "Built a custom e-commerce engine for a boutique brand, increasing conversion by 25%",
        "Developed a real-time collaboration tool for a remote-first startup using Socket.io",
        "Consulted on performance optimization for a high-traffic blog, improving Lighthouse scores from 40 to 95+"
      ],
    },
    {
      company: "Enterprise Solutions Corp",
      role: "Senior Full Stack Engineer",
      period: "2022 - 2023",
      description: "Leading the architectural evolution of a global enterprise dashboard. Focused on migrating legacy systems to a modern Next.js architecture while maintaining high availability.",
      highlights: [
        "Architected a real-time analytics engine using Node.js and WebSocket for 10k+ concurrent users",
        "Implemented a comprehensive design system using Tailwind and Radix UI, reducing UI dev time by 40%",
        "Optimized MongoDB aggregation pipelines, reducing query response times by 45% for multi-million record datasets"
      ],
    },
    {
      company: "GrowthStack AI",
      role: "Full Stack Developer",
      period: "2020 - 2022",
      description: "Founding engineer for a high-growth SaaS platform. Responsible for the end-to-end development of the core product and internal tooling.",
      highlights: [
        "Developed a multi-tenant authentication system with JWT and OAuth, handling 50k+ users",
        "Integrated Stripe for complex subscription billing cycles with 99.9% accuracy",
        "Built a custom CMS with drag-and-drop capabilities using React-DnD, improving content team efficiency by 60%"
      ],
    },
  ],
  projects: [
    {
      slug: "nexus-enterprise",
      title: "Nexus Enterprise SaaS",
      type: "Enterprise",
      description: "A high-performance, multi-tenant SaaS architecture designed for global scale. Built with Next.js 15, TypeScript, and MongoDB, featuring a custom-built RBAC system and edge-optimized data fetching.",
      tech: ["Next.js 15", "TypeScript", "MongoDB", "Redis", "Zod"],
      link: "/projects/nexus-enterprise",
      image: "https://picsum.photos/1200/800?random=1",
      caseStudy: {
        problem: "Existing SaaS architectures struggled with multi-tenant data isolation and performance bottlenecks during peak global traffic.",
        solution: "I architected a schema-level isolation strategy in MongoDB and implemented a multi-layer caching system using Redis and Next.js Data Cache. I also developed a custom middleware for dynamic tenant routing at the edge.",
        impact: "Achieved 99.99% uptime during high-load periods and reduced tenant onboarding time by 85% through automated infrastructure provisioning.",
        architecture: {
          title: "Multi-Tenant Data Strategy",
          description: "Instead of a shared database with tenant IDs on every document, I implemented a 'Database-per-Tenant' strategy for high-value clients and 'Collection-per-Tenant' for standard tiers. This ensured zero data leakage and allowed for independent scaling of tenant resources.",
          image: "https://picsum.photos/800/600?random=10"
        }
      }
    },
    {
      slug: "stream-analytics",
      title: "Real-time Analytics Engine",
      type: "Enterprise",
      description: "A distributed analytics platform processing millions of events per second. Leverages Node.js streams and a custom React visualization engine to provide sub-second insights into user behavior.",
      tech: ["Node.js", "Express", "Redis", "D3.js", "WebSockets"],
      link: "/projects/stream-analytics",
      image: "https://picsum.photos/1200/800?random=2",
      caseStudy: {
        problem: "The client needed to visualize real-time user interactions across millions of sessions without significant latency or browser performance degradation.",
        solution: "I built a distributed event ingestion pipeline using Node.js streams and Redis Pub/Sub. On the frontend, I developed a custom WebGL-accelerated charting library to handle high-frequency data updates at 60fps.",
        impact: "Reduced data latency from 5 seconds to under 200ms and enabled the tracking of 10x more concurrent events without increasing infrastructure costs.",
        architecture: {
          title: "Event Ingestion Pipeline",
          description: "To handle massive bursts of traffic, I implemented a buffer-based ingestion system. Events are first pushed to a Redis queue, then processed in batches by Node.js worker threads before being persisted to MongoDB. This decoupled the ingestion from the storage, preventing database bottlenecks.",
          image: "https://picsum.photos/800/600?random=11"
        }
      }
    },
    {
      slug: "agile-flow",
      title: "AgileFlow Collaboration Suite",
      type: "Enterprise",
      description: "An enterprise project management tool focused on real-time synchronization and complex state management. Built with the MERN stack and optimized for low-latency collaborative editing.",
      tech: ["React", "Redux Toolkit", "Socket.io", "MongoDB", "Express"],
      link: "/projects/agile-flow",
      image: "https://picsum.photos/1200/800?random=3",
      caseStudy: {
        problem: "Collaborative editing often led to race conditions and inconsistent state across different user sessions.",
        solution: "I implemented a robust Conflict-free Replicated Data Type (CRDT) inspired synchronization logic using Socket.io and Redux Toolkit. I also optimized the MongoDB write-ahead log to ensure data integrity during high-concurrency bursts.",
        impact: "Eliminated 95% of synchronization conflicts and improved user perceived performance by 70% through optimistic UI updates.",
        architecture: {
          title: "Real-time Sync Strategy",
          description: "I utilized a 'Last-Write-Wins' strategy combined with optimistic UI updates. Every client action is immediately reflected locally, while the server validates and broadcasts the change. If a conflict occurs, the server sends a 'reconciliation' event that resets the client state to the source of truth.",
          image: "https://picsum.photos/800/600?random=12"
        }
      }
    },
    {
      slug: "bloom-health-mvp",
      title: "Bloom Health MVP",
      type: "Freelance",
      description: "A telehealth platform MVP built for an early-stage startup. Features secure video consultations, patient record management, and a custom scheduling system.",
      tech: ["Next.js", "Tailwind CSS", "WebRTC", "PostgreSQL", "Prisma"],
      link: "/projects/bloom-health-mvp",
      image: "https://picsum.photos/1200/800?random=4",
      caseStudy: {
        problem: "The founders needed a functional, secure MVP within 8 weeks to secure their seed funding round, requiring complex video integration and HIPAA-compliant data structures.",
        solution: "I leveraged Next.js App Router for rapid frontend development and integrated a managed WebRTC service to handle video. I designed a strict PostgreSQL schema using Prisma to ensure data integrity and security.",
        impact: "Delivered the MVP 1 week ahead of schedule, enabling the founders to successfully close a $1.2M seed round.",
        architecture: {
          title: "Secure Telehealth Architecture",
          description: "The architecture prioritizes data security and low-latency video. Patient data is encrypted at rest and in transit. The video signaling server is decoupled from the main API to ensure high availability during consultations.",
          image: "https://picsum.photos/800/600?random=13"
        }
      }
    },
    {
      slug: "lumina-ecommerce",
      title: "Lumina Boutique E-commerce",
      type: "Freelance",
      description: "A headless e-commerce experience for a luxury brand. Focuses on high-performance image delivery, fluid animations, and a seamless checkout flow.",
      tech: ["React", "Shopify Storefront API", "Framer Motion", "Tailwind CSS"],
      link: "/projects/lumina-ecommerce",
      image: "https://picsum.photos/1200/800?random=5",
      caseStudy: {
        problem: "The brand's existing Shopify theme was slow and didn't reflect their luxury positioning, leading to high bounce rates.",
        solution: "I decoupled the frontend by building a custom React application that consumes the Shopify Storefront API. I implemented aggressive image optimization and smooth page transitions using Framer Motion.",
        impact: "Increased mobile conversion rates by 35% and improved average session duration by 2 minutes.",
        architecture: {
          title: "Headless Commerce Setup",
          description: "The frontend is statically generated where possible, with dynamic client-side fetching for inventory and cart state. This hybrid approach ensures sub-second initial page loads while maintaining real-time accuracy for purchases.",
          image: "https://picsum.photos/800/600?random=14"
        }
      }
    }
  ],
};
