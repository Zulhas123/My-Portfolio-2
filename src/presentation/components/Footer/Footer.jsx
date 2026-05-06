import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <div className="footer-subtitle">
            Md Zulhas © {new Date().getFullYear()} · All rights reserved
          </div>
        </div>

        <div className="footer-right">
          <a className="social" href="https://github.com/Zulhas123" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="social" href="https://www.linkedin.com/in/md-zulhas-mia-73087b220/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="social" href="https://twitter.com/" target="_blank" rel="noreferrer">
            X/Twitter
          </a>
          <a className="social" href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            YouTube
          </a>
        </div>
      </div>
    </footer>
  );
}

