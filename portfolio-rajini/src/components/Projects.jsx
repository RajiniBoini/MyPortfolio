import { useState } from 'react';
import { projectData } from '../data/projectsData';
import ProjectModal from './ProjectModal';
import { asset } from '../utils/asset';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleViewDetails = (projectKey) => {
    setSelectedProject(projectKey);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const projects = [
    { key: 'vinimi', image: asset('img/vinimi1.jpg'), title: 'VINIMI — Visual Intelligence for Occupational Safety', shortDesc: 'AI-driven real-time helmet & worker compliance system (YOLOv8, DeepFace, Qwen VLM). Automated alerts, audit logs, and VLM Q&A.', tags: 'AI · Computer Vision · Safety' },
    { key: 'trash', image: asset('img/Trash_detection.png'), title: 'Trash Segmentation — Waste Detection & Segmentation', shortDesc: 'Deep-learning pipeline for multi-class waste segmentation with dataset prep, training report, and evaluation artifacts.', tags: 'Computer Vision · Segmentation · Research' },
    { key: 'jetblue', image: asset('img/airlines.jpeg'), title: 'JetBlue Sentiment Intelligence — ETL Data Pipeline', shortDesc: 'End-to-end automated ETL pipeline for real-time customer sentiment analysis from Twitter. ML classification, AWS S3 storage, GitHub Actions orchestration, and Power BI dashboards.', tags: 'ML · ETL · Cloud · NLP' },
    { key: 'food', image: asset('img/fooddelivery.png'), title: 'Food Delivery UI Experience', shortDesc: 'Designed a user-first interface for ordering, tracking, and rating local restaurants.', tags: 'Product Design' },
    { key: 'ar', image: asset('img/ARglass.png'), title: 'AR in BIM Workflows', shortDesc: 'Delivered immersive walkthroughs and real-time plan-to-build validation using AR.', tags: 'Spatial Computing' },
  ];

  return (
    <>
      <section className="projects" id="projects">
        <div className="section-title reveal-up">
          <p className="eyebrow">Projects</p>
          <h2>Recent highlights & impact.</h2>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.key} className="project-card reveal-up" data-project={project.key}>
              <img src={project.image} alt={project.title} />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.shortDesc}</p>
                <span className="project-tag">{project.tags}</span>
                {project.key === 'jetblue' ? (
                  <a 
                    href="https://github.com/RajiniBoini/JetBlue_Airlines_SA" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-learn-more"
                  >
                    View on GitHub
                  </a>
                ) : (
                  <button 
                    className="btn-learn-more" 
                    onClick={() => handleViewDetails(project.key)}
                    aria-label="View project details"
                  >
                    View Details
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {selectedProject && (
        <ProjectModal 
          project={projectData[selectedProject]} 
          onClose={closeModal}
        />
      )}
    </>
  );
}
