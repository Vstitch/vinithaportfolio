import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'To-Do List Mobile App',
      tech: 'React Native + Firebase',
      description: 'Real-time cross-platform app with authentication and CRUD operations.',
      image: process.env.PUBLIC_URL + '/assest/todo.svg',
      github: 'https://github.com/Vinitharameshchand',
      demo: 'https://github.com/Vinitharameshchand',
    },
    {
      title: 'BioD Web Project',
      tech: 'React JS + Figma + AWS',
      description: 'Dynamic dashboard and responsive layout for NGOs.',
      image: process.env.PUBLIC_URL + '/assest/biod.svg',
      github: 'https://github.com/Vinitharameshchand',
      demo: 'https://github.com/Vinitharameshchand',
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
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} className="project-image" loading="lazy" />
                </div>
              )}
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-tech">{project.tech}</p>
                <p className="project-description">{project.description}</p>
              </div>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link secondary"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link primary"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

