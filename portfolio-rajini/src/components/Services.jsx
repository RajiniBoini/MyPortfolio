export default function Services() {
  return (
    <section className="services" id="services">
      <div className="section-title reveal-up">
        <p className="eyebrow">Services</p>
        <h2>What I can help you ship.</h2>
      </div>

      <div className="service-grid">
        <article className="service-card reveal-up">
          <i className="fa-solid fa-eye"></i>
          <h3>Computer Vision</h3>
          <p>Detection, segmentation, and recognition models for real-time video analytics and safety systems.</p>
        </article>

        <article className="service-card reveal-up">
          <i className="fa-solid fa-brain"></i>
          <h3>ML & NLP Systems</h3>
          <p>End-to-end machine learning pipelines, model fine-tuning, and NLP systems for production deployment.</p>
        </article>

        <article className="service-card reveal-up">
          <i className="fa-solid fa-chart-line"></i>
          <h3>Data Pipelines & Engineering</h3>
          <p>Scalable data architectures, real-time processing with Kafka, and distributed database systems.</p>
        </article>
      </div>
    </section>
  );
}
