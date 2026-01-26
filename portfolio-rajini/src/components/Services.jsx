export default function Services() {
  return (
    <section className="services" id="services">
      <div className="section-title reveal-up">
        <p className="eyebrow">Services</p>
        <h2>What I can help you ship.</h2>
      </div>

      <div className="service-grid">
        <article className="service-card reveal-up">
          <i className="fa-solid fa-sparkles"></i>
          <h3>GenAI & LLM Platforms</h3>
          <p>Design and deploy production-grade GenAI systems with RAG architectures, AI agents, prompt engineering, evaluation frameworks (RAGAS), and governance controls for enterprise compliance.</p>
        </article>

        <article className="service-card reveal-up">
          <i className="fa-solid fa-brain"></i>
          <h3>ML Systems & Agents</h3>
          <p>End-to-end ML pipelines, multi-agent workflows, model evaluation, feature engineering, and production deployment with monitoring & retraining triggers.</p>
        </article>

        <article className="service-card reveal-up">
          <i className="fa-solid fa-gears"></i>
          <h3>MLOps & Data Engineering</h3>
          <p>Scalable data pipelines, cloud infrastructure (AWS/Azure/GCP), CI/CD automation, containerization, Kubernetes orchestration, and monitoring systems.</p>
        </article>
      </div>
    </section>
  );
}
