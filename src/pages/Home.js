import React from 'react';
import '../styles/Home.css';

const marketingCourses = [
  { img: '/digital-marketing-concept.webp',             alt: 'Digital Marketing',      name: 'Digital Marketing',       author: 'George Karouni', rating: '4.4', students: '9,658',  hours: '140' },
  { img: '/marketing-la-gi-1.jpg',                      alt: 'Intro to Marketing',     name: 'Intro to Marketing',      author: 'George Karouni', rating: '4.9', students: '22,684', hours: '80'  },
  { img: '/social-media-marketing.png',                 alt: 'Social Media Marketing', name: 'Social Media Marketing',  author: 'Tarek Hashem',   rating: '4.5', students: '6,108',  hours: '67'  },
  { img: '/diferencias-entre-seo-y-sem-destacada.jpg',  alt: 'SEO & SEM',              name: 'SEO & SEM',               author: 'Soha Tahan',     rating: '4.1', students: '5,237',  hours: '40'  },
];

const mathCourses = [
  { img: '/calculus-1.jpg',                              alt: 'Calculus 1',            name: 'Calculus 1',                   author: 'Ragheb Mghamas', rating: '4.4', students: '10,552', hours: '60' },
  { img: '/calculus-1.jpg',                              alt: 'Calculus 2',            name: 'Calculus 2',                   author: 'Ragheb Mghamas', rating: '4.8', students: '14,620', hours: '70' },
  { img: '/linear-algebra.jpg',                          alt: 'Linear Algebra',        name: 'Linear Algebra',               author: 'Ragheb Mghamas', rating: '4.7', students: '21,459', hours: '45' },
  { img: '/Gemini_Generated_Image_w0mu3zw0mu3zw0mu.png', alt: 'Numerical Mathematics', name: 'Numerical Mathematics (+lab)', author: 'Ragheb Mghamas', rating: '4.4', students: '16,384', hours: '70' },
];

const Home = () => {
  return (
    <div className="page-wrapper">

      <section className="welcome-banner">
        <h1>Welcome back, Rubio!</h1>
        <p className="subtitle">Continue your learning journey</p>
        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-value">2</div>
            <div className="stat-label">Enrolled courses</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">42</div>
            <div className="stat-label">Completed lessons</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">18h</div>
            <div className="stat-label">Time spent</div>
          </div>
        </div>
      </section>

      <h2 className="section-title">Continue Learning</h2>
      <div className="courses-in-progress">



        <div className="course-card-horizontal">
          <div className="course-thumb">
            <img src="/istockphoto-1308815095-612x612.jpg" alt="Web Development" />
          </div>
          <div className="course-info">
            <span className="course-category">Development</span>
            <div className="course-name">Web Development 1</div>
            <div className="course-author">Haisam Al-Aawar</div>
            <div className="course-progress">Progress 64%</div>
            <button className="btn-continue">Continue Learning</button>
          </div>
        </div>



        <div className="course-card-horizontal">
          <div className="course-thumb">
            <img src="/ai-generated-8540920_640.webp" alt="Artificial Intelligence" />
          </div>
          <div className="course-info">
            <span className="course-category">Machine Learning</span>
            <div className="course-name">Artificial Intelligence</div>
            <div className="course-author">Kwathar Dokmak</div>
            <div className="course-progress">Progress 73%</div>
            <button className="btn-continue">Continue Learning</button>
          </div>
        </div>

      </div>



      <div className="section-header">
        <h2>Marketing</h2>
        <a className="view-all">view all</a>
      </div>
      <div className="courses-grid">
        {marketingCourses.map((course, i) => (
          <div className="course-card-vertical" key={i}>
            <img src={course.img} alt={course.alt} />
            <div className="card-body">
              <div className="course-name">{course.name}</div>
              <div className="course-author">{course.author}</div>
              <div className="course-meta">
                <span>⭐ {course.rating}</span>
                <span>👥 {course.students}</span>
                <span>🕐 {course.hours} hours</span>
              </div>
              <button className="btn-enroll">Enroll Now</button>
            </div>
          </div>
        ))}
      </div>



      <div className="section-header">
        <h2>Math</h2>
        <a className="view-all">view all</a>
      </div>
      <div className="courses-grid">
        {mathCourses.map((course, i) => (
          <div className="course-card-vertical" key={i}>
            <img src={course.img} alt={course.alt} />
            <div className="card-body">
              <div className="course-name">{course.name}</div>
              <div className="course-author">{course.author}</div>
              <div className="course-meta">
                <span>⭐ {course.rating}</span>
                <span>👥 {course.students}</span>
                <span>🕐 {course.hours} hours</span>
              </div>
              <button className="btn-enroll">Enroll Now</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Home;
