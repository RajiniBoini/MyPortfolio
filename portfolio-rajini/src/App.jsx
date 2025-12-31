import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './main.css';

export default function App() {
  useEffect(() => {
    if (window.ScrollReveal) {
      const sr = ScrollReveal({
        distance: '60px',
        duration: 1600,
        delay: 200,
        easing: 'ease-out',
        reset: false,
      });

      sr.reveal('.reveal-up', { origin: 'bottom' });
      sr.reveal('.reveal-left', { origin: 'left' });
      sr.reveal('.reveal-right', { origin: 'right' });
    }
  }, []);

  return (
    <>
      <div className="bg-effects" aria-hidden="true">
        <span className="orb orb-1"></span>
        <span className="orb orb-2"></span>
        <span className="orb orb-3"></span>
      </div>
      
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
