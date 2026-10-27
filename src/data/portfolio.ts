/**
 * =========================================================================
 * PORTFOLIO CONFIGURATION - DYNAMIC DATA SOURCE
 * =========================================================================
 * Edit any section below to instantly update your portfolio website!
 * All fields are strongly typed.
 */

export interface PersonalInfo {
  name: string;
  pronouns?: string;
  role: string;
  roles: string[]; // For dynamic typewriter/cycling title
  tagline: string;
  bio: string;
  shortBio: string;
  location: string;
  availableForHire: boolean;
  availabilityText: string;
  email: string;
  phone?: string;
  avatarUrl: string;
  resumeUrl: string;
  socials: {
    github: string;
    linkedin: string;
    twitter?: string;
    telegram?: string;
    facebook?: string;
  };
}

export interface Metric {
  value: string;
  label: string;
  description: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: {
    name: string;
    level?: 'Expert' | 'Advanced' | 'Proficient';
    featured?: boolean;
  }[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack' | 'Backend & Cloud' | 'Frontend' | 'Architecture & Testing';
  featured: boolean;
  impactMetric: string; // The "headhunter hook" (e.g., "+45% throughput", "50k+ active users")
  description: string;
  highlights: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string; // 'Full-time' | 'Contract' | 'Remote'
  domain: string;
  achievements: string[];
  technologies: string[];
  current?: boolean;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  honors?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  relationship: string;
  quote: string;
  avatar?: string;
}

export interface PortfolioData {
  siteMetadata: {
    title: string;
    description: string;
    ogImage: string;
    siteUrl: string;
  };
  personal: PersonalInfo;
  metrics: Metric[];
  skillCategories: SkillCategory[];
  projects: Project[];
  experiences: Experience[];
  education: Education[];
  certifications: Certification[];
  testimonials: Testimonial[];
}

export const portfolioData: PortfolioData = {
  // =========================================================================
  // 1. SITE & SEO METADATA
  // Controls browser tab title, search engine preview, and social share cards.
  // =========================================================================
  siteMetadata: {
    // Browser tab title
    title: "Liam Nguyen | Senior Full-Stack Software Engineer",
    // Meta description for Google / LinkedIn / Twitter preview cards
    description: "Portfolio of Liam Nguyen - Senior Full-Stack Software Engineer specialized in resilient backend systems, modern web architecture, and high-impact automated engineering.",
    // Social preview image (stored in public/images/og-preview.png)
    ogImage: "/images/og-preview.png",
    // Canonical production URL
    siteUrl: "https://tuanntq.is-a.dev",
  },

  // =========================================================================
  // 2. PERSONAL IDENTITY & CONTACT
  // Controls the Hero section, avatar, navbar, and contact buttons.
  // =========================================================================
  personal: {
    name: "Liam Nguyen",
    pronouns: "he/him",
    // Primary role displayed across headers and footers
    role: "Senior Full-Stack Software Engineer",
    // Dynamic roles cycled in the animated Hero typewriter effect
    roles: [
      "Senior Full-Stack Software Engineer",
      "Cloud & Distributed Systems Specialist",
      "Performance & Scalability Enthusiast",
      "Automation & Quality Engineering Champion"
    ],
    // High-level value proposition tagline
    tagline: "Building resilient distributed architectures, hyper-responsive web applications, and mission-critical enterprise systems.",
    // Elevator pitch summary
    shortBio: "5+ years of engineering experience delivering high-throughput backend services, reactive user interfaces, and automated delivery pipelines with zero tolerance for downtime.",
    // Comprehensive bio displayed prominently in the Hero section
    bio: "I am a results-oriented software engineer who thrives at the intersection of robust backend scalability, sleek frontend ergonomics, and mission-critical software reliability. Having engineered financial services, banking portals, and modern web applications, I focus on measurable business impact: low-latency APIs, resilient microservices, and frictionless user experiences.",
    location: "Hanoi, Vietnam (Available for Remote Worldwide)",
    availableForHire: true,
    // Availability pill text next to your avatar
    availabilityText: "Available for Senior / Lead Full-Stack Roles",
    // Direct contact email (used by 1-click copy & mailto links)
    email: "tuanntq99@gmail.com",
    // Profile picture (place your file in public/images/avatar.jpg or replace this path)
    avatarUrl: "/images/avatar.jpg",
    // Printable resume route (viewable at /resume.html)
    resumeUrl: "/resume.html",
    // Social links (leave string empty or remove optional fields if not used)
    socials: {
      github: "https://github.com/tuanntq99",
      linkedin: "https://linkedin.com/in/tuanntq99",
      twitter: "https://twitter.com/tuanntq99",
      telegram: "https://t.me/tuanntq99",
    },
  },

  // =========================================================================
  // 3. EXECUTIVE IMPACT METRICS
  // The 4 headline achievement cards rendered directly beneath the Hero section.
  // Tip: Use quantified stats (e.g. uptime %, latency %, transaction count, scale).
  // =========================================================================
  metrics: [
    {
      value: "5+ Years",
      label: "Engineering Experience",
      description: "Full-lifecycle architecture from design to 24/7 cloud operations",
    },
    {
      value: "99.98%",
      label: "System Reliability",
      description: "Maintained across core banking & high-volume financial services",
    },
    {
      value: "-45% Latency",
      label: "Performance Optimization",
      description: "Achieved via query restructuring, Redis caching & async pipelines",
    },
    {
      value: "1M+",
      label: "Transactions Handled",
      description: "Processed reliably with ACID compliance and zero data loss",
    },
  ],

  // =========================================================================
  // 4. TECHNICAL SKILLS MATRIX
  // Organized into categorized cards.
  // - icon options: "layout" (frontend), "server" (backend), "cloud" (DevOps), "shield-check" (QA/testing)
  // - level options: "Expert" | "Advanced" | "Proficient"
  // - featured: true highlights the badge with a distinctive border
  // =========================================================================
  skillCategories: [
    {
      name: "Frontend & Web",
      icon: "layout",
      skills: [
        { name: "TypeScript", level: "Expert", featured: true },
        { name: "React / Next.js", level: "Expert", featured: true },
        { name: "Astro", level: "Advanced", featured: true },
        { name: "Tailwind CSS", level: "Expert", featured: true },
        { name: "Vue.js", level: "Advanced" },
        { name: "State Management (Redux/Zustand)", level: "Advanced" },
        { name: "Web Vitals & SEO Optimization", level: "Advanced" },
      ],
    },
    {
      name: "Backend & Systems",
      icon: "server",
      skills: [
        { name: "Java / Spring Boot", level: "Expert", featured: true },
        { name: "Node.js / Express / NestJS", level: "Expert", featured: true },
        { name: "RESTful APIs & GraphQL", level: "Expert", featured: true },
        { name: "Microservices & Distributed Systems", level: "Advanced", featured: true },
        { name: "PostgreSQL & MySQL", level: "Expert", featured: true },
        { name: "Redis & In-Memory Caching", level: "Advanced", featured: true },
        { name: "Kafka & Event-Driven Architecture", level: "Proficient" },
      ],
    },
    {
      name: "Cloud, DevOps & CI/CD",
      icon: "cloud",
      skills: [
        { name: "Docker & Containerization", level: "Expert", featured: true },
        { name: "Kubernetes (K8s)", level: "Advanced" },
        { name: "AWS (S3, EC2, RDS, Lambda)", level: "Advanced", featured: true },
        { name: "GitHub Actions & GitLab CI", level: "Expert", featured: true },
        { name: "Linux Server Administration", level: "Advanced" },
        { name: "Nginx & Reverse Proxies", level: "Advanced" },
      ],
    },
    {
      name: "Quality Engineering & Testing",
      icon: "shield-check",
      skills: [
        { name: "Selenium & Playwright Automation", level: "Expert", featured: true },
        { name: "Cucumber BDD & Serenity BDD", level: "Expert", featured: true },
        { name: "Integration & Regression Pipelines", level: "Expert", featured: true },
        { name: "JUnit / Jest / Vitest", level: "Advanced" },
        { name: "Performance & Load Testing", level: "Proficient" },
      ],
    },
  ],

  // =========================================================================
  // 5. FEATURED PROJECTS
  // Displayed in the interactive filterable projects grid.
  // - category options: 'Full-Stack' | 'Backend & Cloud' | 'Frontend' | 'Architecture & Testing'
  // - impactMetric: High-impact hook displayed on top of the project card
  // - highlights: Bullet points (STAR format recommended: Situation, Task, Action, Result)
  // - image: URL or local path (e.g., /images/projects/project1.png)
  // =========================================================================
  projects: [
    {
      id: "banking-lending-platform",
      title: "Enterprise Digital Lending & Credit Engine",
      subtitle: "High-throughput financial portal handling automated loan appraisal and disbursement workflows.",
      category: "Full-Stack",
      featured: true,
      impactMetric: "Processed $20M+ Loan Volume with 99.98% uptime",
      description: "Architected end-to-end digital lending workflows integrating core banking gateways, real-time identity verification, and multi-tenant approval hierarchies.",
      highlights: [
        "Cut customer onboarding time from 3 business days down to under 15 minutes with automated decision pipelines",
        "Designed idempotent API endpoints preventing duplicate charges during concurrent network interruptions",
        "Implemented end-to-end BDD automation suite covering 140+ mission-critical banking test scenarios with zero regression escape",
      ],
      technologies: ["Java", "Spring Boot", "React", "TypeScript", "PostgreSQL", "Docker", "Cucumber BDD"],
      liveUrl: "https://github.com/tuanntq99/portfolio",
      githubUrl: "https://github.com/tuanntq99",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "microservices-event-hub",
      title: "Distributed Event Gateway & Message Broker",
      subtitle: "High-concurrency event-driven notification & data synchronization platform.",
      category: "Backend & Cloud",
      featured: true,
      impactMetric: "15,000 req/sec with <45ms P99 latency",
      description: "Engineered a distributed gateway that fan-outs events to third-party webhooks, mobile push, and analytical streams with guaranteed at-least-once delivery.",
      highlights: [
        "Utilized Redis sliding-window rate limiters to protect upstream microservices from traffic spikes",
        "Containerized deployment on Kubernetes with horizontal pod autoscaling under dynamic load",
        "Reduced cloud infrastructure costs by 32% by optimizing memory footprint and connection pools",
      ],
      technologies: ["Node.js", "TypeScript", "Redis", "Kafka", "Docker", "AWS", "Nginx"],
      liveUrl: "https://github.com/tuanntq99/portfolio",
      githubUrl: "https://github.com/tuanntq99",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "cloud-dev-analytics-dashboard",
      title: "Cloud Performance & Observability Suite",
      subtitle: "Real-time interactive dashboard visualizing system health, error traces, and deployment metrics.",
      category: "Frontend",
      featured: true,
      impactMetric: "Decreased Mean-Time-To-Detect (MTTD) by 60%",
      description: "Built a responsive, zero-lag metrics dashboard featuring real-time WebSocket feeds, interactive charts, and role-based incident triage tooling.",
      highlights: [
        "Rendered 100,000+ continuous data points at 60fps using Canvas-backed visualization charts",
        "Integrated dynamic theme management, keyboard navigation shortcuts, and multi-language support",
        "Achieved a 99/100 Google Lighthouse score with aggressive code splitting and asset optimizations",
      ],
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "WebSockets", "Chart.js"],
      liveUrl: "https://github.com/tuanntq99/portfolio",
      githubUrl: "https://github.com/tuanntq99",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "enterprise-automation-framework",
      title: "Next-Gen CI/CD Test Automation Engine",
      subtitle: "Scalable BDD test framework with automated HTML story reports and live run monitors.",
      category: "Architecture & Testing",
      featured: true,
      impactMetric: "Cut regression execution cycle from 32h to 2h",
      description: "Developed an enterprise-grade automation framework orchestrating parallel browser test runs, self-healing element locators, and automated test failure diagnostics.",
      highlights: [
        "Integrated with Jenkins & GitHub Actions for automated pull request quality gates",
        "Generated rich Serenity HTML story reports with video captures and network telemetry",
        "Mentored a team of 8 QA and software engineers in BDD practices and clean code standards",
      ],
      technologies: ["Java", "Selenium", "Cucumber", "Serenity BDD", "Docker", "GitHub Actions"],
      liveUrl: "https://github.com/tuanntq99/portfolio",
      githubUrl: "https://github.com/tuanntq99",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1200&q=80",
    },
  ],

