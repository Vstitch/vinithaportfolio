import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="section-container">
        <div className="section-header">
          <h2>About</h2>
          <div className="header-line"></div>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a passionate learner and developer focused on building modern, scalable web and mobile solutions. Currently exploring Web3, blockchain, and UI/UX design while constantly improving my problem-solving and innovation skills.
              With a strong foundation in full-stack development and a keen interest in emerging technologies, I thrive in collaborative environments where I can contribute to meaningful projects and grow alongside talented teams.
            </p>
            {/* <p>
              With a strong foundation in full-stack development and a keen interest in emerging technologies, I thrive in collaborative environments where I can contribute to meaningful projects and grow alongside talented teams.
            </p> */}
            <p>
              I’m like Stitch — a little wild, a bit unexpected, and full of energy. Just like him, I don’t fit into one box. I’ve worked in all sorts of places—business, tech, marketing— and I jump into everything with no fear. I’m curious, adaptable, and ready to figure things out on the go. Sometimes I’m rough around the edges, but I get the job done, and I always bring my unique spark to whatever I’m working on. Like Stitch, I’m all about being real, staying true to myself, and making my own path.
              <br />
              <span style={{opacity: 0.8}}>~~ vinitha 🎀</span>
            </p>
          </div>
          <div className="about-image-wrap">
            <img
              src={process.env.PUBLIC_URL + '/assest/mee.png'}
              alt="Vinitha R"
              className="about-image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
