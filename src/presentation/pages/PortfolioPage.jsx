import React, { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Section from "../components/Section/Section.jsx";
import Services from "../components/Services/Services.jsx";
import Projects from "../components/Projects/Projects.jsx";
import Expertise from "../components/Expertise/Expertise.jsx";
import Experience from "../components/Experience/Experience.jsx";
import KeySkills from "../components/KeySkills/KeySkills.jsx";
import Education from "../components/Education/Education.jsx";
import Certifications from "../components/Certifications/Certifications.jsx";
import KeyProjects from "../components/KeyProjects/KeyProjects.jsx";
import KeyAchievements from "../components/KeyAchievements/KeyAchievements.jsx";
import ProfessionalProfiles from "../components/ProfessionalProfiles/ProfessionalProfiles.jsx";
import HomeSectionContent from "../components/sections/HomeSectionContent.jsx";
import AboutSectionContent from "../components/sections/AboutSectionContent.jsx";
import ContactSectionContent from "../components/sections/ContactSectionContent.jsx";
import { usePortfolioSections } from "../hooks/usePortfolioSections.js";

const CONTENT_BY_KEY = {
  home: HomeSectionContent,
  about: AboutSectionContent,
  services: Services,
  projects: Projects,
  expertise: Expertise,
  experience: Experience,
  keySkills: KeySkills,
  education: Education,
  certifications: Certifications,
  keyProjects: KeyProjects,
  keyAchievements: KeyAchievements,
  professionalProfiles: ProfessionalProfiles,
  contact: ContactSectionContent,
};

export default function PortfolioPage({ initialSectionId = "home" }) {
  const location = useLocation();
  const { sections, status, error } = usePortfolioSections();

  const resolvedSections = useMemo(() => {
    return sections.map((s) => {
      const Content = CONTENT_BY_KEY[s.contentKey];
      return { ...s, Content };
    });
  }, [sections]);

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
        {status === "loading" ? (
          <Section id="loading" title="Loading" subtitle="Preparing content...">
            <div className="card">Loading sections…</div>
          </Section>
        ) : null}

        {status === "error" ? (
          <Section id="error" title="Something went wrong" subtitle="Please try again">
            <div className="card">{String(error?.message || error || "Unknown error")}</div>
          </Section>
        ) : null}

        {status === "success"
          ? resolvedSections.map((s) => (
              <Section key={s.id} id={s.id} title={s.title} subtitle={s.subtitle}>
                {s.Content ? <s.Content /> : null}
              </Section>
            ))
          : null}
      </main>
      <Footer />
    </div>
  );
}
