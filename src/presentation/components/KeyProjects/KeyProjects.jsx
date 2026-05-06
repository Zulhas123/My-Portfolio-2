import React from "react";
import "./KeyProjects.css";

export default function KeyProjects() {
  return (
    <div className="key-projects">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <h4>{project}</h4>
        </div>
      ))}
    </div>
  );
}

const projects = [
  "Enterprise Resource Planning (ERP) System",
  "Payroll Management System",
  "License Management System",
  "Visitor Management & KIOSK System",
  "E-Commerce System (.NET Core MVC)",
  "Salary and Loan Management System",
  "Edge One : Hospital Management System",
  "Accounting System",
  "School Payroll System",
  "HR Management System",
  "VAT Management System",
];
