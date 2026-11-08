/**
 * =========================================================================
 * PORTFOLIO CONFIGURATION - SINGLE SOURCE OF TRUTH
 * =========================================================================
 * Every section of the website reads from this file.
 * Keep the content in sync with the downloadable CV in /public (cvUrl).
 */

export interface PersonalInfo {
  name: string;
  initials: string;
  role: string;
  roles: string[]; // Rotating titles in the hero typewriter
  bio: string;
  location: string;
  availableForHire: boolean;
  availabilityText: string;
  email: string;
  phone?: string;
  avatarUrl: string;
  cvUrl: string; // Path to the PDF in /public
  cvFileName: string; // File name suggested to the browser on download
  socials: {
    github?: string;
    linkedin: string;
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
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  company: string;
  description: string;
  highlights?: string[];
  technologies: string[];
  link?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
  current?: boolean;
  note?: string; // Small context line, e.g. "formerly IGNIFY · promoted Oct 2025"
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  major: string;
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
  contact?: string; // e.g. email / LinkedIn of the referee
}

export interface PortfolioData {
  siteMetadata: {
    title: string;
    description: string;
    ogImage?: string; // Optional social share image (path in /public or full URL)
    siteUrl: string;
  };
  personal: PersonalInfo;
  metrics: Metric[];
  skillCategories: SkillCategory[];
  languageNote?: string; // Spoken-language line shown under the skills grid
  projects: Project[];
  experiences: Experience[];
  otherExperiences: Experience[]; // Non-software roles (shown compactly)
  education: Education[];
  certifications: Certification[];
  testimonials: Testimonial[];
}

export const portfolioData: PortfolioData = {
  // =========================================================================
  // 1. SITE & SEO METADATA
  // =========================================================================
  siteMetadata: {
    title: "Ngo Tran Quoc Tuan | Java Backend Developer",
    description:
      "Java Backend Developer with 2.5+ years building banking and fintech systems for BIDV, currently Dev Lead. Payment processing, loan origination and digital signing with Spring Boot, Kafka, Oracle and PostgreSQL.",
    siteUrl: "https://tuanntq.is-a.dev",
  },

  // =========================================================================
  // 2. PERSONAL IDENTITY & CONTACT
  // =========================================================================
  personal: {
    name: "Ngo Tran Quoc Tuan",
    initials: "TQ",
    role: "Java Backend Developer",
    roles: [
      "Java Backend Developer",
      "Dev Lead · BIDV Projects",
      "Payment Processing",
      "Loan Origination & eSign",
    ],
    bio: "Java Backend Developer with 2.5+ years of experience building banking and fintech systems for BIDV, currently serving as Dev Lead. Specialized in payment processing, loan origination, and digital signing, with a strong focus on transaction integrity, system integration, and on-time delivery.",
    location: "Ha Noi, Viet Nam",
    availableForHire: true,
    availabilityText: "Open to Backend opportunities",
    email: "tuanhd131@gmail.com",
    phone: "+84 979 137 027",
    avatarUrl: "/images/avatar.jpg",
    cvUrl: "/Ngo_Tran_Quoc_Tuan_CV.pdf",
    cvFileName: "JavaDeveloper_Ngo-Tran-Quoc-Tuan.pdf",
    socials: {
      github: "https://github.com/tuanntq99",
      linkedin: "https://linkedin.com/in/tuanntq",
      facebook: "https://facebook.com/tuanntq99/",
    },
  },

  // =========================================================================
  // 3. IMPACT METRICS (numbers taken directly from the CV)
  // The hero proof line reads metrics[0] (years), [1] (retry rate) and [2] (on-time projects).
  // =========================================================================
  metrics: [
    {
      value: "2.5+",
      label: "Years of Backend",
      description: "Building banking and fintech systems for BIDV, currently as Dev Lead.",
    },
    {
      value: "~99%",
      label: "Failed Tx Auto-Resolved",
      description: "Transaction retry jobs with idempotency keys to prevent duplicate debits.",
    },
    {
      value: "6/6",
      label: "Projects On Schedule",
      description: "BIDV projects delivered on time as the main technical point of contact.",
    },
    {
      value: "10x",
      label: "Faster SQL",
      description: "Execution plan analysis and indexing, improving performance up to 10 times.",
    },
  ],

  // =========================================================================
  // 4. SKILLS (same groups as the CV)
  // =========================================================================
  skillCategories: [
    { name: "Languages", skills: ["Java 17/21"] },
    { name: "Frameworks", skills: ["Spring Boot", "Spring Security", "Spring Data JPA (Criteria API)", "Hibernate"] },
    { name: "Architecture & Messaging", skills: ["Microservices", "REST API (RESTful)", "Apache Kafka", "WebSocket", "Quartz Scheduler"] },
    { name: "Databases & Caching", skills: ["SQL", "Oracle (PL/SQL)", "PostgreSQL (Stored Procedures)", "MySQL", "MongoDB", "Redis"] },
    { name: "Cloud & DevOps", skills: ["AWS fundamentals (S3, Application Load Balancer)", "Docker", "Linux (Ubuntu)"] },
    { name: "Frontend", skills: ["Angular (basic)"] },
    { name: "Testing & Quality", skills: ["JUnit", "Mockito", "SonarQube"] },
    { name: "Tools & Methodologies", skills: ["Git (GitHub, GitLab)", "IntelliJ IDEA", "Postman", "Jira", "Agile/Scrum", "Waterfall"] },
  ],
  languageNote: "English: Proficient in reading technical documentation and specifications",

  // =========================================================================
  // 5. KEY PROJECTS
  // =========================================================================
  projects: [
    {
      id: "bidv-gov",
      title: "GOV",
      subtitle: "Public Service Payment Platform on BIDV Direct",
      company: "SKYMAP",
      description:
        "Multi-phase platform for paying customs duties, domestic taxes, seaport infrastructure fees, and other State Treasury payments via BIDV Direct (web, iOS, Android), with maker-checker approval, reconciliation, and timeout transaction handling.",
      highlights: ["~2,000 transactions/day"],
      technologies: ["Java 17/21", "Spring Boot", "Spring Data JPA", "Oracle", "Apache Kafka", "Redis", "Quartz", "Microservices"],
    },
    {
      id: "bidv-rlos",
      title: "RLOS",
      subtitle: "Retail Loan Origination System for BIDV",
      company: "SKYMAP",
      description:
        "Loan origination platform covering credit card, collateral, and home loan modules (integrated with BIDV Home), featuring sequential multi-party digital signing of PDF contracts via BIDV's centralized eSign platform and HSM.",
      technologies: ["Java 17/21", "Spring Boot", "Spring Data JPA", "PostgreSQL", "REST API", "AWS S3"],
    },
    {
      id: "bidv-bone",
      title: "B.ONE",
      subtitle: "Digital Workplace Platform for BIDV",
      company: "SKYMAP",
      description:
        "Enterprise-wide internal digital workplace; developed the B.Legal module for legal document management with document relationship mapping, change history, legal consultation Q&A, advanced search, and reporting.",
      technologies: ["Java 17/21", "Spring Boot", "PostgreSQL", "Stored Procedures"],
    },
    {
      id: "bidv-other",
      title: "LDH · IRM · CARD",
      subtitle: "Other BIDV projects",
      company: "SKYMAP",
      description: "Further BIDV systems across lending, risk and corporate cards.",
      highlights: [
        "LDH - Lending Hub: Loan data synchronization and reporting for BIDV's loan management system.",
        "IRM - Integrated Risk Management: Material risk assessment and residual risk calculation with color-coded severity levels.",
        "CARD - Corporate Card on BIDV Direct: Backend for corporate card issuance; Angular front-end for card issuance and credit limit change flows.",
      ],
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Angular"],
    },
    {
      id: "snap",
      title: "Snap#",
      subtitle: "Photo kiosk platform — Korea & Vietnam",
      company: "DS GLOBAL",
      description:
        "A photo kiosk system serving customers in Korea and Don Chicken in Vietnam, providing photo printing, centralized kiosk and printer management, user management, analytics tracking, and remote kiosk control via a mobile application.",
      highlights: ["Led a 4-member team: on-time delivery and team efficiency up by 20%"],
      technologies: ["Spring Boot", "Spring Security", "WebSocket", "Scheduling", "MySQL", "Docker", "AWS S3", "AWS ALB"],
    },
    {
      id: "lpa",
      title: "LPA",
      subtitle: "Medical clinic management system",
      company: "DS GLOBAL",
      description:
        "A medical clinic management system streamlining patient form creation, customer account management, medical record handling, and secure medical record printing.",
      technologies: ["Spring Boot", "Spring Security", "MySQL", "MongoDB", "Docker", "Scheduling", "Redis"],
    },
  ],

  // =========================================================================
  // 6. WORK EXPERIENCE
  // =========================================================================
  experiences: [
    {
      company: "SKYMAP",
      role: "Dev Lead",
      period: "Apr 2025 - Present",
      location: "Ha Noi, Viet Nam",
      note: "formerly IGNIFY · promoted Oct 2025",
      current: true,
      achievements: [
        "Led backend development across **6 BIDV projects**, managing up to **4 backend developers** per project within cross-functional teams of **9-18 members** (web, Android, iOS, QC, BA, PM).",
        "Delivered **6/6 projects on schedule** by driving task breakdown, estimation, and delivery risk management as the main technical point of contact with the client.",
        "Conducted code reviews and mentored **4 junior developers and 5 interns**.",
        "Built transaction retry jobs that automatically resolved **~99% of failed transactions**, using idempotency keys to prevent duplicate debits.",
        "Integrated government systems (State Treasury, General Department of Taxation) and BIDV's eSign platform with HSM-based digital signing via REST APIs.",
        "Developed independently deployable services in a microservices architecture; wrote SQL, PL/SQL, JPA Criteria queries, and PostgreSQL stored procedures.",
        "Delivered unit tests with JUnit and Mockito using AI-assisted test generation to meet project-wide code coverage requirements; worked in Agile/Scrum teams using Jira.",
      ],
    },
    {
      company: "DS GLOBAL",
      role: "Backend Developer",
      period: "Apr 2024 - Apr 2025",
      location: "Ha Noi, Viet Nam",
      achievements: [
        "Optimized complex SQL queries through execution plan analysis and indexing, improving performance **up to 10 times**.",
        "Designed and built a WebSocket load balancing solution with AWS Application Load Balancer, increasing system capacity **at least 5 times**.",
        "Led a **4-member** Snap# team, achieving on-time delivery and boosting team efficiency **by 20%**.",
        "Developed secure account management with Spring Security for authentication and authorization across web and mobile platforms.",
      ],
    },
  ],

  // Before software: shown compactly under the timeline
  otherExperiences: [
    {
      company: "SONG HONG VIET CO., LTD. (SANAKY)",
      role: "Mechanical Engineer",
      period: "Dec 2022 - Feb 2024",
      location: "Ha Noi, Viet Nam",
      achievements: [
        "Designed transformer enclosures; transitioned to software development through self-study in Java and Spring Boot.",
      ],
    },
  ],

  // =========================================================================
  // 7. EDUCATION
  // =========================================================================
  education: [
    {
      degree: "Bachelor's degree",
      institution: "Hanoi University of Science and Technology",
      period: "2017 - 2022",
      major: "Mechanical Engineering",
    },
  ],

  // =========================================================================
  // 8. CERTIFICATIONS
  // The section is hidden automatically while this list is empty.
  // Example:
  // { name: "Oracle Certified Professional: Java SE 17 Developer", issuer: "Oracle",
  //   date: "2026", credentialUrl: "https://..." },
  // =========================================================================
  certifications: [],

  // =========================================================================
  // 9. REFERENCES / TESTIMONIALS
  // The section (and its nav link) is hidden automatically while this list is empty.
  // Example:
  // { name: "Nguyen Van A", role: "Team Lead", company: "SKYMAP",
  //   relationship: "Direct manager", quote: "...", contact: "https://linkedin.com/in/..." },
  // =========================================================================
  testimonials: [],
};
