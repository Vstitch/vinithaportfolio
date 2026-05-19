import React from 'react';
import './Achievements.css';

function Achievements() {
  const achievements = [
    {
      medal: '🥈',
      title: 'Global Summit 2025 – MSME AI Grand Challenge',
      subtitle: '2nd Prize',
    },
    {
      medal: '🥈',
      title: "SHEHacks'25, KPR College",
      subtitle: '2nd Prize',
    },
    {
      medal: '🥈',
      title: 'NIT Pinnacle Hacks',
      subtitle: '2nd Prize',
    },
    {
      medal: '🏅',
      title: 'Policy Forge, IIT Madras',
      subtitle: '2nd Prize',
    },
    {
      medal: '🏆',
      title: 'India Sustainability Startathon 2025',
      subtitle: 'State-level selection',
    },
  ];

  return (
    <section id="achievements" className="achievements">
      <div className="section-container">
        <div className="section-header">
          <h2>Achievements</h2>
          <div className="header-line"></div>
        </div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className={`achievement-card ${achievement.medal === '🏆' || achievement.medal === '🏅' ? 'gold' : 'silver'}`}>
              <div className="medal-badge">{achievement.medal}</div>
              <div className="achievement-content">
                <h3>{achievement.title}</h3>
                <p>{achievement.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;

