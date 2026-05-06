import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useNavigationItems } from "../../hooks/useNavigationItems.js";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { items: menu } = useNavigationItems();
  const effectiveMenu =
    menu && menu.length
      ? menu
      : [
          { id: "home", label: "Home", path: "/home" },
          { id: "contact", label: "Contact", path: "/contact" },
        ];

  const onMenuClick = (item) => {
    // Route changes (shows routing functionality) + closes mobile menu
    setOpen(false);
    navigate(item.path);
  };

  return (
    <header className="header">
      <div className="header-inner">
        <div className="brand" onClick={() => navigate("/home")} role="button" tabIndex={0}>
          <div className="logo">MP</div>
          <div className="brand-text">
            <div className="brand-title">Portfolio</div>
            {/* <div className="brand-subtitle">Frontend · React · UI</div> */}
          </div>
        </div>

        <button className="menu-btn" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          <span className="menu-lines" />
        </button>

        <nav className={`nav ${open ? "open" : ""}`}>
          {effectiveMenu.map((m) => (
            <NavLink
              key={m.path}
              to={m.path}
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              onClick={() => onMenuClick(m)}
            >
              {m.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
