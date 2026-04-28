import React, { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Section from "../components/Section/Section.jsx";
import Services from "../components/Services/Services";
import Projects from "../components/Projects/Projects";
import Expertise from "../components/Expertise/Expertise";
import Experience from "../components/Experience/Experience";
import KeySkills from "../components/KeySkills/KeySkills";
import Education from "../components/Education/Education";
import Certifications from "../components/Certifications/Certifications";
import KeyProjects from "../components/KeyProjects/KeyProjects";
import KeyAchievements from "../components/KeyAchievements/KeyAchievements";
import ProfessionalProfiles from "../components/ProfessionalProfiles/ProfessionalProfiles";



export default function PortfolioPage({ initialSectionId = "home" }) {
  const location = useLocation();

  const sections = useMemo(
    () => [
      {
        id: "home",
        title: "Home",
        subtitle: `“Turning ideas into digital experiences that inspire and connect.”
        “Crafting elegant solutions through design, code, and creativity.”
        “I combine creativity and technology to create solutions that matter.”`,
        content: (
            <>
            <p>
                Hi, I’m <strong>Md Zulhas</strong> — a software professional focused on building clean,
                reliable, and scalable web applications. I specialize in creating modern, responsive, 
                and user-friendly digital experiences.
            </p>
            <p>
                Whether it’s designing sleek interfaces, developing robust functionality, or optimizing 
                performance, I combine creativity and technology to deliver solutions that truly make an impact.
            </p>
            <div className="hero-cta">
                <a className="btn primary" href="#contact">
                Contact Me
                </a>
                <a className="btn" href="#projects">
                View Projects
                </a>
            </div>
            </>
        ),
        },

      {
        id: "about",
        title: "About",
        subtitle: "Quick introduction",
        content: (
          <>
            <p>
              Passionate and results-driven Software Engineer with hands-on experience in developing
              and maintaining scalable .NET-based applications. Committed to delivering innovative,
              high-quality software solutions aligned with business goals. Strong leadership, problemsolving, and collaborative skills, with a growing focus on project management and team
              coordination for organizational success.
            </p>
            <ul className="bullets">
            <li>Strong in React, UI architecture, and API integration</li>
            <li>Focus on performance, accessibility, and maintainable code</li>
            <li>Comfortable working with teams and stakeholders</li>
            <li>Experience with responsive and mobile-first design</li>
            <li>Knowledge of modern state management (Redux, Context API, Zustand)</li>
            <li>Familiar with version control and collaboration (Git, GitHub, GitLab)</li>
            <li>Understanding of backend basics (Node.js, Express, REST APIs)</li>
            </ul>
          </>
        ),
      },
      {
        id: "services",
        title: "Services",
        subtitle: "How I can help",
        content: <Services />,
      },
      {
        id: "projects",
        title: "Projects",
        subtitle: "MY Developed Projects",
        content: <Projects />,
      },
      {
        id: "expertise-area",
        title: "Expertise Area",
        subtitle: "My Expertized Areas and Tools",
        content: <Expertise />,
      },

     {
        id: "experience",
        title: "Professional Experience",
        subtitle: "My career journey so far",
        content: <Experience />,
      },
     {
        id: "key-skills",
        title: "Key Skills",
        subtitle: "Technical expertise, architecture, and professional strengths",
        content: <KeySkills />,
      },

      {
        id: "professional-experience",
        title: "Professional Experience",
        subtitle: "My career journey so far",
        content: <Experience />,
      },
      {
        id: "education",
        title: "Education",
        subtitle: "Academic qualifications and achievements",
        content: <Education />,
      },
      {
        id: "certifications",
        title: "Certifications",
        subtitle: "Professional certifications and technical credentials",
        content: <Certifications />,
      },
      {
        id: "key-projects",
        title: "Key Projects",
        subtitle: "Major enterprise and business solutions delivered",
        content: <KeyProjects />,
      },
      {
        id: "key-achievements",
        title: "Key Achievements",
        subtitle: "Professional milestones and impact delivered",
        content: <KeyAchievements />,
      },
      {
        id: "professional-profiles",
        title: "Professional Profiles",
        subtitle: "Professional presence and coding practice platforms",
        content: <ProfessionalProfiles />,
      },

      {
        id: "contact",
        title: "Contact",
        subtitle: "Let’s connect",
        content: (
          <div className="contact-grid">
            <div className="card">
              <h4>Contact Details</h4>
              <p className="muted">Email</p>
              <p>mdzulhasuddin95@email.com</p>
              <p className="muted" style={{ marginTop: 12 }}>
                Location
              </p>
              <p>Dhaka, Bangladesh</p>
            </div>

            <div className="card">
              <h4>Message Me</h4>
              {/* Basic functionality: mailto submit */}
              <form
                className="contact-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const name = form.name.value.trim();
                  const email = form.email.value.trim();
                  const message = form.message.value.trim();

                  const subject = encodeURIComponent(`Portfolio contact from ${name || "Someone"}`);
                  const body = encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`);
                  window.location.href = `mailto:yourname@email.com?subject=${subject}&body=${body}`;
                }}
              >
                <label>
                  Name
                  <input name="name" placeholder="Your name" />
                </label>
                <label>
                  Email
                  <input name="email" type="email" placeholder="you@email.com" />
                </label>
                <label>
                  Message
                  <textarea name="message" rows="4" placeholder="Write your message..." />
                </label>
                <button className="btn primary" type="submit">
                  Send
                </button>
              </form>
            </div>
          </div>
        ),
      },
    ],
    []
  );

  // Scroll behavior:
  // - If URL has #hash, scroll there
  // - Else if initialSectionId provided via route, scroll there
  useEffect(() => {
    const idFromHash = (location.hash || "").replace("#", "").trim();
    const targetId = idFromHash || initialSectionId || "home";

    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.hash, initialSectionId]);

  return (
    <div className="app-shell">
      <Header />
      <main className="content">
        {sections.map((s) => (
          <Section key={s.id} id={s.id} title={s.title} subtitle={s.subtitle}>
            {s.content}
          </Section>
        ))}
      </main>
      <Footer />
    </div>
  );
}
