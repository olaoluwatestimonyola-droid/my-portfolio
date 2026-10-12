import React from 'react';
import './App.css';

const projects = [
  {
    number: '01',
    title: 'Personal Portfolio',
    description: 'A website to introduce myself and showcase my work.',
    skills: ['React', 'CSS', 'JavaScript'],
  },
  {
    number: '02',
    title: 'Restaurant Website',
    description: 'A website concept for displaying a restaurant and its menu.',
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    number: '03',
    title: 'Calculator App',
    description: 'A calculator concept for everyday mathematical calculations.',
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    number: '04',
    title: 'To-Do List',
    description: 'A task-list concept for organising daily activities.',
    skills: ['React', 'CSS'],
  },
];

function Projects() {
  return (
    <section
      className="projects-section"
      id="projects"
      data-aos="fade-up"
    >
      <div className="projects-heading">
        <p className="eyebrow">WHAT I CREATE</p>
        <h2>My <span>Projects</span></h2>
        <p>
          Explore my web development ideas and projects
          as I continue learning and building.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <span className="project-number">{project.number}</span>

            <h3>{project.title}</h3>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-skills">
              {project.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>

            <a className="project-link" href="#contact">
              Get in touch <span>↗</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;