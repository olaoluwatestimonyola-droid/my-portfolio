
import React from "react";
import "./Hero.css";

import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="intro">Hello, I'm</p>

        <h1>
          Olaoluwa
          <br />
          Olasubomi
        </h1>

        <h2>
          And I'm a <span>Website Developer</span>
        </h2>

        <p className="description">
          I specialize in building clean, responsive websites
          and engaging user interfaces with modern frontend
          tools like HTML, CSS, JavaScript and React.
        </p>

        <a href="#contact" className="hero-button">
          Contact Me
        </a>
      </div>

      <div className="hero-image">
        <img src="/my-picture.jpg" alt="Olaoluwa Olasubomi" />
      </div>
    </section>
  );
}

export default Hero;