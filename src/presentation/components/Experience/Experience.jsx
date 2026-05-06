import React from "react";
import "./Experience.css";

export default function Experience() {
  return (
    <div className="experience">
      {experienceData.map((job, index) => (
        <div className="experience-card" key={index}>
          <h4>{job.title}</h4>
          <p className="company">
            {job.company} — <span>{job.location}</span>
          </p>
          <p className="duration">{job.duration}</p>

          <ul className="bullets">
            {job.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

const experienceData = [
  {
    title: "Software Engineer",
    company: "JABA IT (Japan Bangladesh IT Ltd)",
    location: "Dhaka, Bangladesh",
    duration: "Dec 2023 – Present",
    points: [
      "Develop and maintain robust .NET-based applications for international clients.",
      "Collaborate with Japanese teams to ensure high-quality project delivery.",
      "Implement new features, optimize SQL queries, and resolve production-level bugs.",
      "Support Agile-based sprint planning, documentation, and version control (Git).",
    ],
  },
  {
    title: "Assistant Software Programmer",
    company: "Interlink Technology Ltd.",
    location: "Dhaka, Bangladesh",
    duration: "Jan 2022 – Nov 2023",
    points: [
      "Developed internal business tools using ASP.NET MVC, Web API, and SQL Server.",
      "Enhanced performance with asynchronous programming and query optimization.",
      "Streamlined reporting processes and participated in client meetings and analysis.",
    ],
  },
  {
    title: "Junior Software Engineer",
    company: "Logic Infotech",
    location: "Dhaka, Bangladesh",
    duration: "Nov 2020 – Dec 2022",
    points: [
      "Built modules for HR, payroll, and finance applications using ASP.NET MVC and JavaScript.",
      "Created reports and dashboards with RDLC and visualization tools.",
      "Collaborated with senior developers and QA teams for quality releases.",
    ],
  },
];
