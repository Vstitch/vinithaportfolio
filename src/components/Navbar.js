import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

function Navbar({ scrolled }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'achievements', 'education', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset scroll to account for fixed navbar height
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
            Vinitha R<span className="dot">🎀</span>
          </a>
        </div>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <button
            className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`}
            onClick={() => scrollToSection('hero')}
          >
            Home
          </button>
          <button
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => scrollToSection('about')}
          >
            About
          </button>
          <button
            className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
            onClick={() => scrollToSection('experience')}
          >
            Work Experience
          </button>
          <button
            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </button>
          <button
            className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
            onClick={() => scrollToSection('skills')}
          >
            Skills
          </button>
          <button
            className={`nav-link ${activeSection === 'achievements' ? 'active' : ''}`}
            onClick={() => scrollToSection('achievements')}
          >
            Achievements
          </button>
          <button
            className={`nav-link ${activeSection === 'education' ? 'active' : ''}`}
            onClick={() => scrollToSection('education')}
          >
            Education
          </button>
          <button
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={() => scrollToSection('contact')}
          >
            Contact Me 🎀
          </button>
        </div>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

