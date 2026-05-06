import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PortfolioPage from "./pages/PortfolioPage.jsx";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioPage initialSectionId="home" />} />

      {/* Route-per-menu */}
      <Route path="/home" element={<PortfolioPage initialSectionId="home" />} />
      <Route path="/about" element={<PortfolioPage initialSectionId="about" />} />
      <Route path="/services" element={<PortfolioPage initialSectionId="services" />} />
      <Route path="/projects" element={<PortfolioPage initialSectionId="projects" />} />
      <Route path="/expertise-area" element={<PortfolioPage initialSectionId="expertise-area" />} />
      <Route path="/experience" element={<PortfolioPage initialSectionId="experience" />} />
      <Route path="/professional-experience" element={<PortfolioPage initialSectionId="experience" />} />
      <Route path="/key-skills" element={<PortfolioPage initialSectionId="key-skills" />} />
      <Route path="/education" element={<PortfolioPage initialSectionId="education" />} />
      <Route path="/certifications" element={<PortfolioPage initialSectionId="certifications" />} />
      <Route path="/key-projects" element={<PortfolioPage initialSectionId="key-projects" />} />
      <Route path="/key-achievements" element={<PortfolioPage initialSectionId="key-achievements" />} />
      <Route
        path="/professional-profiles"
        element={<PortfolioPage initialSectionId="professional-profiles" />}
      />
      <Route path="/contact" element={<PortfolioPage initialSectionId="contact" />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

