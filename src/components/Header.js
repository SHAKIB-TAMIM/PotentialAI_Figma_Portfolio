import React from "react";

export default function Header({ toggleTheme, darkMode }) {
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="brand">
          <img src="images/logo.jpg" alt="Logo" className="logo" />
          <span className="brand-name">Mumair</span>
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About Me</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <a className="btn cv" href="/#">Download CV</a>
          <button 
            onClick={toggleTheme} 
            style={{
              padding: "8px 12px",
              borderRadius: "6px",
              border: "1px solid var(--color-primary)",
              background: darkMode ? "#333" : "#fff",
              color: darkMode ? "#fff" : "#111",
              cursor: "pointer"
            }}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </header>
  );
}
