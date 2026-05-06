import React from "react";
import "./ProfessionalProfiles.css";

export default function ProfessionalProfiles() {
  return (
    <div className="professional-profiles">
      <div className="profile-group">
        <h4>Professional Profiles</h4>
        <ul>
          <li>
            <strong>LinkedIn:</strong>{" "}
            <a href="https://linkedin.com/in/zulhas-uddin-73087b220" target="_blank" rel="noreferrer">
              linkedin.com/in/zulhas-uddin-73087b220
            </a>
          </li>
          <li>
            <strong>GitHub:</strong>{" "}
            <a href="https://github.com/Zulhas123" target="_blank" rel="noreferrer">
              github.com/Zulhas123
            </a>
          </li>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:mdzulhasuddin95@gmail.com">
              mdzulhasuddin95@gmail.com
            </a>
          </li>
          <li>
            <strong>Portfolio:</strong>{" "}
            <a href="https://zulhasprotfolio.netlify.app" target="_blank" rel="noreferrer">
              zulhasprotfolio.netlify.app
            </a>
          </li>
        </ul>
      </div>

      <div className="profile-group">
        <h4>Problem-Solving & Coding Practice</h4>
        <ul>
          <li>
            <strong>Codeforces:</strong>{" "}
            <a href="https://codeforces.com/profile/Zulhas" target="_blank" rel="noreferrer">
              codeforces.com/profile/Zulhas
            </a>
          </li>
          <li>
            <strong>LeetCode:</strong>{" "}
            <a href="https://leetcode.com/u/Zulhas123" target="_blank" rel="noreferrer">
              leetcode.com/u/Zulhas123
            </a>
          </li>
          <li>
            <strong>Edabit:</strong>{" "}
            <a href="https://edabit.com/challenges" target="_blank" rel="noreferrer">
              edabit.com/challenges
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
