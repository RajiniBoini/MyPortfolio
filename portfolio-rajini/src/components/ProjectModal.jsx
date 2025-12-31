import { useEffect } from 'react';

export default function ProjectModal({ project, onClose }) {
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
      <div className="modal-content">
        <button 
          className="modal-close" 
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        <div className="modal-header">
          <img src={project.image} alt={project.title} />
        </div>
        <div className="modal-body">
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
          <div className="modal-actions">
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn primary"
              >
                View Full Project
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
    </div>
  );
}
