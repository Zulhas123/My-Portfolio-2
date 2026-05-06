import React from "react";
import "./Expertise.css";

export default function Expertise() {
  return (
    <div className="expertise">
      <div className="max-width">
        <div className="expertise-cards">
          {expertiseData.map((item, index) => (
            <div className="card" key={index}>
              <h3>{item.title}</h3>
              <ul>
                {item.items.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const expertiseData = [
  {
    title: "Backend Technologies",
    items: [
      "ASP.NET Core (MVC)",
      "ASP.NET Web API",
      "Entity Framework (Web Form)",
      "Object-Oriented Programming (OOP)",
      "Python",
      "PHP",
    ],
  },
  {
    title: "Database Systems",
    items: [
      "SQL Server",
      "MySQL Server",
      "Oracle",
      "SQL Server Integration Services (SSIS)",
      "Database Design",
    ],
  },
  {
    title: "Reporting Tools",
    items: ["Crystal Reports", "RDLC Reports"],
  },
  {
    title: "Frontend Frameworks",
    items: ["React.js", "Next.js", "Bootstrap", "HTML", "CSS"],
  },
  {
    title: "JavaScript and TypeScript",
    items: ["JavaScript", "TypeScript", "AJAX", "JSON"],
  },
  {
    title: "Azure and Cloud Technologies",
    items: [
      "Azure (Azure Portal)",
      "Azure DevOps",
      "App Service",
      "Azure Functions",
      "Blob Storage",
    ],
  },
  {
    title: "Problem Solving and Teamwork",
    items: ["Creative Problem Solving", "Teamwork"],
  },
  {
    title: "Version Control and Development Tools",
    items: ["Visual Studio", "Azure DevOps"],
  },
  {
    title: "Artificial Intelligence",
    items: ["Artificial Intelligence (AI)"],
  },
  {
    title: "Web Development Skills",
    items: ["MVC Core", "CSS", "Bootstrap"],
  },
  {
    title: "Testing and Debugging",
    items: [
      "Unit Testing",
      "Integration Testing",
      "Debugging Tools",
      "Performance Optimization",
    ],
  },
  {
    title: "DevOps and Automation",
    items: [
      "Continuous Integration (CI)",
      "Continuous Deployment (CD)",
      "Docker",
      "Kubernetes",
      "Automation Scripts",
    ],
  },
];
