export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="section-title reveal-up">
        <p className="eyebrow">Contact</p>
        <h2>Let's build something with impact.</h2>
      </div>

      <div className="contact-grid">
        <div className="contact-card reveal-left">
          <h3>Start a project</h3>
          <p>Tell me about your challenge and I'll respond within 48 hours.</p>
          <div className="contact-details">
            <div>
              <span>Location</span>
              <strong>West Haven, CT</strong>
            </div>
            <div>
              <span>Focus</span>
              <strong>Data, Cloud, UX</strong>
            </div>
          </div>
        </div>

        <form className="contact-form reveal-right" action="#">
          <div className="input-row">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="input-row">
            <input type="text" placeholder="Company" required />
            <input type="text" placeholder="Project Type" required />
          </div>
          <textarea name="message" cols="30" rows="6" placeholder="Tell me about your project" required></textarea>
          <button type="submit" className="btn primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}
