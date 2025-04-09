import "../styles/_projects.scss";

function Projects() {
  const projects = [
    {
      title: "Personal Portfolio",
      description: "Website portofolio pribadi built with React & SCSS.",
      link: "#",
    },
    {
      title: "LaTeX Form Generator",
      description: "Form builder dengan preview PDF langsung.",
      link: "#",
    },
    {
      title: "Weather App",
      description: "Aplikasi cuaca realtime menggunakan OpenWeather API.",
      link: "#",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
