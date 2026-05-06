import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="projects">
      <div className="max-width">
        <div className="project-cards">
          {projects.map((p, index) => (
            <div className="card" key={index}>
              <div className="content">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const projects = [
  {
    title: "ERP",
    desc: "A robust enterprise resource planning system designed to streamline and manage business processes efficiently.",
  },
  {
    title: "Loan & Salary Management System (LMS)",
    desc: "A comprehensive solution for managing employee loans, salaries, and benefits seamlessly.",
  },
  {
    title: "Visitor Management System",
    desc: "Enhance security and organization by tracking and managing visitor entries and exits efficiently.",
  },
  {
    title: "Meeting Management System",
    desc: "Schedule, organize, and document meetings with this powerful meeting management tool.",
  },
  {
    title: "Scai News Feed Project",
    desc: "A dynamic news feed system that delivers real-time updates and curated content.",
  },
  {
    title: "License Management System",
    desc: "Manage and track software licenses and compliance effortlessly with our system.",
  },
  {
    title: "Payroll System",
    desc: "An automated payroll system that simplifies salary calculations and tax compliance.",
  },
  {
    title: "Web Chatting System",
    desc: "Enable seamless communication with a feature-rich, secure web chatting platform.",
  },
  {
    title: "School Management",
    desc: "A complete solution for managing student records, classes, and administrative tasks.",
  },
  {
    title: "Live Shope (E-Commerce)",
    desc: "An advanced e-commerce platform for selling products online with ease.",
  },
  {
    title: "Stylelook (E-Commerce)",
    desc: "A modern e-commerce solution for fashion retailers, designed for excellent user experience.",
  },
  {
    title: "AI Analytics System",
    desc: "An AI-powered analytics platform to extract insights, predict trends, and assist decision-making in real-time.",
  },
  {
    title: "CRM System",
    desc: "Manage leads, customers, and sales pipelines efficiently.",
  },
  {
    title: "Inventory Management System",
    desc: "Track stock levels, manage suppliers, and automate inventory operations.",
  },
  {
    title: "Booking & Appointment System",
    desc: "Online scheduling system for appointments and reservations.",
  },
  {
    title: "HR Management System (HRMS)",
    desc: "Manage employee records, attendance, performance, and recruitment.",
  },
  {
    title: "Point of Sale (POS) System",
    desc: "Retail POS with billing, inventory, and reporting features.",
  },
  {
    title: "SaaS Admin Dashboard",
    desc: "Modern admin dashboard with analytics and subscription control.",
  },
];
