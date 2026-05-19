import React from 'react';
import './Experience.css';

function Experience() {
  const workExperience = [
    {
      title: 'Freelancer – BioD (Web Development)',
      meta: 'Sep 2025 – Present, Remote',
      details: [
        'Working on freelance projects that involve responsive website development for small businesses and NGOs.',
        'Designed and deployed web solutions using HTML, CSS, JavaScript, and React JS.',
        'Custom built dashboards and dynamic interfaces tailored to client requirements.',
        'Focused on delivering user-friendly, scalable, and visually appealing websites.'
      ],
      tags: ['HTML5', 'CSS3', 'JavaScript', 'React JS', 'AWS', 'Netlify']
    },
    {
      title: 'Intern — Software and App Development, Pinesphere Solutions Pvt. Ltd',
      meta: 'Mar 2025 – Apr 2025, Coimbatore, India',
      details: [
        'Full-stack development intern with exposure to UI/UX design and real-time app integration.',
        'Developed a To-Do mobile app using React Native and implemented user authentication with Firebase.',
        'Created responsive web layouts using HTML and CSS, and designed UI prototypes with Figma.',
        'Used Git and GitHub for version control and team collaboration.',
        'Integrated Firebase real-time database and authentication services for back-end functionality.',
        'Secured 2nd place in a company-hosted hackathon, demonstrating strong problem-solving and teamwork.'
      ],
      tags: ['React Native', 'Firebase', 'Figma', 'Git', 'HTML/CSS', 'UI/UX']
    },
    {
      title: 'Founder – The Plumber Guy (Startup Project)',
      meta: 'Feb 2025 – Present, Coimbatore, India',
      details: [
        'Initiated and currently developing an AI-integrated plumbing assistance platform aimed at connecting users with verified plumbers efficiently.',
        'Leading product design, UI/UX wireframes, and core app functionality using React Native and Firebase.',
        'Conducted user surveys, market research, and feature validation for customer-centric app design.',
        'Coordinated with a small team of developers and mentors to shape the MVP for launch readiness.',
        'Currently working on real-time service tracking, authentication system, and AI-based query assistant module.'
      ],
      tags: ['Startup', 'AI Integration', 'React Native', 'Firebase API', 'Figma', 'Product Design']
    }
  ];

  const volunteerExperience = [
    {
      title: 'Global Summit 2025 – Volunteer',
      meta: 'Coimbatore, India | Startup TN Corporation',
      details: [
        'Volunteered under the Startup TN Corporation team during the Global Summit 2025.',
        'Collaborated with corporate partners such as Zoho, Meta, Nvidia, HCL, PhonePe, Tally, and others to ensure smooth event coordination and workflow management.',
        'Assisted in managing startup booths, innovation showcases.',
        'Handled logistics, registration, and on-site technical assistance to maintain operational efficiency throughout the summit.',
        'Contributed to the success of the event by facilitating communication between startups, corporates, and organizing teams.'
      ],
      tags: ['Event Logistics', 'Startup TN', 'Zoho', 'Meta', 'Nvidia']
    }
  ];

  const rolesContributions = [
    {
      title: 'LazAI Code Ambassador',
      meta: 'Oct 2025 – Present, Remote',
      details: [
        'Represent and promote LazAI community goals through coding challenges, workshops, and outreach.',
        'I contribute my skills in the LazAI ecosystem.'
      ],
      tags: ['Community Outreach', 'Coding Challenges', 'Workshops']
    },
    {
      title: 'Contributor – Her DAO Project',
      meta: 'Nov 2025 – Present, Remote',
      details: [
        'Participated in decentralized autonomous organization initiatives focusing on community governance and technological development.',
        'I contribute my skills in the HER DAO ecosystem.'
      ],
      tags: ['Web3', 'Decentralized Governance', 'DAO']
    },
    {
      title: 'Contributor – Monad Blockchain Community',
      meta: 'Oct 2025 – Present, Remote',
      details: [
        'Engaged in learning and contributing to Monad blockchain fundamentals and smart contract development.',
        'Collaborated on projects involving Monad testnets and decentralized applications.',
        'I contribute my skills in the Monad ecosystem.'
      ],
      tags: ['Web3', 'Blockchain', 'Solidity', 'Smart Contracts']
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="section-container">
        <div className="section-header">
          <h2>Work Experience</h2>
          <div className="header-line"></div>
        </div>

        <div className="experience-list">
          {workExperience.map((exp, idx) => (
            <div key={idx} className="experience-block">
              <div className="exp-header">
                <h3 className="exp-title">{exp.title}</h3>
                <span className="exp-meta">{exp.meta}</span>
              </div>
              <ul className="exp-list">
                {exp.details.map((detail, dIdx) => (
                  <li key={dIdx}>{detail}</li>
                ))}
              </ul>
              <div className="exp-tags">
                {exp.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="exp-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="section-header minor">
          <h2>Volunteer Experience</h2>
          <div className="header-line"></div>
        </div>

        <div className="experience-list">
          {volunteerExperience.map((exp, idx) => (
            <div key={idx} className="experience-block">
              <div className="exp-header">
                <h3 className="exp-title">{exp.title}</h3>
                <span className="exp-meta">{exp.meta}</span>
              </div>
              <ul className="exp-list">
                {exp.details.map((detail, dIdx) => (
                  <li key={dIdx}>{detail}</li>
                ))}
              </ul>
              <div className="exp-tags">
                {exp.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="exp-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="section-header minor">
          <h2>Roles & Contributions</h2>
          <div className="header-line"></div>
        </div>

        <div className="experience-grid">
          {rolesContributions.map((exp, idx) => (
            <div key={idx} className="experience-block compact">
              <h3 className="exp-title">{exp.title}</h3>
              <p className="exp-meta">{exp.meta}</p>
              <ul className="exp-list">
                {exp.details.map((detail, dIdx) => (
                  <li key={dIdx}>{detail}</li>
                ))}
              </ul>
              <div className="exp-tags">
                {exp.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="exp-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;

