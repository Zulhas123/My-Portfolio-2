import React from "react";
import "./KeyAchievements.css";

export default function KeyAchievements() {
  return (
    <div className="key-achievements">
      <ul className="achievement-list">
        {achievements.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

const achievements = [
  "Developed and deployed enterprise-level ASP.NET MVC and Web API applications, significantly boosting operational efficiency.",
  "Implemented custom RDLC and spreadsheet-based reporting solutions, reducing manual reporting effort.",
  "Built modular backend services using asynchronous programming, enhancing performance under high load.",
  "Migrated legacy applications to .NET Core, improving maintainability and reducing technical debt.",
  "Enforced SOLID principles and code quality standards, reducing bugs and improving code readability.",
  "Created reusable components and shared modules, accelerating feature development across multiple projects.",
];
