
import React from "react";
import "./Skill.css";

function Skill() {
  const skills = [
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "80%" },
    { name: "JavaScript", level: "65%" },
    { name: "React", level: "50%" },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <p className="skills-subtitle">WHAT I CAN DO</p>
        <h2 className="skills-title">
          My <span>Skills</span>
        </h2>

        <p className="skills-description">
          Here are the technologies I'm learning and using
          to build modern, responsive websites.
        </p>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-info">
                <h3>{skill.name}</h3>
                <span>{skill.level}</span>
              </div>

              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;
