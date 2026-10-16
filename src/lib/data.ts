export const profile = {
  name: "Arumuga Gomathi R",
  role: "AWS Certified Software Engineer",
  tagline: "Cloud-native, serverless applications on AWS",
  location: "Tenkasi, Tamil Nadu, India",
  email: "r.arumugagomathi@gmail.com",
  phone: "+91 99945 17033",
  linkedin: "https://linkedin.com/in/arumugagomathi",
  linkedinLabel: "linkedin.com/in/arumugagomathi",
  availability: "Immediately available • Open to India / Remote",
  summary:
    "AWS Certified software engineer with hands-on experience building cloud-native, serverless applications on AWS, developing REST APIs in Java Spring Boot, and managing SQL databases. Independently designed and deployed Ticketly — a nine-microservice serverless event ticketing platform on AWS using Lambda (Python), API Gateway, DynamoDB, Cognito, CloudFront, SQS, EventBridge, and React.",
  openTo: ["Cloud Support", "Application Support", "AWS Operations", "Software Engineering"],
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const skillGroups = [
  {
    title: "Cloud (AWS)",
    icon: "Cloud",
    skills: ["Lambda (Python)", "API Gateway", "DynamoDB", "Cognito", "CloudFront", "S3", "EC2", "IAM", "CloudFormation", "Step Functions", "SQS", "EventBridge", "DMS", "CloudWatch"],
    highlight: "AWS Certified Cloud Practitioner",
  },
  {
    title: "Backend",
    icon: "Server",
    skills: ["Java", "Spring Boot", "REST APIs", "Microservices", "Python (Lambda)"],
  },
  {
    title: "Frontend",
    icon: "Layout",
    skills: ["React JS", "JavaScript", "HTML5", "CSS3", "State management", "REST integration"],
  },
  {
    title: "Databases",
    icon: "Database",
    skills: ["MS SQL Server", "DynamoDB", "SSMS", "Joins & CTEs", "Window functions", "Stored procedures", "Views", "Query optimisation"],
  },
  {
    title: "OS & Systems",
    icon: "Terminal",
    skills: ["Linux (KodeKloud certified)", "CLI", "Process management", "Networking fundamentals"],
  },
  {
    title: "DevOps & Collaboration",
    icon: "GitBranch",
    skills: ["Git (branching, PRs, conflicts)", "Jira (triage, sprints)", "CloudWatch (logs, metrics, alarms)", "AI-assisted dev: Claude, Copilot"],
  },
];

export const experience = [
  {
    role: "Graduate Software Trainee",
    org: "Psiog, Chennai",
    period: "Mar 2025 — Jun 2026",
    bullets: [
      "Designed and deployed Ticketly — serverless event ticketing platform on AWS with React frontend and Python Lambda microservices, communicating via EventBridge and SQS with Cognito role-based access control.",
      "Developed REST APIs using Java Spring Boot for backend management systems and service integration.",
      "Wrote and optimised complex SQL in MS SQL Server — joins, subqueries, CTEs, window functions, aggregates, stored procedures, views.",
      "Managed IAM roles, access policies, and secure service-to-service communication; troubleshot permission failures across the lifecycle.",
      "Monitored app health with CloudWatch — logs, metrics, alarms for Lambda timeouts, DynamoDB throttling, API Gateway errors.",
      "Orchestrated booking workflow with Step Functions — seat locking, payment initiation, confirmation, rollback on failure.",
      "Git version control (branching, merging, PRs, conflicts) and Jira ticket/sprint coordination.",
      "Presented Ticketly architecture, business use case, and live demo to VP of Service Delivery and Head of L&D.",
    ],
    tags: ["AWS Serverless", "Spring Boot", "SQL", "IAM", "CloudWatch", "Step Functions"],
  },
  {
    role: "AWS Cloud Intern",
    org: "TCS iON (Remote)",
    period: "Apr 2023 — Jun 2023",
    bullets: [
      "Developed and deployed a web application on AWS — integrating frontend and backend with core AWS services within defined timelines.",
      "Troubleshot deployment and configuration issues independently, delivering a functional app under technical guidance.",
    ],
    tags: ["AWS", "Web deployment", "Troubleshooting"],
  },
  {
    role: "Core Member",
    org: "AWS Women in Tech, Chennai",
    period: "Mar 2024 — Present",
    bullets: [
      "Organised AWS Community Day Chennai — venue, speakers, and attendee engagement for flagship regional cloud event.",
      "Manage end-to-end logistics for monthly meetups including speaker coordination and post-event follow-up.",
    ],
    tags: ["Community", "Event management", "Public speaking"],
  },
];

export const projects = [
  {
    title: "Ticketly — Serverless Event Ticketing Platform",
    subtitle: "Sole developer • 9-microservice serverless AWS platform",
    description:
      "Independently designed and deployed a nine-microservice serverless platform with React frontend, Python Lambda backend, and event-driven architecture via EventBridge and SQS. Step Functions automate booking: DynamoDB conditional-write seat locking, payment processing, confirmation, and compensating rollback. Cognito + Lambda authorisers enforce Admin / Organiser / User roles with MFA + JWT.",
    stack: ["React", "Python Lambda", "Step Functions", "API Gateway", "DynamoDB", "Cognito", "CloudFront", "SQS", "EventBridge", "IAM", "CloudWatch"],
    featured: true,
  },
  {
    title: "Relational DB → DynamoDB Migration",
    subtitle: "Zero-data-loss migration",
    description:
      "Planned and executed full database migration using AWS DMS and CloudFormation — validating data integrity before, during, and after migration to ensure zero data loss.",
    stack: ["AWS DMS", "CloudFormation", "DynamoDB", "MS SQL Server"],
    featured: false,
  },
  {
    title: "Static Portfolio Website",
    subtitle: "Global low-latency delivery",
    description: "Deployed a static website using S3 and CloudFront for low-latency global content delivery.",
    stack: ["S3", "CloudFront", "HTML", "CSS"],
    featured: false,
  },
  {
    title: "Citrus Image Classification — CNN",
    subtitle: "99% accuracy • Final-year research",
    description:
      "Developed a CNN-based image classification model achieving 99% accuracy for citrus image recognition as part of final-year academic research.",
    stack: ["Python", "CNN", "Machine Learning"],
    featured: false,
  },
];

export const certifications = [
  { title: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services" },
  { title: "Linux System Administration for Beginners", issuer: "KodeKloud" },
  { title: "AWS AI & ML Scholars Program", issuer: "AWS Skill Builder & Udacity" },
  { title: "Project Management Virtual Experience", issuer: "Forge" },
  { title: "Design Thinking Workshop", issuer: "IBM x NIT Trichy, Pragyan 2023" },
];

export const education = {
  degree: "B.E. Electronics and Communication Engineering",
  school: "University VOC College of Engineering, Anna University",
  period: "2019 — 2023",
  cgpa: "CGPA 7.5",
};
