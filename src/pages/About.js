import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <div className="underline"></div>

      <h2 style={{ textAlign: 'left', marginLeft: '200px', marginRight: '200px' }}>
        MindoLearn is an online learning platform dedicated to making quality education
        accessible to everyone. We partner with expert instructors across technology,
        business, mathematics, and more to bring you engaging, up-to-date courses
        that fit your schedule and learning style.
      </h2>

      <div className="about-cards">
        <div className="about-card">
          <div className="icon">🎓</div>
          <h3>Expert Instructors</h3>
          <p>Learn from industry professionals and experienced educators.</p>
        </div>
        <div className="about-card">
          <div className="icon">📚</div>
          <h3>Quality Content</h3>
          <p>Carefully curated courses designed to maximize your learning.</p>
        </div>
        <div className="about-card">
          <div className="icon">🌍</div>
          <h3>Global Community</h3>
          <p>Join thousands of learners from around the world.</p>
        </div>
        <div className="about-card">
          <div className="icon">🏆</div>
          <h3>Certifications</h3>
          <p>Earn recognized certificates upon completing your courses.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
