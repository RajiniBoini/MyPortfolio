import { Link } from 'react-router-dom';

function VinimiProject() {
  const base = import.meta.env.BASE_URL || '/';
  const screenshot1 = `${base}img/vinimi1.jpg`;
  const screenshot2 = `${base}img/vinimi2.jpg`;

  return (
    <div className="project-page">
      <header className="project-header">
        <div className="container">
          <Link to="/" className="btn ghost">← Back to Portfolio</Link>
        </div>
      </header>

      <main className="project-content container">
        <p className="eyebrow">Case Study</p>
        <h1 className="project-title">VINIMI — Visual Intelligence for Occupational Safety</h1>
        
        <p className="lead">
          An end-to-end safety monitoring platform that combines real-time computer vision, 
          multi-modal AI, and SMS alerting to detect PPE compliance violations and prevent workplace incidents.
        </p>

        <section className="project-section">
          <h2>My Role</h2>
          <p>
            I designed and built VINIMI's ML pipeline from scratch — starting with YOLOv8-based 
            detection models, integrating DeepFace for identity recognition, and orchestrating 
            Qwen VLM for scene reasoning. I architected the FastAPI backend to handle real-time 
            inference streams, implemented MySQL-based incident logging, and connected Twilio for 
            automated SMS alerts. On the frontend, I built a React + TypeScript dashboard for 
            live monitoring and violation playback.
          </p>
        </section>

        <section className="project-section">
          <h2>Core Technologies</h2>
          <ul className="tech-list">
            <li><strong>YOLOv8:</strong> Real-time object detection for helmets, vests, gloves, masks</li>
            <li><strong>DeepFace:</strong> Facial recognition for worker identification</li>
            <li><strong>Qwen VLM:</strong> Multi-modal AI for contextual scene understanding</li>
            <li><strong>FastAPI:</strong> High-performance Python backend for inference orchestration</li>
            <li><strong>React + TypeScript:</strong> Real-time monitoring dashboard</li>
            <li><strong>MySQL:</strong> Incident logging and historical analytics</li>
            <li><strong>Twilio:</strong> Automated SMS alerting system</li>
          </ul>
        </section>

        <section className="project-section">
          <h2>Key Features</h2>
          <ul className="features-list">
            <li>Real-time PPE detection across multiple camera feeds</li>
            <li>Multi-modal AI reasoning for context-aware violation detection</li>
            <li>Automated SMS alerts to safety supervisors</li>
            <li>Worker identification and incident history tracking</li>
            <li>Live dashboard with violation playback and analytics</li>
            <li>Configurable safety rules and alert thresholds</li>
          </ul>
        </section>

        <section className="project-section">
          <h2>Screenshots</h2>
          <figure className="project-figure">
            <img src={screenshot1} alt="VINIMI live monitoring interface" />
            <figcaption>Live monitoring dashboard showing real-time PPE detection across multiple camera feeds</figcaption>
          </figure>
          
          <figure className="project-figure">
            <img src={screenshot2} alt="VINIMI violation detail view" />
            <figcaption>Detailed violation view with multi-modal AI reasoning and incident history</figcaption>
          </figure>
        </section>

        <section className="project-section">
          <h2>Impact</h2>
          <p>
            VINIMI reduced workplace safety incidents by enabling proactive intervention before 
            violations escalated. The system processes video streams at 30 FPS with sub-second 
            alert latency, allowing supervisors to respond immediately. By automating compliance 
            monitoring, it freed up safety teams to focus on training and preventive measures 
            rather than manual inspection.
          </p>
        </section>

        <section className="project-section">
          <h2>Security & Privacy</h2>
          <p>
            All facial recognition data is encrypted at rest and in transit. The system includes 
            configurable data retention policies and opt-in consent management. Video streams are 
            processed locally without external cloud dependencies, ensuring sensitive workplace 
            footage remains on-premises.
          </p>
        </section>

        <section className="project-section">
          <h2>Links</h2>
          <div className="project-links">
            <a 
              href="https://github.com/vinimifall2025-ops/VINIMI/wiki/The-VINIMI-:-Purpose-and-Implementation" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn primary"
            >
              📖 Read Full Documentation
            </a>
            <a 
              href="https://github.com/vinimifall2025-ops/VINIMI" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn secondary"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              View on GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="project-footer">
        <div className="container">
          <Link to="/" className="btn ghost">← Back to Portfolio</Link>
        </div>
      </footer>
    </div>
  );
}

export default VinimiProject;
