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
            I'm a data science graduate student and product-minded engineer who builds production-ready AI systems. I specialize in computer vision, machine learning, and scalable data pipelines, with hands-on experience taking ideas from prototype to deployment.
          </p>
          <p style={{marginTop: '12px', fontSize: '1.7rem', lineHeight: '1.8'}}>
            I've built real-time video analytics platforms, AI-powered safety and monitoring systems, and NLP pipelines handling sensitive data. I focus on writing clean, maintainable code, measuring performance with clear metrics, and designing systems that work reliably in real environments—not just notebooks.
          </p>
          <div className="skills">
            <span>Python</span>
            <span>PyTorch</span>
            <span>TensorFlow</span>
            <span>Computer Vision</span>
            <span>SQL</span>
            <span>AWS</span>
            <span>MongoDB</span>
            <span>Kafka</span>
          </div>
        </div>
        <div className="about-card highlight reveal-right">
          <h3>Education</h3>
          <p><strong>Tagliatela College of Engineering, University of New Haven</strong></p>
          <p>Master of Science in Data Science • Expected May 2026</p>
          <p className="muted"><strong>Relevant Coursework:</strong> Machine Learning, Deep Learning, NLP, Distributed Database Systems, Big Data Analytics</p>
          <p className="muted"><strong>Technical Stack:</strong> Python, PyTorch, TensorFlow, SQL, MongoDB, Kafka, AWS, GCP</p>
          <p className="muted"><strong>Applied Experience:</strong> End-to-end ML systems, Computer Vision models, Scalable data architectures</p>
        </div>
      </div>
    </section>
  );
}
