// App.js
import React, { useState } from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ImgHero from "./imagens/img-hero.avif";
import ImgProject1 from "./imagens/img-project-1.jpg";
import ImgProject2 from "./imagens/img-project-2.jpg";
import ImgProject3 from "./imagens/img-project-3.jpg";

// Header com menu hambúrguer responsivo
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header-container">
      <div className="header-logo">Ingrid</div>

      <button className="hamburger-button" onClick={toggleMenu}>
        <i
          className={isMenuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
        ></i>
      </button>

      <nav className={`header-navigation ${isMenuOpen ? "open" : ""}`}>
        <a href="#about" onClick={toggleMenu}>
          About Me
        </a>
        <a href="#experience" onClick={toggleMenu}>
          Experience
        </a>
        <a href="#education" onClick={toggleMenu}>
          Education
        </a>
        <a href="#projects" onClick={toggleMenu}>
          Projects
        </a>
        <a href="#contact" onClick={toggleMenu}>
          Contact
        </a>
      </nav>
    </header>
  );
}

// Hero
function Hero() {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${ImgHero})` }}
    >
      <h1 className="hero-title">AI Engineering Student & Front-End Dev</h1>
      <p className="hero-subtitle">
        Bridging AI innovation and modern web development.
      </p>
      <a href="#contact" className="hero-button">
        Let’s Work Together 🚀
      </a>
    </section>
  );
}

// InfoCard
function InfoCard({ title, subtitle, children, tags }) {
  return (
    <div className="info-card">
      {title && <h3 className="info-card-title">{title}</h3>}
      {subtitle && <p className="info-card-subtitle">{subtitle}</p>}
      {children}
      {tags && (
        <div className="info-card-tags">
          {tags.map((tag, index) => (
            <span className="info-card-tag" key={index}>
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

// Projects
function Projects() {
  const projectList = [
    {
      title: "Landing Page Portfolio",
      description: "Modern responsive portfolio website.",
      image: ImgProject1,
    },
    {
      title: "E-commerce UI",
      description: "Frontend of an online store built with React.",
      image: ImgProject2,
    },
    {
      title: "Dashboard Analytics",
      description: "Interactive dashboard using React + Chart.js.",
      image: ImgProject3,
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projectList.map((proj, index) => (
          <div className="project-card" key={index}>
            <img src={proj.image} alt={proj.title} className="project-img" />
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer id="contact" className="footer-container">
      <p className="footer-text">Available for new projects 🚀</p>
      <a href="mailto:ingrid.b.f@hotmail.com" className="footer-link">
        <i className="fa-solid fa-envelope"></i> ingrid.b.f@hotmail.com
      </a>
      <a href="tel:+5511964407606" className="footer-link">
        <i className="fa-solid fa-phone"></i> +55 11 00000-0000
      </a>
      <div className="footer-icons">
        <a
          href="https://github.com/IngridFerreira93"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/ingrid-bferreira/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      <p className="footer-signature">Designed & coded with ❤️ by Ingrid</p>
    </footer>
  );
}

// App Principal
export default function App() {
  return (
    <div>
      <Header />
      <Hero />

      <section id="about" className="section-container">
        <h2 className="section-title">About Me</h2>
        <InfoCard>
          <p>
            I have been working in technology for 10 years. I started as a
            technical support analyst, moving through several advertising
            agencies where I developed both technical and interpersonal skills.
            For the last 3 years, I have been working as a front-end developer
            in an agency, maintaining and updating a major client website. I
            enjoy the dynamic routine, constantly learning, and working with
            agile methodologies, closely following the development flow from UX
            to final delivery.
          </p>
        </InfoCard>
      </section>

      <section id="experience" className="section-container">
        <h2 className="section-title">Experience</h2>
        <InfoCard
          title="Advertising Agency (2021 - Present)"
          subtitle="Maintenance and evolution of a large client's website, focusing on HTML, CSS, JavaScript, and Agile methodologies."
          tags={["HTML", "CSS", "JavaScript", "Agile"]}
        />
        <InfoCard
          title="Technical Support Analyst (2015 - 2021)"
          subtitle="Experience with customer service, support, and infrastructure in several advertising agencies."
        />
      </section>

      <section id="education" className="section-container">
        <h2 className="section-title">Education</h2>

        <InfoCard
          title="Postgraduate in AI Engineering (2025 - in progress)"
          subtitle="Impacta"
          tags={["AI", "Machine Learning", "Deep Learning"]}
        />
        <InfoCard
          title="Santander Bootcamp 2024 - AI Fundamentals for Devs"
          subtitle="DIO + Santander"
        />
        <InfoCard
          title="Front-end Course with React (2021)"
          subtitle="Labenu"
          tags={["React", "HTML", "CSS", "JavaScript"]}
        />
        <InfoCard
          title="Bachelor in Computer Networks (2021)"
          subtitle="Universidade Cruzeiro do Sul"
        />
        <InfoCard title="Technical in IT (2014)" subtitle="SENAC" />
      </section>

      <Projects />
      <Footer />
    </div>
  );
}
