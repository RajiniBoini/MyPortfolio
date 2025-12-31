export default function Services() {
  return (
    <section className="services" id="services">
      <div className="section-title reveal-up">
        <p className="eyebrow">Services</p>
        <h2>What I can help you ship.</h2>
      </div>

      <div className="service-grid">
        <article className="service-card reveal-up">
          <i className="fa-solid fa-code"></i>
          <h3>Full-Stack Delivery</h3>
          <p>Responsive web apps, APIs, and cloud deployments engineered for performance and scale.</p>
        </article>

        <article className="service-card reveal-up">
          <i className="fa-solid fa-chart-line"></i>
          <h3>Data Products</h3>
          <p>Analytics pipelines, dashboards, and ML workflows that turn data into action.</p>
        </article>

        <article className="service-card reveal-up">
          <i className="fa-solid fa-wand-magic-sparkles"></i>
          <h3>Experience Design</h3>
          <p>Polished UI/UX systems that align product strategy with real user needs.</p>
        </article>
      </div>
    </section>
  );
}
