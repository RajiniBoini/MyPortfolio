export default function About() {
  return (
    <section className="about" id="about">
      <div className="section-title reveal-up">
        <p className="eyebrow">About</p>
        <h2>GenAI and ML systems architect with production expertise.</h2>
      </div>
      <div className="about-grid">
        <div className="about-card reveal-left">
          <h3>Story</h3>
          <p>
            I'm a Data Scientist and GenAI engineer with 5+ years of hands-on experience building production-grade AI systems across banking, healthcare, retail, and insurance domains. I specialize in GenAI platforms, RAG architectures, AI agents, scalable data pipelines, and MLOps—transforming raw data into reliable, explainable business insights with rigorous governance.
          </p>
          <p style={{marginTop: '12px', fontSize: '1.7rem', lineHeight: '1.8'}}>
            I've architected enterprise GenAI platforms for treasury analytics, built ML-driven medical device predictive systems, designed omnichannel sales analytics platforms, and deployed MLOps infrastructure on AWS, Azure, and GCP. I focus on shipping production systems with measurable impact, clean maintainable code, comprehensive monitoring, and safety guardrails that meet enterprise compliance standards.
          </p>
          <div className="skills">
            <span>Python & SQL</span>
            <span>GenAI & LLMs</span>
            <span>RAG Architectures</span>
            <span>LangChain/LangGraph</span>
            <span>MLOps & Airflow</span>
            <span>AWS/Azure/GCP</span>
            <span>Spark & BigQuery</span>
            <span>FastAPI & Docker</span>
          </div>
        </div>
        <div className="about-card highlight reveal-right">
          <h3>Education & Expertise</h3>
          <p><strong>Tagliatela College of Engineering, University of New Haven</strong></p>
          <p>Master of Science in Data Science • December 2025 (3.75 GPA)</p>
          <p className="muted"><strong>Core Competencies:</strong> GenAI/LLMs, RAG Systems, AI Agents, Data Engineering, MLOps, Cloud Architecture</p>
          <p className="muted"><strong>Tech Stack:</strong> Python, SQL, LangChain, LangGraph, OpenAI APIs, FastAPI, MLflow, Airflow, Docker, Kubernetes</p>
          <p className="muted"><strong>Cloud Platforms:</strong> AWS (S3, Lambda, ECS, SageMaker), Azure (ML, AKS), GCP (BigQuery, Vertex AI)</p>
        </div>
      </div>
    </section>
  );
}
