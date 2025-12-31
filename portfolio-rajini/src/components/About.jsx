export default function About() {
  return (
    <section className="about" id="about">
      <div className="section-title reveal-up">
        <p className="eyebrow">About</p>
        <h2>Data-driven builder with a product mindset.</h2>
      </div>
      <div className="about-grid">
        <div className="about-card reveal-left">
          <h3>Story</h3>
          <p>
            I focus on building intelligent systems that scale, from streaming pipelines and real-time dashboards
            to full-stack web apps. I care about human-centered design, clear metrics, and operational excellence.
          </p>
          <div className="skills">
            <span>Python</span>
            <span>Java</span>
            <span>Spring Boot</span>
            <span>Kafka</span>
            <span>SQL</span>
            <span>GCP</span>
          </div>
        </div>
        <div className="about-card highlight reveal-right">
          <h3>Education</h3>
          <p><strong>Tagliatela College of Engineering, University of New Haven</strong></p>
          <p>Master of Science in Data Science . Expected May 2026</p>
          <p className="muted">Coursework: ML, Big Data, Data Viz, NLP, Deep Learning, Data Ethics</p>
          <p className="muted">Tools: PowerBI, R, TensorFlow, Hadoop, Tableau, AWS Athena</p>
        </div>
      </div>
    </section>
  );
}
