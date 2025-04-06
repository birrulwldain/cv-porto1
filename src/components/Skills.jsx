import "../styles/_skills.scss";

function Skills() {
  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Node.js",
    "SCSS", "Git", "Figma", "Tailwind", "Vite"
  ];

  return (
    <section className="skills" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
