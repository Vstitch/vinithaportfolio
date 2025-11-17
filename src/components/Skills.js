import React from 'react';
import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['Python', 'JavaScript', 'Solidity', 'MySQL'],
    },
    {
      category: 'Web Technologies',
      skills: ['HTML', 'CSS', 'React JS', 'React Native'],
    },
    {
      category: 'Web3 & Blockchain',
      skills: ['Web3.js', 'Ethereum', 'Smart Contracts', 'Solidity Development', 'Blockchain Fundamentals'],
    },
    {
      category: 'Tools & Platforms',
      skills: ['AWS', 'Netlify', 'Vercel', 'Figma', 'Canva', 'GitHub', 'Firebase API', 'Vibe Code (Windsurf)', 'Visual Studio'],
    },
    {
      category: 'Soft Skills',
      skills: ['Problem Solving', 'Team Collaboration', 'Adaptability', 'Communication', 'Learning Mindset'],
    },
    {
      category: 'Languages Known',
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
              <h3>{category.category}</h3>
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
