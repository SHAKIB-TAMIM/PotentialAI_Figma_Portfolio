import React from "react";

const TestimonialCard = ({ text, name, role, avatar }) => (
  <div className="testimonial-card">
    <img src={avatar} alt={name} className="avatar-large" />
    <div className="testimonial-content">
      <p className="quote">{text}</p>
      <div className="testimonial-footer">
        <div>
          <div className="testimonial-name">{name}</div>
          <div className="testimonial-role">{role}</div>
        </div>
      </div>
    </div>
  </div>
);

export default function Testimonials() {
  const list = [
    {
      text: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
      name: "Name",
      role: "CEO",
      avatar: "/images/ceo.jpg",
    },
    {
      text: "Great to work with, delivered high-fidelity designs quickly and professionally. I highly recommend their services to anyone looking for quality work.",
      name: "Alex Smith",
      role: "Founder, TechCo",
      avatar: "/images/ceo2.jpg",
    },
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);
  const currentTestimonial = list[activeIndex];

  return (
    <section id="testimonials" className="testimonials container">
      <h2>Testimonials</h2>
      <p className="section-sub">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium
      </p>

      <div className="testimonials-row">
        <div className="side-text left">
          {list[(activeIndex - 1 + list.length) % list.length].text.slice(0, 50)}...
        </div>

        <div className="testimonial-wrapper">
          <TestimonialCard {...currentTestimonial} />
        </div>

        <img
          src={list[(activeIndex + 1) % list.length].avatar}
          alt="Next Testimonial Avatar"
          className="side-avatar right"
        />
      </div>

      <div className="pagination-dots">
        {list.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}
