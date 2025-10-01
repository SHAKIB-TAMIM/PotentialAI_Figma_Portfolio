import React from "react";

const ProjectCard = ({ title, category, thumb }) => (
  <div className="project-card">
    <div className="project-thumb">
      <img src={thumb} alt={title} />
    </div>
    <div className="project-meta">
      <div className="project-cat">{category}</div>
      <h4 className="project-title">{title}</h4>
    </div>
  </div>
);

export default function Projects() {
  
  const projects = [
    { title: "AirCalling Landing Page Design", category: "Web Design", thumb: "/images/Group 25.jpg" },
    { title: "Business Landing Page Design", category: "Web Design", thumb: "/images/Group 26.jpg" },
    { title: "Ecom Web Page Design", category: "Web Design", thumb: "/images/Group 27.jpg" },
  ];

  return (
    <section id="projects" className="projects container">
      <h2>My Projects</h2>
      <p className="section-sub">Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus.
         Phasellus consequat urna tellus</p>

      <div className="title">
         
         <a className="btn title" href="#all">All</a>
         <a className="btn title " href="#ui/ux">UI/UX</a>
         <a className="btn primary" href="#webdesign">Web Design</a>
         <a className="btn title" href="#appdesign">App Design</a>
         <a className="btn title" href="#graphicdesign">Graphic Design</a>
      </div>

      <div className="projects-grid">
        {projects.map((p, idx) => (
          <ProjectCard key={idx} {...p} />
        ))}
      </div>
    </section>
  );
}
