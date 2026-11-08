export const personalInfo = {
  name: "MALEPATI RAM LOKESH",
  shortName: "Ram Lokesh",
  headline: "BUILDING DIGITAL EXPERIENCES.",
  roles: [
    "Software Engineer",
    "Full Stack Developer",
    "Java Developer",
    "Problem Solver"
  ],
  heroIntro: "Computer Science undergraduate passionate about building intelligent applications, solving complex problems and creating impactful software experiences.",
  aboutText: "I'm Ram Lokesh, a Computer Science and Engineering undergraduate at Koneru Lakshmaiah Education Foundation. I enjoy developing practical software solutions, exploring emerging technologies and strengthening my problem-solving skills. My interests include Java development, full-stack engineering, AI-powered applications and software engineering.",
  availability: "Available for Software Engineering Opportunities",
  cgpa: "9.17/10",
  graduation: "2027",
  problemsSolved: "250+",
  internship: "AI & Machine Learning Virtual Internship",
  email: "2300032273cseh@gmail.com",
  phone: "+91 7569815639",
  location: "Vijayawada, India",
  resumePath: "/Malepati_Ram_Lokesh_Resume.pdf",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    leetcode: "https://leetcode.com",
    codechef: "https://www.codechef.com",
    hackerrank: "https://www.hackerrank.com"
  }
};

export const stats = [
  {
    label: "CGPA",
    value: "9.17/10",
    subtext: "Koneru Lakshmaiah Education Foundation",
    highlight: "Top Academic Tier"
  },
  {
    label: "Graduation",
    value: "2027",
    subtext: "B.Tech Computer Science & Engineering",
    highlight: "Class of 2027"
  },
  {
    label: "Coding Problems",
    value: "250+",
    subtext: "Solved across LeetCode & CodeChef",
    highlight: "DSA & Algorithms"
  },
  {
    label: "Industry Training",
    value: "AI & ML",
    subtext: "Virtual Intern @ AICTE Vijayawada",
    highlight: "Supervised ML"
  }
];

export const skillCategories = [
  {
    id: "programming",
    category: "Programming Languages",
    description: "Core programming languages for algorithmic problem solving and system development",
    skills: ["Java", "C", "SQL", "JavaScript"]
  },
  {
    id: "frontend",
    category: "Frontend Development",
    description: "Modern web technologies for crafting responsive and fluid user interfaces",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    id: "backend",
    category: "Backend Development",
    description: "Server-side services, RESTful APIs, and enterprise frameworks",
    skills: ["Node.js", "Express.js", "REST APIs", "Java", "Spring Boot (Basics)"]
  },
  {
    id: "database",
    category: "Database",
    description: "Relational and document data modeling, schema design, and persistence",
    skills: ["MySQL", "MongoDB"]
  },
  {
    id: "core-cs",
    category: "Core Computer Science",
    description: "Fundamental theoretical, algorithmic, and systems foundations of computing",
    skills: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "Operating Systems",
      "Computer Networks"
    ]
  },
  {
    id: "tools",
    category: "Tools and Platforms",
    description: "Developer tooling, cloud computing, containerization, and operating environments",
    skills: ["Git", "GitHub", "VS Code", "Linux", "AWS", "Docker"]
  },
  {
    id: "practices",
    category: "Development Practices",
    description: "Modern software development methodologies and lifecycle quality standards",
    skills: ["Agile", "CI/CD", "Basic Software Testing"]
  }
];

export const allSkillsList = [
  "Java", "C", "SQL", "JavaScript",
  "React.js", "HTML5", "CSS3", "Tailwind CSS",
  "Node.js", "Express.js", "REST APIs", "Spring Boot (Basics)",
  "MySQL", "MongoDB",
  "Data Structures and Algorithms", "Object-Oriented Programming", "DBMS", "Operating Systems", "Computer Networks",
  "Git", "GitHub", "VS Code", "Linux", "AWS", "Docker",
  "Agile", "CI/CD", "Basic Software Testing"
];

