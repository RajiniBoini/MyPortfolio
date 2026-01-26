import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProjectModal({ project, onClose }) {
  const navigate = useNavigate();
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target.className === 'project-modal active') {
      onClose();
    }
  };

  return (
    <div className="project-modal active" onClick={handleBackdropClick}>
      <div className={`modal-content ${project.isProfessional ? 'professional' : 'academic'}`}>
        <button 
          className="modal-close" 
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        
        {/* Professional Projects Modal */}
        {project.isProfessional ? (
          <>
            <div className="modal-header professional-header">
              <div className="header-content">
                <h2>{project.title}</h2>
                {project.role && project.company && (
                  <p className="role-info">
                    <span className="role">{project.role}</span>
                    <span className="separator">•</span>
                    <span className="company">{project.company}</span>
                    {project.period && (
                      <>
                        <span className="separator">•</span>
                        <span className="period">{project.period}</span>
                      </>
                    )}
                  </p>
                )}
              </div>
            </div>
            <div className="modal-body professional-body">
              <div id="modalDescription">
                <p className="description-highlight">{project.description}</p>
              </div>
              <div id="modalDetails">
                <div className="overview-section">
                  <h4>Project Overview</h4>
                  <p>{project.details.overview}</p>
                </div>
                
                <div className="features-section">
                  <h4>Key Responsibilities & Achievements</h4>
                  <ul>
                    {project.details.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="tech-section">
                  <strong>Tech Stack & Tools:</strong>
                  <p>{project.details.technologies}</p>
                </div>

                {project.details.impact && (
                  <div className="impact-section">
                    <strong>Business Impact:</strong>
                    <p>{project.details.impact}</p>
                  </div>
                )}
              </div>
            </div>
          </>
        ) : (
          /* Academic Projects Modal */
          <>
            <div className="modal-header academic-header">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="modal-body academic-body">
              <h2>{project.title}</h2>
              <div id="modalDescription">
                <p>{project.description}</p>
              </div>
              <div id="modalDetails">
                <h4>{project.details.overview}</h4>
                <ul>
                  {project.details.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <div style={{ marginTop: '1.6rem', paddingTop: '1.6rem', borderTop: '1px solid rgba(30, 168, 150, 0.2)' }}>
                  <strong style={{ color: 'var(--text)', fontSize: '1.4rem' }}>Tech Stack:</strong>
                  <p style={{ marginTop: '0.8rem' }}>{project.details.technologies}</p>
                </div>
              </div>
            </div>
          </>
        )}
        
        <div className="modal-actions">
          {project.slug && (
            <button 
              onClick={() => {
                onClose();
                navigate(`/projects/${project.slug}`);
                window.scrollTo(0, 0);
              }}
              className="btn primary"
            >
              Read Full Story
            </button>
          )}
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn secondary"
            >
              View on GitHub
            </a>
          )}
          <button 
            onClick={onClose}
            className="btn ghost"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
