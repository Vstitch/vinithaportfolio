import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p className="footer-text">
            Designed & built by Vinitha R
          </p>
          <div className="footer-links">
            <a href="https://github.com/Vinitharameshchand" target="_blank" rel="noopener noreferrer" title="GitHub">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/vinitha-r-75b82a291" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="mailto:vinitharameshchand@gmail.com" title="Email">
              <Mail size={20} />
            </a>
            <a href="https://x.com/vinitha101" target="_blank" rel="noopener noreferrer" title="Twitter">
              <Twitter size={20} />
            </a>
          </div>
        </div>
        <p className="footer-copyright">
          © {currentYear} Vinitha R. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