export const projects = [
  {
    id: "stocksathi-ai",
    number: "01",
    title: "StockSathi AI",
    tagline: "Voice-First Smart Inventory System for MSMEs",
    technologies: ["React.js", "Node.js", "MySQL", "AI"],
    description: "An AI-powered voice-based inventory management platform for small businesses. Supports Telugu and English voice commands, smart voice confirmation before important inventory changes, and business insights.",
    detailedDescription: "StockSathi AI democratizes inventory automation for regional micro and small business owners. Built with a voice-first philosophy, it enables shopkeepers to audit stock, log incoming shipments, and query balance sheets in natural conversational Telugu and English, eliminating friction from traditional complex POS software.",
    features: [
      "Bilingual voice command processing supporting colloquial Telugu & English",
      "Smart verbal voice confirmation barrier preventing accidental critical stock modifications",
      "Automated stock threshold monitoring and predictive replenishment alerts",
      "Real-time business performance analytics and demand velocity insights",
      "Secure relational ledger persistence with MySQL and transaction logging"
    ],
    architecture: "React.js client connects through secure RESTful endpoints to a Node.js backend integrating specialized speech-to-text NLP parsers and MySQL transactional databases.",
    github: "https://github.com/Ram1848/People_Voice",
    demo: "https://frontend-delta-mocha-nx53nc3jof.vercel.app/",
    accentColor: "from-blue-600/20 via-cyan-500/10 to-transparent",
    badge: "AI & Voice Tech",
    stats: {
      languages: "Telugu & English",
      latency: "< 350ms NLP",
      reliability: "High Confirmation"
    }
  },
  {
    id: "jurniq",
    number: "02",
    title: "Jurniq – Smart Mobility Platform",
    tagline: "Intelligent Urban Ride-Sharing Ecosystem",
    technologies: ["React.js", "REST APIs", "Google Maps API", "Socket.IO"],
    description: "An intelligent ride-sharing platform featuring ride booking, location services, real-time driver notifications and AI-based driver recommendations.",
    detailedDescription: "Jurniq bridges the gap between urban riders and transportation providers with a low-latency, responsive web architecture. Implementing bidirectional Socket.IO websockets and Google Maps geocoding APIs, it provides live tracking, ETA calculations, and intelligent matching algorithms that optimize driver allocation.",
    features: [
      "Interactive map interface powered by Google Maps API with live route vectoring",
      "Instant bidirectional driver-rider socket notifications with millisecond dispatching",
      "AI-inspired proximity and route optimization recommendation engine",
      "Modular booking lifecycle management from pickup request to trip completion",
      "Clean, scalable RESTful API architecture connecting frontend state with backend services"
    ],
    architecture: "React.js frontend state synced over Socket.IO bidirectional channels with event-driven REST APIs and Google Maps geolocation matrices.",
    github: "https://github.com/Ram1848/jurniq",
    demo: "https://jurniq-sable.vercel.app/",
    accentColor: "from-sky-600/20 via-indigo-500/10 to-transparent",
    badge: "Full-Stack & Realtime",
    stats: {
      sync: "Real-time WebSockets",
      maps: "Google Maps API",
      driverMatch: "Smart Proximity"
    }
  },
  {
    id: "malware-lab",
    number: "03",
    title: "AI-Driven Malware Analysis & Threat Hunting Lab",
    tagline: "Automated Cybersecurity Binary Inspection Platform",
    technologies: ["Python", "Flask", "React.js", "MySQL", "Machine Learning"],
    description: "A cybersecurity platform designed to analyze suspicious files, identify potential malware behavior, extract indicators of compromise and generate security rules.",
    detailedDescription: "Designed for proactive digital forensics and cyber threat intelligence, this platform accepts suspicious PE files and scripts, extracts structural static features, runs them against trained machine learning classifiers, and outputs automated Indicators of Compromise (IOCs) alongside Sigma/YARA-style mitigation signatures.",
    features: [
      "Automated static file feature extraction (PE headers, entropy analysis, string dissection)",
      "Machine learning heuristic classification for anomaly and malware family detection",
      "Dynamic extraction of Indicators of Compromise (IOCs: hashes, IP addresses, domains)",
      "Automated security detection rule generation for incident response integration",
      "Interactive forensic dashboard with risk scoring and threat breakdown visualizations"
    ],
    architecture: "React.js security dashboard communicating with Python Flask microservices executing machine learning inference models backed by MySQL forensic storage.",
    github: "https://github.com",
    demo: "https://demo.example.com",
    accentColor: "from-cyan-600/20 via-blue-700/10 to-transparent",
    badge: "Cybersecurity & ML",
    stats: {
      extraction: "Automated IOC",
      framework: "Flask & Python ML",
      threatScoring: "Real-time Heuristics"
    }
  }
];

