import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="section-container">
        <div className="section-header">
          <h2>Work Experience</h2>
          <div className="header-line"></div>
        </div>

        <div className="experience-block">
          <h3 className="exp-title">Freelancer – BioD (Web Development)</h3>
          <p className="exp-meta">Sep 2025 – Present, Remote</p>
          <ul className="exp-list">
            <li>Working on freelance projects that involve responsive website development for small businesses and NGOs.</li>
            <li>Designed and deployed web solutions using HTML, CSS, JavaScript, and React JS.</li>
            <li>Custom built dashboards and dynamic interfaces tailored to client requirements.</li>
            <li>Focused on delivering user-friendly, scalable, and visually appealing websites.</li>
          </ul>
        </div>

        <div className="experience-block">
          <h3 className="exp-title">Intern — Software and App Development, Pinesphere Solutions Pvt. Ltd</h3>
          <p className="exp-meta">Mar 2025 – Apr 2025, Coimbatore, India</p>
          <ul className="exp-list">
            <li>Full-stack development intern with exposure to UI/UX design and real-time app integration.</li>
            <li>Developed a To-Do mobile app using React Native and implemented user authentication with Firebase.</li>
            <li>Created responsive web layouts using HTML and CSS, and designed UI prototypes with Figma.</li>
            <li>Used Git and GitHub for version control and team collaboration.</li>
            <li>Integrated Firebase real-time database and authentication services for back-end functionality.</li>
            <li>Secured 2nd place in a company-hosted hackathon, demonstrating strong problem-solving and teamwork.</li>
          </ul>
        </div>

        <div className="experience-block">
          <h3 className="exp-title">Founder – The Plumber Guy (Startup Project)</h3>
          <p className="exp-meta">Feb 2025 – Present, Coimbatore, India</p>
          <ul className="exp-list">
            <li>Initiated and currently developing an AI-integrated plumbing assistance platform aimed at connecting users with verified plumbers efficiently.</li>
            <li>Leading product design, UI/UX wireframes, and core app functionality using React Native and Firebase.</li>
            <li>Conducted user surveys, market research, and feature validation for customer-centric app design.</li>
            <li>Coordinated with a small team of developers and mentors to shape the MVP for launch readiness.</li>
            <li>Currently working on real-time service tracking, authentication system, and AI-based query assistant module.</li>
          </ul>
        </div>

        <div className="section-header minor">
          <h2>Volunteer Experience</h2>
          <div className="header-line"></div>
        </div>
        <div className="experience-block">
          <h3 className="exp-title">Global Summit 2025 – Volunteer</h3>
          <p className="exp-meta">Coimbatore, India</p>
          <ul className="exp-list">
            <li>Volunteered under the <strong>Startup TN Corporation</strong> team during the Global Summit 2025.</li>
            <li>Collaborated with corporate partners such as Zoho, Meta, Nvidia, HCL, PhonePe, Tally, and others to ensure smooth event coordination and workflow management.</li>
            <li>Assisted in managing startup booths, innovation showcases.</li>
            <li>Handled logistics, registration, and on-site technical assistance to maintain operational efficiency throughout the summit.</li>
            <li>Contributed to the success of the event by facilitating communication between startups, corporates, and organizing teams.</li>
          </ul>
        </div>

        <div className="section-header minor">
          <h2>Roles & Contributions</h2>
          <div className="header-line"></div>
        </div>
        <div className="experience-block compact">
          <h3 className="exp-title">LazAI Code Ambassador</h3>
          <p className="exp-meta">Oct 2025 – Present, Remote</p>
          <ul className="exp-list">
            <li>Represent and promote LazAI community goals through coding challenges, workshops, and outreach.</li>
            <li>I contribute my skills in the LazAI ecosystem.</li>
          </ul>
        </div>
        <div className="experience-block compact">
          <h3 className="exp-title">Contributor – Her DAO Project</h3>
          <p className="exp-meta">Nov 2025 – Present, Remote</p>
          <ul className="exp-list">
            <li>Participated in decentralized autonomous organization initiatives focusing on community governance and technological development.</li>
            <li>I contribute my skills in the HER DAO ecosystem.</li>
          </ul>
        </div>
        <div className="experience-block compact">
          <h3 className="exp-title">Participant – Monad Blockchain Community</h3>
          <p className="exp-meta">Oct 2025 – Present, Remote</p>
          <ul className="exp-list">
            <li>Engaged in learning and contributing to Monad blockchain fundamentals and smart contract development.</li>
            <li>Collaborated on projects involving Monad testnets and decentralized applications.</li>
            <li>I contribute my skills in the Monad ecosystem.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
