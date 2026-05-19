import React from 'react';
import { Code, Globe, Cpu, Terminal, Sparkles, Languages } from 'lucide-react';
import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      category: 'Programming Languages',
      icon: <Code size={20} className="skill-cat-icon" />,
      skills: ['Python', 'JavaScript', 'Solidity', 'MySQL'],
    },
    {
      category: 'Web Technologies',
      icon: <Globe size={20} className="skill-cat-icon" />,
      skills: ['HTML', 'CSS', 'React JS', 'React Native'],
    },
    {
      category: 'Web3 & Blockchain',
      icon: <Cpu size={20} className="skill-cat-icon" />,
      skills: ['Web3.js', 'Ethereum', 'Smart Contracts', 'Solidity Development', 'Blockchain Fundamentals'],
    },
    {
      category: 'Tools & Platforms',
      icon: <Terminal size={20} className="skill-cat-icon" />,
      skills: ['AWS', 'Netlify', 'Vercel', 'Figma', 'Canva', 'GitHub', 'Firebase API', 'Vibe Code', 'Visual Studio'],
    },
    {
      category: 'Soft Skills',
      icon: <Sparkles size={20} className="skill-cat-icon" />,
      skills: ['Problem Solving', 'Team Collaboration', 'Adaptability', 'Communication', 'Learning Mindset'],
    },
    {
      category: 'Languages Known',
      icon: <Languages size={20} className="skill-cat-icon" />,
      skills: ['English', 'Hindi', 'Tamil', 'French (learning)'],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <div className="section-header">
          <h2>Skills Summary</h2>
          <div className="header-line"></div>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="skill-category-header">
                {category.icon}
                <h3>{category.category}</h3>
              </div>
              <div className="skill-tags">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

