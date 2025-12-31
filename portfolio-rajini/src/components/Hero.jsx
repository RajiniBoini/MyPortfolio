import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { asset } from '../utils/asset';

export default function Hero() {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ['data products', 'analytics', 'cloud platforms', 'AI-ready experiences'],
      typeSpeed: 70,
      backSpeed: 50,
      backDelay: 1200,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="home" id="home">
      <div className="hero-grid">
        <div className="home-content reveal-up">
          <p className="eyebrow">Data Science . Engineering . Product</p>
          <h1>Hi, I'm Rajinikanth Boini.</h1>
          <h2>
            I build <span className="multi-text" ref={typedElement}></span> solutions.
          </h2>
          <p className="lead">
            Recent Master's graduate in Data Science with hands-on experience across Java, Python, Spring Boot, and Apache Kafka.
            I design cloud-ready products, analytics pipelines, and polished user experiences that help teams
            move from insight to impact. Currently seeking opportunities to drive innovation in data-driven organizations.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn primary">Explore Projects</a>
            <a href={asset('RajiniBoini_Resume.pdf')} target="_blank" rel="noopener noreferrer" className="btn ghost">Download Resume</a>
          </div>
          <div className="hero-highlights">
            <span className="pill">Google Cloud ACE</span>
            <span className="pill">Java + Python</span>
            <span className="pill">Kafka + ML</span>
          </div>
          <div className="social-media">
            <a href="https://www.facebook.com/profile.php?id=61566191933776" aria-label="Facebook" rel="noopener noreferrer" target="_blank">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://github.com/RajiniBoini/" aria-label="GitHub" rel="noopener noreferrer" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.instagram.com/thenameis_rajni/" aria-label="Instagram" rel="noopener noreferrer" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/rajinikanth-boini-2b2706147/" aria-label="LinkedIn" rel="noopener noreferrer" target="_blank">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div className="home-media reveal-right">
          <div className="profile-frame">
            <img src={asset('img/profilepic.JPG')} alt="Rajinikanth Boini portrait" />
          </div>
          <div className="stat-grid">
            <div className="stat-card">
              <h3>4+</h3>
              <p>Years across software & analytics</p>
            </div>
            <div className="stat-card">
              <h3>12+</h3>
              <p>Projects shipped end-to-end</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