  // =========================================================================
  // 6. WORK EXPERIENCE TIMELINE
  // Reverse chronological career history.
  // - current: true displays the animated "Present" badge
  // - domain: Industry or business domain tag (e.g., "Fintech", "SaaS")
  // - achievements: STAR-formatted achievement bullets with quantified metrics
  // =========================================================================
  experiences: [
    {
      company: "Leading Financial Technology & Banking Group",
      role: "Senior Full-Stack & Systems Engineer",
      period: "2023 - Present",
      location: "Hanoi, Vietnam",
      type: "Full-time",
      domain: "Fintech & Core Banking Automation",
      current: true,
      achievements: [
        "Led architecture and implementation of core lending microservices handling hundreds of daily loan requests with 99.98% uptime.",
        "Refactored relational database queries and introduced Redis caching layers, reducing API latency by 45% during peak bank operating hours.",
        "Spearheaded automated CI/CD pipelines and BDD verification suites, decreasing production release cycles from bi-weekly to continuous daily deployments.",
        "Partnered with cross-functional product teams, security auditors, and banking compliance officers to maintain strict regulatory compliance.",
      ],
      technologies: ["Java", "Spring Boot", "React", "TypeScript", "PostgreSQL", "Docker", "Cucumber", "AWS"],
    },
    {
      company: "Digital Solutions & Cloud Innovation Co.",
      role: "Full-Stack Software Engineer",
      period: "2021 - 2023",
      location: "Hanoi, Vietnam",
      type: "Full-time",
      domain: "Enterprise SaaS & Web Platforms",
      achievements: [
        "Engineered scalable customer-facing web applications using React, Next.js, and Node.js microservices serving 200,000+ monthly active users.",
        "Built modular UI design systems with Tailwind CSS, reducing front-end development cycle for new client portals by 40%.",
        "Implemented real-time data sync using WebSockets and Redis pub/sub for collaborative workspace tools.",
        "Automated deployment workflows via Docker containers and GitHub Actions, cutting release failure rate to under 1%.",
      ],
      technologies: ["Node.js", "Express", "React", "Next.js", "Tailwind CSS", "MongoDB", "Redis", "Docker"],
    },
    {
      company: "Tech Pioneer Labs",
      role: "Software Engineer (Web & Automation)",
      period: "2019 - 2021",
      location: "Hanoi, Vietnam",
      type: "Full-time",
      domain: "E-Commerce & High-Growth Startups",
      achievements: [
        "Developed responsive frontend modules and RESTful backends for high-traffic e-commerce storefronts.",
        "Integrated multi-channel payment gateways, shipping APIs, and inventory sync systems with robust exception recovery.",
        "Instituted comprehensive automated unit and integration tests, raising overall codebase test coverage from 42% to 88%.",
      ],
      technologies: ["JavaScript", "TypeScript", "React", "Node.js", "MySQL", "Selenium", "Jest"],
    },
  ],

