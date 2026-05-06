import React from "react";
import "./KeySkills.css";

export default function KeySkills() {
  return (
    <div className="key-skills">
      {skillsData.map((group, index) => (
        <div className="skills-card" key={index}>
          <h4>{group.title}</h4>
          <ul>
            {group.items.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

const skillsData = [
  {
    title: "Programming Languages",
    items: [
      "C#",
      "ASP.NET Core",
      "ASP.NET MVC",
      "Web API",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Python",
      "C++",
    ],
  },
  {
    title: "Web & Frontend Technologies",
    items: [
      "HTML5",
      "CSS3",
      "Bootstrap",
      "AJAX",
      "JSON",
      "REST",
      "React.js",
      "Next.js",
      "GraphQL",
      "gRPC",
      "BFF (Backend for Frontend)",
      "Responsive UI/UX Design",
    ],
  },
  {
    title: "Database & ORM",
    items: [
      "SQL Server",
      "MySQL",
      "Entity Framework",
      "Database Design",
      "LINQ",
      "SSIS",
      "Stored Procedures",
      "Query Optimization",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "Microsoft Azure",
      "AWS (Basic)",
      "CI/CD Pipelines",
      "Docker",
      "Kubernetes (Intro)",
      "Git",
      "GitHub Actions",
      "Azure DevOps",
      "RESTful & Microservices Architecture",
    ],
  },
  {
    title: "Server & Backend Tools",
    items: [
      "IIS",
      "Apache Server",
      "Nginx",
      "Middleware Development",
      "API Gateway",
      "Authentication & Authorization",
    ],
  },
  {
    title: "AI & Integrations",
    items: [
      "AI Integrations (OpenAI APIs)",
      "Machine Learning (Basics with Python)",
      "Third-Party API Integration",
      "Automation Scripts",
    ],
  },
  {
    title: "Reporting & Data Visualization",
    items: [
      "RDLC",
      "Crystal Reports",
      "Power BI (Intro)",
      "Data Analytics Dashboards",
    ],
  },
  {
    title: "Software Architecture & Design",
    items: [
      "Enterprise Systems Analysis & Design",
      "SOLID Principles",
      "Design Patterns (Repository, Unit of Work, MVC, Microservices)",
      "Domain-Driven Design (DDD)",
      "Clean Architecture",
    ],
  },
  {
    title: "Soft Skills",
    items: [
      "Analytical Thinking",
      "Communication",
      "Adaptability",
      "Problem-Solving",
      "Team Collaboration",
      "Agile & Scrum Methodologies",
    ],
  },
  {
    title: "Specialization",
    items: [
      "Enterprise Systems Analysis & Design",
      "C# & .NET Technologies",
      "Database Management",
    ],
  },
];
