const portfolioData = {
        cv: {
    fileName: "Hacini_Mohammed_Oussama_CV.docx",
    shortFileName: "cv.docx",
    downloadUrl: "./Hacini_Mohammed_Oussama_CV.docx",
    directUrl: "./cv.docx",
    fileSize: "11 KB",
    mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    isReady: true,
    base64: "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"
  },
  identity: {
    name: "Hacini Mohammed Oussama",
    shortName: "Oussama",
    title: "Backend Engineer · Full-Stack Engineer · Software Engineer",
    tagline: "Architecting resilient APIs, scalable microservices, and reliable database systems.",
    location: "Ouargla, Algeria",
    availability: "Available for backend opportunities & collaborations",
    cvFile: "./Hacini_Mohammed_Oussama_CV.docx",
    cvDirectUrl: "./cv.docx",
    socials: {
      github: "https://github.com/simoking20",
      linkedin: "https://www.linkedin.com/in/mohammed-oussama-hacini-858421271/",
      whatsapp: "https://wa.me/qr/BI77IX7QTQQXI1"
    }
  },

  about: {
    bio: [
      "I am a passionate Backend & Full-Stack Engineer from Ouargla, Algeria, specializing in designing clean, high-concurrency server architectures, robust REST & GraphQL APIs, and optimized relational databases.",
      "Currently pursuing my Master's degree in Computer Science at Kasdi Merbah University Ouargla, I blend academic rigor with real-world engineering experience. Having built production platforms from scratch including an internal CRM for up to 200 daily users, I thrive on turning complex problem spaces into reliable, high-performance software."
    ],
    stats: [
      {
        value: "3+",
        label: "Years Experience",
        subtext: "Designing backend services & databases"
      },
      {
        value: "4",
        label: "Featured Products",
        subtext: "Production CRM, startups & platforms"
      },
      {
        value: "M.Sc",
        label: "Computer Science",
        subtext: "Kasdi Merbah University (2024–2026)"
      }
    ],
    spokenLanguages: [
      {
        name: "Arabic",
        level: "Native",
        proficiency: 100,
        flag: "🇩🇿"
      },
      {
        name: "English",
        level: "Professional",
        proficiency: 85,
        flag: "🇬🇧"
      },
      {
        name: "French",
        level: "Intermediate",
        proficiency: 65,
        flag: "🇫🇷"
      }
    ]
  },

  projects: [
    {
      id: "team-crm",
      title: "Team CRM System",
      role: "Lead Developer",
      period: "2025 – Present",
      isFlagship: true,
      badge: "Enterprise CRM / 50–200 Daily Users",
      description:
        "Full-featured internal CRM system built from scratch supporting 50–200 daily active users with complete customer lifecycle workflows and background automation.",
      highlights: [
        "Architected core backend with Django and DRF: accounts, contacts, deal pipelines, activities, tasks, and automation",
        "Integrated Redis and Celery for asynchronous background tasks, event processing, and scheduled workflows",
        "Engineered robust PostgreSQL database schema with indexing tailored for daily transactional throughput",
        "Deployed and orchestrated multi-container architecture using Docker Compose"
      ],
      stack: ["Django", "DRF", "PostgreSQL", "Redis", "Celery", "Docker Compose"],
      links: {
        github: "https://github.com/simoking20",
        external: null
      }
    },
    {
      id: "padar",
      title: "PADAR",
      role: "Founder & Lead Developer",
      period: "2025 – 2026",
      isFlagship: true,
      badge: "Master's Graduation Project",
      description:
        "Comprehensive digital platform engineered for road accident data reporting, real-time tracking, and analytics to support data-driven municipal interventions.",
      highlights: [
        "Architected scalable backend with Django and GraphQL API schemas for complex relational accident reports",
        "Implemented secure JWT authentication and granular role-based access control (RBAC)",
        "Configured robust containerized environments using Docker and automated CI/CD deployment pipelines",
        "Optimized PostgreSQL schema for spatial and chronological accident pattern analytics"
      ],
      stack: ["Django", "GraphQL", "PostgreSQL", "JWT", "Docker", "CI/CD"],
      links: {
        github: "https://github.com/simoking20",
        external: null
      }
    },
    {
      id: "lkvc",
      title: "LKVC",
      role: "Co-Founder & Backend Developer",
      period: "2023",
      isFlagship: false,
      badge: "Commercial Startup",
      description:
        "On-demand mobile marketplace connecting businesses and individuals with commercial delivery truck rentals across regional logistics hubs.",
      highlights: [
        "Engineered the complete REST API backend from ground zero utilizing FastAPI for asynchronous performance",
        "Designed booking lifecycle workflows, vehicle availability scheduling, and real-time state transitions",
        "Managed database schema migrations and indexing on PostgreSQL for low-latency queries",
        "Integrated secure token authentication and client authorization layers"
      ],
      stack: ["FastAPI", "PostgreSQL", "REST", "JWT"],
      links: {
        github: "https://github.com/simoking20",
        external: null
      }
    },
    {
      id: "rafikni",
      title: "Rafikni",
      role: "Backend Developer / Contributor",
      period: "2023 – 2024",
      isFlagship: false,
      badge: "Transportation Platform",
      description:
        "Fast-growing startup web platform modernizing transportation services, route booking, and passenger-driver communication.",
      highlights: [
        "Contributed core backend endpoints and feature enhancements to existing Django production services",
        "Engineered business logic for trip scheduling, notifications, and user management",
        "Refactored relational queries on PostgreSQL to eliminate performance bottlenecks during peak hours",
        "Collaborated with cross-functional teams to integrate third-party APIs and services"
      ],
      stack: ["Django", "PostgreSQL", "REST", "APIs"],
      links: {
        github: "https://github.com/simoking20",
        external: null
      }
    }
  ],

  skillCategories: [
    {
      category: "Languages",
      skills: [
        { name: "Python", isLearning: false },
        { name: "Ruby", isLearning: true },
        { name: "PHP", isLearning: false }
      ]
    },
    {
      category: "Frameworks",
      skills: [
        { name: "Django", isLearning: false },
        { name: "DRF", isLearning: false },
        { name: "FastAPI", isLearning: false },
        { name: "Flask", isLearning: false },
        { name: "Ruby on Rails", isLearning: true }
      ]
    },
    {
      category: "Databases",
      skills: [
        { name: "PostgreSQL", isLearning: false },
        { name: "MySQL", isLearning: false },
        { name: "SQLite", isLearning: false },
        { name: "Redis", isLearning: false }
      ]
    },
    {
      category: "APIs & Auth",
      skills: [
        { name: "GraphQL", isLearning: false },
        { name: "REST", isLearning: false },
        { name: "JWT", isLearning: false },
        { name: "OAuth2", isLearning: false }
      ]
    },
    {
      category: "Architecture",
      skills: [
        { name: "Microservices", isLearning: false },
        { name: "Monolith", isLearning: false },
        { name: "DDD", isLearning: false }
      ]
    },
    {
      category: "DevOps & Cloud",
      skills: [
        { name: "Docker", isLearning: false },
        { name: "Docker Compose", isLearning: false },
        { name: "Celery", isLearning: false },
        { name: "CI/CD", isLearning: false },
        { name: "Vercel", isLearning: false },
        { name: "Render", isLearning: false }
      ]
    },
    {
      category: "AI & Tooling",
      skills: [
        { name: "AI-Assisted Development", isLearning: false },
        { name: "Prompt Engineering", isLearning: false },
        { name: "Automation", isLearning: false }
      ]
    }
  ],

  timeline: [
    {
      period: "2025 – Present",
      type: "experience",
      title: "Team CRM System — Lead Developer",
      organization: "Internal CRM Platform (50–200 Users)",
      location: "Algeria",
      description:
        "Architected and deployed full internal CRM platform from scratch: accounts, deals, tasks, Redis + Celery async workflows, and Docker Compose orchestration.",
      tags: ["Django", "DRF", "PostgreSQL", "Redis", "Celery", "Docker Compose"]
    },
    {
      period: "2025 – 2026",
      type: "project",
      title: "PADAR — Founder & Lead Developer",
      organization: "Master's Graduation Project",
      location: "Ouargla, Algeria",
      description:
        "Spearheaded design and development of road accident data reporting platform utilizing Django, GraphQL, PostgreSQL, JWT, and Docker.",
      tags: ["Django", "GraphQL", "Docker", "PostgreSQL"]
    },
    {
      period: "2024 – 2026",
      type: "education",
      title: "Master's in Computer Science",
      organization: "Kasdi Merbah University Ouargla",
      location: "Ouargla, Algeria",
      description:
        "Advanced specialization in distributed software architectures, database systems, intelligent algorithms, and advanced systems design.",
      tags: ["Algorithms", "Distributed Systems", "Database Optimization"]
    },
    {
      period: "2023 – 2024",
      type: "experience",
      title: "Rafikni — Backend Developer / Contributor",
      organization: "Startup Web Platform",
      location: "Algeria",
      description:
        "Delivered backend endpoints, route coordination features, and optimized PostgreSQL relational queries for transportation web application.",
      tags: ["Django", "PostgreSQL", "REST APIs"]
    },
    {
      period: "2023",
      type: "experience",
      title: "LKVC — Co-Founder & Backend Developer",
      organization: "Delivery Truck Rental Startup",
      location: "Algeria",
      description:
        "Co-founded and engineered the high-throughput REST API layer for delivery truck rentals with FastAPI, custom booking state machine, and auth.",
      tags: ["FastAPI", "PostgreSQL", "Booking Logic"]
    },
    {
      period: "2021 – 2024",
      type: "education",
      title: "Licence in Computer Science",
      organization: "Kasdi Merbah University Ouargla",
      location: "Ouargla, Algeria",
      description:
        "Foundational coursework in algorithms, data structures, object-oriented programming, relational databases, and operating systems.",
      tags: ["Computer Science Foundations", "C/Python", "SQL", "OOP"]
    }
  ]
};

// Support both standard browser script and ES Module / CommonJS environments
if (typeof window !== 'undefined') {
  window.portfolioData = portfolioData;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { portfolioData };
}