export const experience = [
  {
    role: "AI & Machine Learning Virtual Intern",
    organization: "AICTE",
    location: "Vijayawada",
    period: "April 2025 – June 2025",
    type: "Virtual Internship",
    highlights: [
      "Conducted end-to-end data preprocessing and exploratory data analysis (EDA) on structured datasets using Python data libraries.",
      "Implemented and evaluated supervised machine learning workflows including classification and regression algorithms.",
      "Assessed model performance utilizing accuracy, precision, recall, and confusion matrix evaluation metrics to refine predictions."
    ],
    technologies: ["Python", "Machine Learning", "Data Preprocessing", "EDA", "Model Evaluation"]
  }
];

export const education = [
  {
    institution: "Koneru Lakshmaiah Education Foundation",
    location: "Vijayawada, Andhra Pradesh",
    degree: "B.Tech – Computer Science and Engineering",
    period: "2023 – 2027",
    cgpa: "9.17 / 10",
    status: "Currently Pursuing (Graduating in 2027)",
    description: "Rigorous undergraduate computer science program focused on software engineering, object-oriented programming, data structures, operating systems, and distributed web architectures.",
    highlights: [
      "Consistent high academic performer with current CGPA of 9.17/10",
      "Active participant in technical symposiums and competitive coding platforms",
      "Special focus on Java enterprise systems, cloud platforms, and full-stack engineering"
    ]
  }
];

export const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2026",
    id: "AWS-CCP",
    description: "Validates comprehensive understanding of AWS Cloud concepts, cloud security, core services (EC2, S3, RDS), architecture principles, and cloud billing.",
    skillsCovered: ["AWS Cloud Fundamentals", "Cloud Security", "Infrastructure as Code", "AWS Architecture"]
  },
  {
    title: "Oracle Certified Foundations Associate – OCI Fundamentals",
    issuer: "Oracle",
    year: "2025",
    id: "OCI-FA",
    description: "Demonstrates foundational knowledge of Oracle Cloud Infrastructure services, IAM security, compute instances, VCN networking, and storage primitives.",
    skillsCovered: ["OCI Architecture", "Cloud Networking", "IAM Security", "Cloud Database"]
  }
];

export const codingProfiles = [
  {
    name: "LeetCode",
    category: "Algorithmic Problem Solving",
    highlight: "DSA, Trees, Graphs, Dynamic Programming & Arrays",
    metric: "Active Contender",
    url: "https://leetcode.com",
    badge: "Competitive",
    iconName: "Code2"
  },
  {
    name: "CodeChef",
    category: "Competitive Coding",
    highlight: "Rated contests, time-complexity optimization & math logic",
    metric: "Contest Rating",
    url: "https://www.codechef.com",
    badge: "Contests",
    iconName: "Flame"
  },
  {
    name: "HackerRank",
    category: "Skill Certification & Practice",
    highlight: "Problem Solving, Core Java and SQL assessment badges",
    metric: "Verified Skills",
    url: "https://www.hackerrank.com",
    badge: "Certified",
    iconName: "Terminal"
  },
  {
    name: "GitHub",
    category: "Open Source & Code Repositories",
    highlight: "Full-stack projects, clean Git commits, architectural documentation",
    metric: "Public Repos",
    url: "https://github.com",
    badge: "Open Source",
    iconName: "Github"
  },
  {
    name: "LinkedIn",
    category: "Professional Network",
    highlight: "Software engineering updates, technical articles & achievements",
    metric: "Network",
    url: "https://linkedin.com",
    badge: "Connect",
    iconName: "Linkedin"
  }
];
