import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { asset } from '../utils/asset';

export default function Hero() {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ['GenAI platforms', 'ML pipelines at scale', 'RAG systems', 'AI agents', 'production ML systems'],
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
          <p className="eyebrow">Data Scientist | GenAI Engineer | ML Systems Builder</p>
          <h1>Hi, I'm Rajinikanth.</h1>
          <h2>
            I build <span className="multi-text" ref={typedElement}></span>.
          </h2>
          <p className="lead">
            Data Scientist with 5+ years building production-grade AI/ML systems across banking, healthcare, retail, and insurance. Expert in GenAI platforms, RAG architectures, AI agents, and scalable data pipelines. I specialize in translating complex data into reliable, explainable insights while maintaining rigorous governance, safety, and compliance standards.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn primary">Explore Projects</a>
            <a href={asset('Rajnikanth_Profile26.pdf')} download="Rajnikanth_Profile26.pdf" className="btn ghost">Download Resume</a>
          </div>
          <div className="hero-highlights">
            <span className="pill">GenAI & LLMs</span>
            <span className="pill">RAG Architectures</span>
            <span className="pill">MLOps & Cloud</span>
            <span className="pill">Python & SQL</span>
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
          <div className="stat-grid">
            <div className="stat-card">
              <h3>5+</h3>
              <p>Years in Data Science & ML Engineering</p>
            </div>
            <div className="stat-card">
              <h3>20+</h3>
              <p>Production AI/ML projects shipped</p>
            </div>
            <div className="stat-card">
              <h3>4</h3>
              <p>Domains: Finance, Healthcare, Retail, Insurance</p>
            </div>
            <div className="stat-card">
              <h3>3</h3>
              <p>Cloud Platforms: AWS, Azure, GCP</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
