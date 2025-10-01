import React from "react";

const Card = ({ title, text, icon }) => (
  <div className="service-card">
    <div className="service-icon">
      <img src={icon} alt={title} className="icon-img" />
    </div>
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
);

export default function Services() {
  return (
    <section id="services" className="services container">
      <h2>Services</h2>
      <p className="section-sub">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
         Aliquet donec morbi convallis pretium</p>

      <div className="services-grid">
        <Card 
          title="UI/UX" 
          text="Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum" 
          icon="/images/ux.jpg" 
        />
        <Card 
          title="Web Design" 
          text="Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum" 
          icon="/images/web.jpg" 
        />
        <Card 
          title="App Design" 
          text="Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum" 
          icon="/images/App.jpg" 
        />
        <Card 
          title="Graphic Design" 
          text="Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum" 
          icon="/images/graphic.jpg" 
        />
      </div>
    </section>
  );
}
