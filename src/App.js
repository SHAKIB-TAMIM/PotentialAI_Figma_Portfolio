import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import ContactCta from "./components/ContactCta";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className={`site ${darkMode ? "dark-mode" : ""}`}>
      <Header toggleTheme={toggleTheme} darkMode={darkMode} />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <ContactCta />
      </main>
      <Footer />
    </div>
  );
}

export default App;
