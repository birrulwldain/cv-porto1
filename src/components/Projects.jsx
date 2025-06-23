import React from 'react';
import '../styles/_projects.scss';

const Projects = () => {
  const portfolioItems = [
    { title: 'Photography', description: 'Capturing moments with artistic vision' },
    { title: 'Videography', description: 'Dynamic storytelling through video' },
    { title: 'Brand Design', description: 'Crafting unique visual identities' },
  ];

  return (
    <section id="portfolio" className="projects">
      <h2>Portfolio</h2>
      {portfolioItems.map((item, index) => (
        <div key={index} className="project-item">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Projects;