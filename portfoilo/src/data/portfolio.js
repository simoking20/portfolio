const portfolioData = {
  identity: {
    name: "Hacini Mohammed Oussama",
    shortName: "Oussama",
    title: "Backend Software Engineer",
    tagline: "Architecting resilient APIs, scalable microservices, and reliable database systems.",
    location: "Ouargla, Algeria",
    availability: "Available for backend opportunities & collaborations",
    socials: {
      github: "https://github.com/simoking20",
      linkedin: "https://www.linkedin.com/in/mohammed-oussama-hacini-858421271/",
      whatsapp: "https://wa.me/qr/BI77IX7QTQQXI1"
    }
  },

  about: {
    bio: [
      "I am a passionate Backend Software Engineer from Ouargla, Algeria, specializing in designing clean, high-concurrency server architectures, robust REST & GraphQL APIs, and optimized relational databases.",
      "Currently pursuing my Master's degree in Computer Science at Kasdi Merbah University Ouargla, I blend academic rigor with real-world startup engineering experience. Having founded and contributed to multiple production platforms, I thrive on turning complex problem spaces into reliable, performant software."
    ],
    stats: [
      {
        value: "3+",
        label: "Years Experience",
        subtext: "Designing backend services & databases"
      },
      {
        value: "3",
        label: "Featured Products",
        subtext: "Startups & production platforms"
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
        "Implemented secure JWT authentication and granular role-based access control",
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
        { name: "SQLite", isLearning: false }
      ]
    },
    {
      category: "APIs & Auth",
      skills: [
        { name: "GraphQL", isLearning: false },
        { name: "REST", isLearning: false },
        { name: "JWT", isLearning: false }
      ]
    },
    {
      category: "Architecture",
      skills: [
        { name: "Microservices", isLearning: false },
        { name: "Monolith", isLearning: false }
      ]
    },
    {
      category: "DevOps & Cloud",
      skills: [
        { name: "Docker", isLearning: false },
        { name: "CI/CD", isLearning: false },
        { name: "Vercel", isLearning: false },
        { name: "Render", isLearning: false }
      ]
    },
    {
      category: "AI & Tooling",
      skills: [
        { name: "AI Automation", isLearning: false },
        { name: "Prompt Engineering", isLearning: false }
      ]
    }
  ],

  timeline: [
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
