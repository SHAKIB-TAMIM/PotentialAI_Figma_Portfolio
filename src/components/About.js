import React from "react";

const SkillBar = ({ label, value }) => (
  <div className="skill">
    <div className="skill-label">{label}</div>
    <div className="skill-bar">
      <div className="skill-fill" style={{ width: `${value}%` }} />
    </div>
  </div>
);

export default function About() {
  return (
    <section id="about" className="about container">
      <div className="about-grid">
  <div className="about-image">
    <img src="/images/profile2.jpg" alt="About me portrait" className="about-portrait" />
    <img src="/images/rect.jpg" alt="Decorative rectangle" className="about-decor" />
  </div>

  <div className="about-content">
    <h2>About Me</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
       Aliquet donec morbi convallis pretium. Turpis tempus pharetra
    </p>

    <div className="skills">
      <SkillBar label="UX" value={90} />
      <SkillBar label="Website Design" value={80} />
      <SkillBar label="App Design" value={93} />
      <SkillBar label="Graphic Design" value={90} />
    </div>
  </div>
</div>

    </section>
  );
}
