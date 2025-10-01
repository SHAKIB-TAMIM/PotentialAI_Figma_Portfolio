import React from "react";

export default function Hero() {
  return (
    <section id="home" className="hero container">
      <div className="hero-left">
        <p className="intro">Hi I am</p>
        <h1 className="hero-title">
          <span className="name">Muhammad Umair</span>
          <br />
          <span className="role">
             UI &amp; UX <span className="designer">Designer</span>
          </span>
        </h1>
        <p className="hero-desc">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
           Aliquet donec morbi convallis pretium. Turpis tempus pharetra
        </p>
        <div className="hero-actions">
          <a className="btn primary" href="#projects">Hire Me</a>
        </div>
      </div>

       <div className="hero-right">
         <div className="portrait-wrapper">
            <div className="portrait">
              <img src="/images/circle.jpg" alt="circle" className="circle" />
              <img src="/images/profile.jpg" alt="man" className="man" />
              <img src="/images/rect.jpg" alt="overlay" className="overlay-rect" />
              
            </div>

    
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
        </div>


    </section>
  );
}