  // =========================================================================
  // 7. ACADEMIC EDUCATION
  // Academic degrees and university credentials.
  // =========================================================================
  education: [
    {
      degree: "Bachelor of Science in Software Engineering / Computer Science",
      institution: "Top Technology University",
      period: "2015 - 2019",
      location: "Hanoi, Vietnam",
      honors: "Graduated with High Honors (Top 5% of cohort)",
    },
  ],

  // =========================================================================
  // 8. VERIFIED INDUSTRY CERTIFICATIONS
  // Cloud, architecture, and methodology credentials.
  // - credentialUrl: Link to verification page (AWS badge, Credly, CNCF)
  // =========================================================================
  certifications: [
    {
      name: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialUrl: "https://aws.amazon.com/verification",
    },
    {
      name: "CKAD: Certified Kubernetes Application Developer",
      issuer: "Cloud Native Computing Foundation (CNCF)",
      date: "2024",
      credentialUrl: "https://www.cncf.io/certification/ckad/",
    },
    {
      name: "Professional Scrum Master (PSM I)",
      issuer: "Scrum.org",
      date: "2022",
      credentialUrl: "https://www.scrum.org",
    },
  ],

  // =========================================================================
  // 9. LEADERSHIP & PEER TESTIMONIALS
  // Endorsements from engineering managers, VPs, and product leaders.
  // =========================================================================
  testimonials: [
    {
      name: "David Chen",
      role: "VP of Engineering",
      company: "Fintech Enterprise",
      relationship: "Managed Liam directly",
      quote: "Liam is the rare engineer who pairs deep architectural rigor with exceptional execution speed. When our banking service faced critical throughput bottlenecks, he diagnosed the root cause and implemented a resilient cache-aside solution in 48 hours without any downtime. He is a force multiplier for any team.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Sarah Miller",
      role: "Lead Product Manager",
      company: "Cloud Solutions Co.",
      relationship: "Collaborated on core product launches",
      quote: "Working with Liam was a dream for product management. He deeply understands business objectives and translates complex technical constraints into intuitive, blazing-fast user interfaces. Headhunters and engineering leaders should jump at the opportunity to hire him.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    },
  ],
};
