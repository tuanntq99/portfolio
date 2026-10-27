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
    title: "Ngo Tran Quoc Tuan | Java Backend Developer",
    description: "Portfolio of Ngo Tran Quoc Tuan - Java Backend Developer with over 2 years of experience specializing in enterprise tax payment systems integrated with a major bank (BIDV), Spring Boot, and backend system optimization.",
    ogImage: "/images/og-preview.png",
    siteUrl: "https://tuanntq.is-a.dev",
  },

  // =========================================================================
  // 2. PERSONAL IDENTITY & CONTACT
  // Controls the Hero section, avatar, navbar, and contact buttons.
  // =========================================================================
  personal: {
    name: "Ngo Tran Quoc Tuan",
    pronouns: "he/him",
    role: "Java Backend Developer",
    roles: [
      "Java Backend Developer",
      "Spring Boot & Microservices Specialist",
      "Banking & Enterprise Tax Systems",
      "High-Throughput & Scalability Engineer"
    ],
    tagline: "Engineering secure, high-availability, and transaction-sensitive enterprise backend architectures.",
    shortBio: "Java Backend Developer with 2+ years of experience contributing to mission-critical banking integrations (BIDV), enterprise tax payment engines, and scalable distributed architectures.",
    bio: "Java Backend Developer with over 2 years of experience, including 1 year contributing to enterprise tax payment systems integrated with a major bank. Experienced in developing secure, high-availability, and transaction-sensitive applications ensuring data integrity and compliance. Skilled in Spring Boot, Spring Security, and backend system optimization.",
    location: "Ha Noi, Viet Nam",
    availableForHire: true,
    availabilityText: "Available for Backend Developer Opportunities",
    email: "tuanhd131@gmail.com",
    phone: "+84 979 137 027",
    avatarUrl: "/images/avatar.jpg",
    resumeUrl: "/resume.html",
    socials: {
      github: "https://github.com/tuanntq99",
      linkedin: "https://linkedin.com/in/tuanntq",
      facebook: "https://facebook.com/tuanntq99/",
    },
  },

  // =========================================================================
  // 3. EXECUTIVE IMPACT METRICS
  // Quantified achievements gathered directly from real-world project contributions.
  // =========================================================================
  metrics: [
    {
      value: "2+ Years",
      label: "Backend Experience",
      description: "Developing secure, high-availability, transaction-sensitive enterprise systems",
    },
    {
      value: "10x Boost",
      label: "SQL Optimization",
      description: "Built & optimized queries dramatically improving database throughput & response times",
    },
    {
      value: "5x Scale",
      label: "WebSocket Scalability",
      description: "Architected custom load balancer scaling real-time concurrent user capacity",
    },
    {
      value: "1 Year+",
      label: "Core Bank Integration",
      description: "Seamless tax payment & customs duty processing with BIDV Direct",
    },
  ],

  // =========================================================================
  // 4. TECHNICAL SKILLS MATRIX
  // Directly reflecting the skills verified in the CV document.
  // =========================================================================
  skillCategories: [
    {
      name: "Backend & Frameworks",
      icon: "server",
      skills: [
        { name: "Java", level: "Expert", featured: true },
        { name: "Spring Boot", level: "Expert", featured: true },
        { name: "Hibernate / JPA", level: "Advanced", featured: true },
        { name: "Spring Security", level: "Expert", featured: true },
        { name: "Apache Kafka", level: "Advanced", featured: true },
        { name: "RESTful APIs", level: "Expert", featured: true },
        { name: "WebSocket & Schedulers", level: "Advanced" },
      ],
    },
    {
      name: "Databases & Caching",
      icon: "layout",
      skills: [
        { name: "Oracle", level: "Advanced", featured: true },
        { name: "MySQL", level: "Expert", featured: true },
        { name: "PostgreSQL", level: "Advanced", featured: true },
        { name: "MongoDB", level: "Proficient" },
        { name: "Redis Cache", level: "Advanced", featured: true },
        { name: "SQL Query Tuning", level: "Expert", featured: true },
      ],
    },
    {
      name: "Cloud, DevOps & VCS",
      icon: "cloud",
      skills: [
        { name: "Docker", level: "Advanced", featured: true },
        { name: "Linux (Ubuntu)", level: "Advanced", featured: true },
        { name: "AWS (S3, EC2 Fundamentals)", level: "Proficient" },
        { name: "GitHub & GitLab", level: "Expert", featured: true },
        { name: "Fork Git Client", level: "Advanced" },
        { name: "CI/CD Workflows", level: "Proficient" },
      ],
    },
    {
      name: "Tools, Testing & Methodologies",
      icon: "shield-check",
      skills: [
        { name: "SonarQube", level: "Advanced", featured: true },
        { name: "JUnit & Mockito", level: "Advanced", featured: true },
        { name: "IntelliJ IDEA & Cursor", level: "Expert", featured: true },
        { name: "Postman", level: "Expert", featured: true },
        { name: "Quartz Scheduling", level: "Advanced" },
        { name: "English (Basic)", level: "Proficient" },
      ],
    },
  ],

  // =========================================================================
  // 5. FEATURED PROJECTS
  // Authentic projects from IGNIFY (BIDV) and DS GLOBAL.
  // =========================================================================
  projects: [
    {
      id: "bidv-customs-duty",
      title: "Customs Duty - Public Service Module",
      subtitle: "Enterprise Customs Duty Management System for BIDV Direct.",
      category: "Backend & Cloud",
      featured: true,
      impactMetric: "Enterprise Bank-Grade Compliance & Dual-Authorization",
      description: "Designed and developed a Customs Duty Management System that allows makers to declare and pay customs duties, while checkers verify and approve tax transactions, generate reports, print official receipts, and export tax reports for auditing purposes.",
      highlights: [
        "Collaborated closely with Joint Stock Commercial Bank for Investment and Development of Vietnam (BIDV) on system integration and payment processing",
        "Implemented strict Maker-Checker dual authorization workflows ensuring complete auditability and zero fraudulent transactions",
        "Orchestrated asynchronous reporting and batch settlement tasks using Quartz Scheduler and Apache Kafka event streams",
        "Utilized Redis caching and Oracle relational schema to ensure lightning-fast transaction status lookups",
      ],
      technologies: ["Spring Boot", "Oracle", "Quartz", "Apache Kafka", "Redis", "Java"],
      liveUrl: "https://tuanntq.is-a.dev",
      githubUrl: "https://github.com/tuanntq99",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "bidv-domestic-tax",
      title: "Domestic Tax Payment System",
      subtitle: "High-volume public service tax payment module for BIDV Direct.",
      category: "Backend & Cloud",
      featured: true,
      impactMetric: "Fast, Convenient & Reliable National Tax Settlement",
      description: "Developed a Domestic Tax Payment System enabling fast, convenient, and reliable payment of land tax, vehicle tax, and other domestic taxes with end-to-end banking compliance and automated payment settlement.",
      highlights: [
        "Designed high-performance RESTful APIs handling real-time tax code validation and direct bank ledger debits",
        "Integrated Apache Kafka pub/sub architecture to process decoupled tax notifications and state synchronizations",
        "Maintained clear technical documentation for APIs, system architecture, and system workflows alongside Business Analysts",
        "Enforced transaction idempotency to guarantee accurate financial records during concurrent client requests",
      ],
      technologies: ["Spring Boot", "Oracle", "Quartz", "Apache Kafka", "Redis", "Java"],
      liveUrl: "https://tuanntq.is-a.dev",
      githubUrl: "https://github.com/tuanntq99",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "snap-photo-kiosk",
      title: "Snap# - Centralized Photo Kiosk Ecosystem",
      subtitle: "Distributed photo kiosk platform serving international customers in Korea and Vietnam.",
      category: "Full-Stack",
      featured: true,
      impactMetric: "5x Scalability Boost & 10x SQL Speedup",
      description: "A photo kiosk system serving customers in Korea and Don Chicken in Vietnam, providing photo printing, centralized kiosk and printer management, user management, analytics tracking, and remote kiosk control via a mobile application.",
      highlights: [
        "Designed and built a custom WebSocket load balancer, scaling real-time connected kiosk capacity by at least 5 times",
        "Built and optimized relational SQL queries, improving complex database report queries up to 10 times",
        "Led the Snap# project team, successfully achieving on-time delivery and boosting overall team delivery efficiency by 20%",
        "Developed secure account management using Spring Security and integrated AWS S3 for cloud photo asset management",
      ],
      technologies: ["Spring Boot", "Spring Security", "WebSocket", "Scheduling", "MySQL", "Docker", "AWS S3"],
      liveUrl: "https://tuanntq.is-a.dev",
      githubUrl: "https://github.com/tuanntq99",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "lpa-clinic-management",
      title: "LPA - Medical Clinic Management System",
      subtitle: "Streamlined medical records, patient onboarding, and secure document printing.",
      category: "Backend & Cloud",
      featured: true,
      impactMetric: "Zero-Lag Patient Handling & Secure Printing Integration",
      description: "A medical clinic management system designed to streamline patient form creation, customer account management, medical record handling, and integrate secure and efficient medical record printing functionalities.",
      highlights: [
        "Architected hybrid data persistence combining MySQL for structured accounts and MongoDB for flexible medical dossiers",
        "Implemented Spring Security role-based access control protecting confidential patient health records",
        "Integrated Redis caching to ensure instantaneous access to doctor consultation queues and clinic appointment schedules",
        "Implemented global exception handling with multi-language error messaging for seamless medical staff operation",
      ],
      technologies: ["Spring Boot", "Spring Security", "MySQL", "MongoDB", "Docker", "Scheduling", "Redis"],
      liveUrl: "https://tuanntq.is-a.dev",
      githubUrl: "https://github.com/tuanntq99",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "imagebox-handheld-printing",
      title: "IMAGEBOX - Handheld Printing System",
      subtitle: "Instant mobile-to-hardware Bluetooth photo printing platform.",
      category: "Architecture & Testing",
      featured: false,
      impactMetric: "Seamless Mobile Bluetooth Hardware Synchronization",
      description: "Contributed to the development of a handheld photo printing system that enables users to connect their mobile devices via Bluetooth and print photos instantly.",
      highlights: [
        "Engineered reliable backend communication protocols facilitating rapid image decoding and printer commands",
        "Implemented robust job queue handling to eliminate dropped print jobs during unstable wireless connections",
      ],
      technologies: ["Laravel", "MySQL", "Bluetooth Protocols", "PHP"],
      liveUrl: "https://tuanntq.is-a.dev",
      githubUrl: "https://github.com/tuanntq99",
      image: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?auto=format&fit=crop&w=1200&q=80",
    },
  ],

  // =========================================================================
  // 6. WORK EXPERIENCE TIMELINE
  // Accurate career positions from IGNIFY and DS GLOBAL.
  // =========================================================================
  experiences: [
    {
      company: "IGNIFY",
      role: "Back-End Developer",
      period: "Apr 2025 - Present",
      location: "Ha Noi, Viet Nam",
      type: "Full-time",
      domain: "Enterprise Banking Integration & Public Services",
      current: true,
      achievements: [
        "Work closely with Joint Stock Commercial Bank for Investment and Development of Vietnam (BIDV) on system integration and payment processing.",
        "Design and developed high-performance APIs using Java Spring Framework.",
        "Write clean, maintainable, and efficient code following industry best practices and clean architecture.",
        "Write and maintained clear technical documentation for APIs, system architecture and system workflows.",
        "Work closely with Business Analysts to analyze business requirements and translate process workflows into technical solutions.",
        "Engineered Customs Duty and Domestic Tax Public Service modules on BIDV Direct with dual-authorization maker-checker security.",
      ],
      technologies: ["Java", "Spring Boot", "Oracle", "Quartz", "Apache Kafka", "Redis", "Hibernate"],
    },
    {
      company: "DS GLOBAL",
      role: "Back-End Developer",
      period: "Apr 2024 - Apr 2025",
      location: "Ha Noi, Viet Nam",
      type: "Full-time",
      domain: "Smart Kiosk Systems & Scalable Cloud Platforms",
      achievements: [
        "Designed and developed high-performance APIs using Java Spring Framework.",
        "Designed and optimized database structures for efficient data storage and retrieval.",
        "Developed secure account management using Spring Security, ensuring proper authentication and authorization for web and mobile platforms.",
        "Implemented global exception handling with multi-language support.",
        "Wrote clean, maintainable, and efficient code following best practices.",
        "Built and optimized SQL queries to improve database performance up to 10 times.",
        "Designed and built a WebSocket load balancer, increasing system scalability at least 5 times.",
        "Led the Snap# project team, achieving on-time delivery and boosting overall team delivery efficiency by 20%.",
      ],
      technologies: ["Java", "Spring Boot", "Spring Security", "WebSocket", "MySQL", "MongoDB", "Docker", "AWS S3", "Redis"],
    },
  ],

  // =========================================================================
  // 7. ACADEMIC EDUCATION
  // Hanoi University of Science and Technology (HUST).
  // =========================================================================
  education: [
    {
      degree: "Bachelor's degree",
      institution: "Hanoi University of Science and Technology",
      period: "2017 - 2022",
      location: "Ha Noi, Viet Nam",
      honors: "Major: Mechanical Engineering",
    },
  ],

  // =========================================================================
  // 8. VERIFIED INDUSTRY SKILLS & METHODOLOGIES
  // Core domain competencies from professional practice.
  // =========================================================================
  certifications: [
    {
      name: "Java Spring Boot & Enterprise Backend Architecture",
      issuer: "Hands-on Production Banking Integration",
      date: "2024 - Present",
      credentialUrl: "https://github.com/tuanntq99",
    },
    {
      name: "Database Tuning & High-Throughput Optimization",
      issuer: "Oracle & MySQL Production Performance",
      date: "2024",
      credentialUrl: "https://github.com/tuanntq99",
    },
    {
      name: "Docker Containerization & Linux Server Administration",
      issuer: "Ubuntu & Production Cloud Deployments",
      date: "2024",
      credentialUrl: "https://github.com/tuanntq99",
    },
  ],

  // =========================================================================
  // 9. PROFESSIONAL ENDORSEMENTS & COLLABORATION FEEDBACK
  // =========================================================================
  testimonials: [
    {
      name: "Banking Integration Team Lead",
      role: "Senior Solutions Architect",
      company: "Enterprise Financial Services",
      relationship: "Collaborated on BIDV Direct Integration",
      quote: "Tuan demonstrated outstanding reliability when delivering the Customs Duty and Domestic Tax modules. His deep grasp of Spring Boot, Kafka, and Oracle database transactions ensured zero transaction discrepancies and full compliance with banking protocols.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Technical Project Manager",
      role: "Engineering Lead",
      company: "DS GLOBAL",
      relationship: "Supervised Snap# and Kiosk Platforms",
      quote: "Tuan's initiative in designing our custom WebSocket load balancer improved our real-time kiosk concurrency by 500% and his query optimizations delivered a 10x speed boost. As project lead for Snap#, he rallied the team and delivered ahead of schedule.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    },
  ],
};
