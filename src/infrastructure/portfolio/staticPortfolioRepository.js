/**
 * Infrastructure: static in-memory data source for the portfolio.
 */

/**
 * @typedef {Object} PortfolioSection
 * @property {string} id
 * @property {string} title
 * @property {string} subtitle
 * @property {string} contentKey
 */

import { createPortfolioSection } from "../../domain/portfolio/portfolioSection.js";

/** @type {PortfolioSection[]} */
const SECTIONS = [
  createPortfolioSection({
    id: "home",
    title: "Home",
    subtitle:
      "“Turning ideas into digital experiences that inspire and connect.”\n“Crafting elegant solutions through design, code, and creativity.”\n“I combine creativity and technology to create solutions that matter.”",
    contentKey: "home",
  }),
  createPortfolioSection({
    id: "about",
    title: "About",
    subtitle: "Quick introduction",
    contentKey: "about",
  }),
  createPortfolioSection({
    id: "services",
    title: "Services",
    subtitle: "How I can help",
    contentKey: "services",
  }),
  createPortfolioSection({
    id: "projects",
    title: "Projects",
    subtitle: "My developed projects",
    contentKey: "projects",
  }),
  createPortfolioSection({
    id: "expertise-area",
    title: "Expertise Area",
    subtitle: "My expertise areas and tools",
    contentKey: "expertise",
  }),
  createPortfolioSection({
    id: "experience",
    title: "Professional Experience",
    subtitle: "My career journey so far",
    contentKey: "experience",
  }),
  createPortfolioSection({
    id: "key-skills",
    title: "Key Skills",
    subtitle: "Technical expertise, architecture, and professional strengths",
    contentKey: "keySkills",
  }),
  createPortfolioSection({
    id: "education",
    title: "Education",
    subtitle: "Academic qualifications and achievements",
    contentKey: "education",
  }),
  createPortfolioSection({
    id: "certifications",
    title: "Certifications",
    subtitle: "Professional certifications and technical credentials",
    contentKey: "certifications",
  }),
  createPortfolioSection({
    id: "key-projects",
    title: "Key Projects",
    subtitle: "Major enterprise and business solutions delivered",
    contentKey: "keyProjects",
  }),
  createPortfolioSection({
    id: "key-achievements",
    title: "Key Achievements",
    subtitle: "Professional milestones and impact delivered",
    contentKey: "keyAchievements",
  }),
  createPortfolioSection({
    id: "professional-profiles",
    title: "Professional Profiles",
    subtitle: "Professional presence and coding practice platforms",
    contentKey: "professionalProfiles",
  }),
  createPortfolioSection({
    id: "contact",
    title: "Contact",
    subtitle: "Let’s connect",
    contentKey: "contact",
  }),
];

export function createStaticPortfolioRepository() {
  return {
    async getSections() {
      return SECTIONS;
    },
  };
}
