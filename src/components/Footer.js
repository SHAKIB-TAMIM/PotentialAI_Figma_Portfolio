import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="brand">
          <img src="images/logo.jpg" alt="Logo" className="logo" />
          <span className="brand-name"><b className="brand-name-m">M</b>umair</span>
        </div>

        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About Me</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
      </div>

      <div className="copyright">
        &copy;2023 <b className="footer-name"> Mumair</b> All Rights Reserved, Inc. 
      </div>
    </footer>
  );
}
