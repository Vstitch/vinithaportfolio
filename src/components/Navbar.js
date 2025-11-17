import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

function Navbar({ scrolled }) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#hero" onClick={() => scrollToSection('hero')}>
            Vinitha R
          </a>
        </div>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <button
            className="nav-link"
            onClick={() => scrollToSection('hero')}
          >
            Home
          </button>
          <button
            className="nav-link"
            onClick={() => scrollToSection('about')}
          >
            About
          </button>
          <button
            className="nav-link"
            onClick={() => scrollToSection('experience')}
          >
            Work Experience
          </button>
          <button
            className="nav-link"
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </button>
          <button
            className="nav-link"
            onClick={() => scrollToSection('skills')}
          >
            Skills
          </button>
          <button
            className="nav-link"
            onClick={() => scrollToSection('achievements')}
          >
            Achievements
          </button>
          <button
            className="nav-link"
            onClick={() => scrollToSection('education')}
          >
            Education
          </button>
          <button
            className="nav-link"
            onClick={() => scrollToSection('contact')}
          >
            contract mee :)
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
