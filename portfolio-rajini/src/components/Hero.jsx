import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { asset } from '../utils/asset';

export default function Hero() {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ['computer vision systems', 'ML pipelines', 'real-time AI platforms', 'production AI'],
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
          <p className="eyebrow">Data Scientist | Machine Learning Engineer | AI Product Builder</p>
          <h1>Hi, I'm Rajinikanth Boini.</h1>
          <h2>
            I build <span className="multi-text" ref={typedElement}></span>.
          </h2>
          <p className="lead">
            Master's graduate in Data Science building production-ready AI systems with real-world impact. I specialize in computer vision, machine learning, and scalable data pipelines—taking ideas from prototype to deployment. I focus on writing clean, maintainable code, measuring performance with clear metrics, and designing systems that work reliably in production environments.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn primary">Explore Projects</a>
            <a href={asset('RajiniBoini_Resume.pdf')} target="_blank" rel="noopener noreferrer" className="btn ghost">Download Resume</a>
          </div>
          <div className="hero-highlights">
            <span className="pill">Computer Vision</span>
            <span className="pill">Deep Learning</span>
            <span className="pill">Production ML</span>
            <span className="pill">Python + PyTorch</span>
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
