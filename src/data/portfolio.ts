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
  // =========================================================================
  siteMetadata: {
    title: "Ngo Tran Quoc Tuan | Java Backend Developer",
    description:
      "Java Backend Developer with over 2 years of experience, including 1 year contributing to enterprise tax payment systems integrated with BIDV. Spring Boot, Spring Security, Kafka, Oracle.",
    ogImage: "/images/og-preview.png",
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
      "Spring Boot Engineer",
      "Banking Integration (BIDV)",
      "Database Performance Tuning",
    ],
    bio: "Java Backend Developer with over 2 years of experience, including 1 year contributing to enterprise tax payment systems integrated with a major bank. Experienced in developing secure, high-availability, and transaction-sensitive applications ensuring data integrity and compliance. Skilled in Spring Boot, Spring Security, and backend system optimization.",
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
  // =========================================================================
  metrics: [
    {
      value: "2+",
      label: "Years of Backend",
      description: "Including 1 year on enterprise tax payment systems integrated with BIDV.",
    },
    {
      value: "10x",
      label: "Faster Query",
      description: "3s → 0.3s via execution-plan analysis, proper indexes and deferred joins.",
    },
    {
      value: "5x",
      label: "WebSocket Scalability",
      description: "1,000 → 5,000 concurrent requests with path-based routing on AWS ALB.",
    },
    {
      value: "20%",
      label: "Team Efficiency",
      description: "Led task planning for Snap#, delivering consistently on time.",
    },
  ],

  // =========================================================================
  // 4. SKILLS (same groups as the CV)
  // =========================================================================
  skillCategories: [
    { name: "Backend", skills: ["Java", "Apache Kafka"] },
    { name: "Frameworks", skills: ["Spring Boot", "Hibernate"] },
    { name: "Database", skills: ["Oracle", "MySQL", "MongoDB", "PostgreSQL"] },
    { name: "Cloud & DevOps", skills: ["AWS (fundamental)", "Docker", "Linux (Ubuntu)"] },
    { name: "Version Control", skills: ["GitHub", "GitLab", "Fork"] },
    { name: "Development Tools", skills: ["Cursor", "IntelliJ", "Postman"] },
    { name: "Testing", skills: ["SonarQube", "JUnit", "Mockito"] },
    { name: "Languages", skills: ["English (Basic)"] },
  ],

  // =========================================================================
  // 5. KEY PROJECTS
  // =========================================================================
  projects: [
    {
      id: "bidv-customs-duty",
      title: "Customs Duty",
      subtitle: "Public Service module of BIDV Direct",
      company: "IGNIFY",
      description:
        "Designed and developed a Customs Duty Management System that allows makers to declare and pay customs duties, while checkers verify and approve tax transactions, generate reports, print official receipts, and export tax reports for auditing purposes.",
      technologies: ["Spring Boot", "Oracle", "Quartz", "Apache Kafka", "Redis"],
    },
    {
      id: "bidv-domestic-tax",
      title: "Domestic Tax",
      subtitle: "Public Service module of BIDV Direct",
      company: "IGNIFY",
      description:
        "Developed a Domestic Tax Payment System enabling fast, convenient, and reliable payment of land tax, vehicle tax, and other domestic taxes.",
      technologies: ["Spring Boot", "Oracle", "Quartz", "Apache Kafka", "Redis"],
    },
    {
      id: "snap",
      title: "Snap#",
      subtitle: "Photo kiosk platform — Korea & Vietnam",
      company: "DS GLOBAL",
      description:
        "A photo kiosk system serving customers in Korea and Don Chicken in Vietnam, providing photo printing, centralized kiosk and printer management, user management, analytics tracking, and remote kiosk control via a mobile application.",
      highlights: [
        "WebSocket load distribution on AWS ALB: 1,000 → 5,000 concurrent requests (5x)",
        "Led task planning, ≥ 20% team efficiency improvement",
      ],
      technologies: ["Spring Boot", "Spring Security", "WebSocket", "Scheduling", "MySQL", "Docker", "AWS S3"],
    },
    {
      id: "lpa",
      title: "LPA",
      subtitle: "Medical clinic management system",
      company: "DS GLOBAL",
      description:
        "A medical clinic management system designed to streamline patient form creation, customer account management, medical record handling, and integrate secure and efficient medical record printing functionalities.",
      technologies: ["Spring Boot", "Spring Security", "MySQL", "MongoDB", "Docker", "Scheduling", "Redis"],
    },
    {
      id: "imagebox",
      title: "IMAGEBOX",
      subtitle: "Handheld photo printing system",
      company: "DS GLOBAL",
      description:
        "Contributed to the development of a handheld photo printing system that enables users to connect their mobile devices via Bluetooth and print photos instantly.",
      technologies: ["Laravel", "MySQL"],
    },
  ],

  // =========================================================================
  // 6. WORK EXPERIENCE
  // =========================================================================
  experiences: [
    {
      company: "IGNIFY",
      role: "Back-End Developer",
      period: "Apr 2025 - Present",
      location: "Ha Noi, Viet Nam",
      current: true,
      achievements: [
        "Work closely with Joint Stock Commercial Bank for Investment and Development of Vietnam (BIDV) on system integration and payment processing.",
        "Design and developed high-performance APIs using Java Spring Framework.",
        "Write clean, maintainable, and efficient code following best practices.",
        "Write and maintained clear technical documentation for APIs, system architecture and system workflows.",
        "Work closely with Business Analysts to analyze business requirements and translate process workflows into technical solutions.",
      ],
    },
    {
      company: "DS GLOBAL",
      role: "Back-End Developer",
      period: "Apr 2024 - Apr 2025",
      location: "Ha Noi, Viet Nam",
      achievements: [
        "Designed and developed high-performance APIs using Java Spring Framework.",
        "Designed and optimized database structures for efficient data storage and retrieval.",
        "Developed secure account management using Spring Security, ensuring proper authentication and authorization for web and mobile platforms.",
        "Wrote clean, maintainable, and efficient code following best practices.",
        "Optimized a slow database query by analyzing the execution plan, adding appropriate indexes, and applying deferred join techniques, reducing response time from 3 seconds to 0.3 seconds (**10x** performance improvement).",
        "Designed and implemented a WebSocket load distribution solution using path-based routing on AWS ALB to ensure request affinity, preventing thread pool exhaustion and increasing system scalability by **5x** (from 1,000 to 5,000 concurrent requests).",
        "Led task planning in the Snap# project by estimating workload based on business complexity and individual team capabilities, proactively supporting teammates and removing bottlenecks, resulting in consistent on-time delivery and at least **20%** efficiency improvement.",
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
  // { name: "Nguyen Van A", role: "Team Lead", company: "IGNIFY",
  //   relationship: "Direct manager", quote: "...", contact: "https://linkedin.com/in/..." },
  // =========================================================================
  testimonials: [],
};
