import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <p className="projects-label">WHAT I CREATE</p>

        <h2 className="projects-heading">
          My <span>Projects</span>
        </h2>

        <p className="projects-intro">
          Explore my web development ideas and projects
          as I continue learning and building.
        </p>

        <div className="projects-grid">
          <article className="project-card">
            <span className="project-number">01</span>
            <h3>Personal Portfolio</h3>
            <p className="project-description">
              A website to introduce myself and showcase my work.
            </p>
            <div className="project-tech">
              <span>React</span><span>CSS</span><span>JavaScript</span>
            </div>
            <a className="project-link" href="#contact">Get in touch ↗</a>
          </article>

          <article className="project-card">
            <span className="project-number">02</span>
            <h3>Restaurant Website</h3>
            <p className="project-description">
              A website concept for displaying a restaurant and its menu.
            </p>
            <div className="project-tech">
              <span>HTML</span><span>CSS</span><span>JavaScript</span>
            </div>
            <a className="project-link" href="#contact">Get in touch ↗</a>
          </article>

          <article className="project-card">
            <span className="project-number">03</span>
            <h3>Calculator App</h3>
            <p className="project-description">
              A calculator concept for everyday mathematical calculations.
            </p>
            <div className="project-tech">
              <span>HTML</span><span>CSS</span><span>JavaScript</span>
            </div>
            <a className="project-link" href="#contact">Get in touch ↗</a>
          </article>

          <article className="project-card">
            <span className="project-number">04</span>
            <h3>To-Do List</h3>
            <p className="project-description">
              A task-list concept for organising daily activities.
            </p>
            <div className="project-tech">
              <span>React</span><span>CSS</span>
            </div>
            <a className="project-link" href="#contact">Get in touch ↗</a>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Projects;