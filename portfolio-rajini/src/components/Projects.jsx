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
    { key: 'amex', image: asset('img/vinimi1.jpg'), title: 'American Express: GenAI Treasury Platform', shortDesc: 'GenAI-powered decision-support platform for treasury teams using RAG, LangGraph agents, and LangChain. Multi-step AI workflows analyzing liquidity, cash flow, and regulatory compliance with enterprise safety controls.', tags: 'GenAI · RAG · LangGraph · AWS', isProfessional: true },
    { key: 'elevance', image: asset('img/Trash_detection.png'), title: 'Elevance Health: ML Medical Device Optimization', shortDesc: 'Gradient-boosting ML platform predicting medical device utilization and maintenance. 18-22% ROC-AUC improvement, 15% downtime reduction. MLflow versioning, Kubernetes deployment, automated retraining.', tags: 'ML · MLOps · Kubernetes · Healthcare', isProfessional: true },
    { key: 'macys', image: asset('img/airlines.jpeg'), title: 'Macy\'s: Omnichannel Sales Analytics Platform', shortDesc: 'GCP-native analytics platform for 50+ retail locations. EDA, derived KPIs, BigQuery optimization (40% latency reduction), Tableau dashboards. 10-12% sell-through improvement.', tags: 'Analytics · BigQuery · Tableau · GCP', isProfessional: true },
    { key: 'aig', image: asset('img/ARglass.png'), title: 'AIG: Insurance Operations Analytics', shortDesc: 'ETL pipelines and analytics solutions for insurance operations. Data ingestion, EDA, Power BI dashboards tracking claims, policy performance, and risk indicators across regions.', tags: 'ETL · Data Engineering · Power BI', isProfessional: true },
    { key: 'vinimi', image: asset('img/vinimi1.jpg'), title: 'VINIMI — AI-Powered Workplace Safety Monitoring', shortDesc: 'Real-time safety compliance system using YOLOv8 helmet detection, DeepFace facial recognition, and Qwen Vision Language Model. FastAPI backend with 25+ endpoints and automated SMS alerts.', tags: 'AI · Computer Vision · Safety' },
    { key: 'trash', image: asset('img/Trash_detection.png'), title: 'Campus Trash Segmentation: Waste Classification', shortDesc: 'DeepLabV3-ResNet50 semantic segmentation model achieving 58.86% mIoU improvement (551% relative). 98.34% background IoU, 78.24% waste IoU with class imbalance mitigation.', tags: 'Computer Vision · Segmentation · Research' },
    { key: 'jetblue', image: asset('img/airlines.jpeg'), title: 'JetBlue Sentiment Intelligence — ETL Data Pipeline', shortDesc: 'End-to-end automated ETL pipeline with ML-powered sentiment analysis and real-time dashboards. AWS S3 data lake, Glue ETL, GitHub Actions CI/CD, Power BI reporting.', tags: 'ML · ETL · Cloud · NLP' },
    { key: 'ar', image: asset('img/ARglass.png'), title: 'AR in BIM Workflows', shortDesc: 'Immersive AR solution enabling plan-to-build validation, spatial measurements, and collaborative walkthroughs for AEC workflows.', tags: 'Spatial Computing · ARKit' },
  ];

  return (
    <>
      <section className="projects" id="projects">
        <div className="section-title reveal-up">
          <p className="eyebrow">Professional Experience</p>
          <h2>Production AI/ML systems built at scale.</h2>
        </div>

        <div className="project-grid">
          {projects.filter(p => p.isProfessional).map((project) => (
            <article key={project.key} className="project-card reveal-up" data-project={project.key}>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.shortDesc}</p>
                <span className="project-tag">{project.tags}</span>
                <button 
                  className="btn-learn-more" 
                  onClick={() => handleViewDetails(project.key)}
                  aria-label="View project details"
                >
                  View Details
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="section-title reveal-up">
          <p className="eyebrow">Featured Projects</p>
          <h2>Research & academic projects.</h2>
        </div>

        <div className="project-grid">
          {projects.filter(p => !p.isProfessional).map((project) => (
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
