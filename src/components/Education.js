import React from 'react';
import './Education.css';

function Education() {
  const education = [
    {
      institution: 'PSGR Krishnammal College',
      degree: 'B.Com (Computer Applications)',
      period: '2023–2026',
    },
    {
      institution: 'Chinmaya Vidyalaya',
      degree: 'Computer Applications',
      period: '2021–2023',
    },
  ];

  return (
    <section id="education" className="education">
      <div className="section-container">
        <div className="section-header">
          <h2>Education</h2>
          <div className="header-line"></div>
        </div>

        <div className="education-timeline">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-card-header">
                <h3>{edu.institution}</h3>
                <span className="period">{edu.period}</span>
              </div>
              <p className="degree">{edu.degree}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;

