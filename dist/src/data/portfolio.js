const portfolioData = {
  identity: {
    name: "Hacini Mohammed Oussama",
    shortName: "Oussama",
    title: "Backend Engineer · Full-Stack Engineer · Software Engineer",
    tagline: "Architecting resilient APIs, scalable microservices, and reliable database systems.",
    location: "Ouargla, Algeria",
    availability: "Available for backend opportunities & collaborations",
    cvFile: "./Hacini_Mohammed_Oussama_CV.docx",
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
