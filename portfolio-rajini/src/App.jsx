import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VisionARBackground from './components/VisionARBackground';
import VinimiProject from './pages/VinimiProject';
import './main.css';

function HomePage() {
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
      {/* 3D Vision + AI + AR Background */}
      <VisionARBackground
        intensity={0.7}
        particleCount={20}
        gridOpacity={0.3}
        scanSpeed={0.3}
        parallaxStrength={1}
      />
      
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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/vinimi" element={<VinimiProject />} />
      </Routes>
    </BrowserRouter>
  );
}
