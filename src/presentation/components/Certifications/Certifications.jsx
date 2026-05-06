import React from "react";
import "./Certifications.css";

export default function Certifications() {
  return (
    <div className="certifications">
      {certificationsData.map((cert, index) => (
        <div className="cert-card" key={index}>
          <h4>{cert.title}</h4>

          {cert.org && <p className="cert-org">{cert.org}</p>}
          {cert.note && <p className="cert-note">{cert.note}</p>}
        </div>
      ))}
    </div>
  );
}

const certificationsData = [
  {
    title: "Enterprise Systems Analysis and Design (ESAD – C#)",
    org: "IDB-BISEW | Dhaka, Bangladesh",
    note: "Completed under the IDB (IsDB-BISEW) IT Scholarship Program.",
  },
  {
    title: "Vendor Exam 70-486: Developing ASP.NET MVC Web Applications",
    org: "Microsoft",
  },
  {
    title: ".NET Fundamentals",
    org: "Great Learning",
  },
  {
    title: "Certified .NET OOPs (Object-Oriented Programming in .NET)",
    org: "Great Learning",
  },
];
