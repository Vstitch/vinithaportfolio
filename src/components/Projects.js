import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'To-Do List Mobile App',
      tech: 'React Native + Firebase',
      description: 'Real-time cross-platform app with authentication and CRUD operations.',
      image: process.env.PUBLIC_URL + '/assest/todo.svg',
    },
    {
      title: 'BioD Web Project',
      tech: 'React JS + Figma + AWS',
      description: 'Dynamic dashboard and responsive layout for NGOs.',
      image: process.env.PUBLIC_URL + '/assest/biod.svg',
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <div className="section-header">
          <h2>Projects</h2>
          <div className="header-line"></div>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              {project.image && (
                <img src={project.image} alt={project.title} className="project-image" loading="lazy" />
              )}
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-tech">{project.tech}</p>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
