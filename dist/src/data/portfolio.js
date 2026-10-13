const portfolioData = {
    cv: {
    fileName: "Hacini_Mohammed_Oussama_CV.docx",
    shortFileName: "cv.docx",
    downloadUrl: "./Hacini_Mohammed_Oussama_CV.docx",
    directUrl: "./cv.docx",
    fileSize: "9 KB",
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
