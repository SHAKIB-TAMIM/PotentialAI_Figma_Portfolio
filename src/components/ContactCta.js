import React, { useState } from "react";

export default function ContactCta() {
  const [email, setEmail] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks! We'll contact you at ${email}`);
    setEmail("");
  };

  return (
    <section id="contact" className="contact-cta container">
      <h2>Let's Design Together</h2>
      <p className="section-sub">Interested in a project? Send your email and I'll reach out.</p>
      <form onSubmit={onSubmit} className="contact-form">
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="btn primary">Contact Me</button>
      </form>
    </section>
  );
}
