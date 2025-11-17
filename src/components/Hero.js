import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react';
import './Hero.css';

function Hero() {
  return (
    <section id="hero" className="hero">
      <img
        src={process.env.PUBLIC_URL + '/assest/stitch.png'}
        alt="decorative"
        className="hero-side-image"
        loading="lazy"
      />
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-subtitle">My Name is</p>
          <h1 className="hero-title">
            Vinitha R<span className="dot">.</span>
          </h1>
          <p className="hero-roles">
            Learner • Developer • Innovator
          </p>
          <p className="hero-tagline">
            we belive in ohana , every client matters:)
          </p>

          <div className="hero-links">
            <a
              href="https://github.com/Vinitharameshchand"
              target="_blank"
              rel="noopener noreferrer"
              className="link-button"
              title="GitHub"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/vinitha-r-75b82a291"
              target="_blank"
              rel="noopener noreferrer"
              className="link-button"
              title="LinkedIn"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:vinitharameshchand@gmail.com"
              className="link-button"
              title="Email"
            >
              <Mail size={20} />
              <span>Email</span>
            </a>
            <a
              href="https://x.com/vinitha101"
              target="_blank"
              rel="noopener noreferrer"
              className="link-button"
              title="Twitter"
            >
              <ExternalLink size={20} />
              <span>Twitter</span>
            </a>
          </div>

          {/* CTA removed per request */}
        </div>
      </div>

      <div className="scroll-indicator">
        <ChevronDown size={24} />
      </div>
    </section>
  );
}

export default Hero;
