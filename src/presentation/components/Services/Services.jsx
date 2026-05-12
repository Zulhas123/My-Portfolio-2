import React from "react";
import "./Services.css";

export default function Services() {
  return (
    <div className="services">
      <div className="max-width">
        <div className="border">
          <h2 className="title">My Services</h2>
        </div>

        <div className="serv-grid">
          {services.map((item, index) => (
            <div className="card" key={index}>
              <div className="box">
                <i className={item.icon}></i>
                <div className="text">{item.title}</div>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const services = [
  {
    icon: "fas fa-laptop-code",
    title: "Website Development",
    desc: "We build fast, responsive, and SEO-friendly websites that help your business grow and convert visitors into customers.",
  },
  {
    icon: "fas fa-shopping-cart",
    title: "E-Commerce Solutions",
    desc: "Custom online stores with secure payment gateways, product management, and smooth checkout experience.",
  },
  {
    icon: "fas fa-code",
    title: "Custom Web Applications",
    desc: "Tailor-made web applications designed to automate your business processes and improve efficiency.",
  },
  {
    icon: "fas fa-pen-nib",
    title: "UI/UX Design",
    desc: "User-centered designs that create engaging experiences and increase customer satisfaction.",
  },
  {
    icon: "fas fa-search",
    title: "SEO & Digital Marketing",
    desc: "Grow your online visibility with SEO, social media marketing, and paid advertising campaigns.",
  },
  {
    icon: "fas fa-headset",
    title: "Support & Maintenance",
    desc: "Ongoing updates, backups, bug fixes, and performance monitoring to keep your system running smoothly.",
  },
  {
    icon: "fas fa-cloud",
    title: "Cloud Solutions",
    desc: "Scalable cloud deployment, migration, and optimization using AWS, Azure, or Google Cloud.",
  },
  {
    icon: "fas fa-mobile-alt",
    title: "Mobile App Development",
    desc: "High-performance Android and iOS apps using modern frameworks and native technologies.",
  },
  {
    icon: "fas fa-shield-alt",
    title: "Cybersecurity",
    desc: "Website security audits, vulnerability testing, and protection against cyber threats.",
  },
  {
    icon: "fas fa-university",
    title: "Enterprise & Government Solutions",
    desc: "Secure and scalable portals for enterprises, organizations, and government institutions.",
  },
  {
    icon: "fas fa-robot",
    title: "AI & Automation",
    desc: "AI chatbots, automation tools, and analytics systems to boost productivity.",
  },
  {
    icon: "fas fa-cogs",
    title: "ERP & Business Systems",
    desc: "Custom ERP solutions for HR, accounting, inventory, and operations.",
  },
  {
    icon: "fas fa-users",
    title: "CRM Development",
    desc: "Customer relationship management systems to track leads, sales, and customers.",
  },
  {
    icon: "fas fa-calendar-check",
    title: "Booking & Appointment Systems",
    desc: "Online scheduling systems for clinics, salons, consultants, and service businesses.",
  },
  {
    icon: "fas fa-layer-group",
    title: "SaaS Product Development",
    desc: "End-to-end SaaS product design, development, and deployment.",
  },
  {
    icon: "fas fa-plug",
    title: "API Integration",
    desc: "Payment gateways, SMS, email, maps, and third-party service integrations.",
  },
  {
    icon: "fas fa-tachometer-alt",
    title: "Performance Optimization",
    desc: "Speed optimization, code refactoring, and server performance improvements.",
  },
  {
    icon: "fas fa-sync-alt",
    title: "Website Redesign & Modernization",
    desc: "Upgrade outdated websites with a modern design, improved UX, better performance, and mobile responsiveness.",
  },
   {
    icon: "fas fa-laptop-code",
    title: "Business Landing Page",
    desc: "Create modern, responsive, and high-converting landing pages designed to showcase your business and attract more customers.",
  },
  {
    icon: "fab fa-facebook",
    title: "Facebook Page Optimization",
    desc: "Optimize your Facebook page with professional branding, engaging content setup, and improved visibility to attract and retain customers.",
  },
];
