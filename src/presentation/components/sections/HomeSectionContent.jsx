import React from "react";
import profileImage from "../../assets/p1.jpg";

export default function HomeSectionContent() {
  return (
    <div className="hero">
      <div className="hero-left">
        <p className="eyebrow">Software Engineer</p>
        <h1 className="hero-title">
          Hi, I’m <span className="accent">Md Zulhas</span>.
        </h1>
        <p className="hero-lead">
          I build clean, reliable, and scalable web applications with a focus on usability, clarity,
          and maintainable architecture.
        </p>
        <div className="hero-cta">
          <a className="btn primary" href="#contact">
            Contact Me
          </a>
          <a className="btn" href="#projects">
            View Projects
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="avatar">
          <img src={profileImage} alt="Profile" loading="lazy" />
        </div>
      </div>
    </div>
  );
}
