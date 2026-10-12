
import React from 'react';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import './App.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  return (

    <div className="portfolio">

      {/* NAVIGATION */}
      <header className="navbar" data-aos="fade-down">
        <a className="logo" href="#home">
          DEVTESTI
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HOME SECTION */}
      <section className="hero" id="home">
        <div className="hero-content" data-aos="fade-right">
          <p className="eyebrow">HELLO, I'M</p>

          <h1>
            Olaoluwa <span>Testimony</span>
            <br />
            Olasubomi
          </h1>

          <h2>Frontend Developer</h2>

          <p className="intro">
            I build modern, beautiful and responsive
            websites using HTML, CSS, JavaScript and React.
          </p>

          <a className="button" href="#projects">
            Explore My Work →
          </a>
        </div>

        <div className="photo-frame" data-aos="fade-left">
          <img
            src="/images/profile.png"
            alt="Olaoluwa Testimony"
            className="profile-photo"
          />
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <Projects />

      {/* SKILLS SECTION */}
     <section className="section" id="skills" data-aos="fade-up">
        <p className="eyebrow">MY TOOLKIT</p>

        <h2>
          My <span>Skills</span>
        </h2>

       <div className="skills-list" data-aos="zoom-in">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Responsive Design</span>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <Contact />

      {/* FOOTER */}
     <footer data-aos="fade-up">
        © 2026 Olaoluwa Testimony Olasubomi. Built with 💙
      </footer>

    </div>
  );
}

export default App;
