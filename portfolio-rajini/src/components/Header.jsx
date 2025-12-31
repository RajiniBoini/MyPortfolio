import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setActiveLink(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <a href="#home" className="logo">
        Rajini<span className="logo-dot">.</span>Vision
      </a>
      <i 
        className={`fa-solid fa-bars ${isMenuOpen ? 'fa-xmark' : ''}`}
        id="menu-icon"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      ></i>
      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <a 
          href="#home" 
          className={activeLink === 'home' ? 'active' : ''}
          onClick={() => handleNavClick('home')}
        >
          Home
        </a>
        <a 
          href="#about" 
          className={activeLink === 'about' ? 'active' : ''}
          onClick={() => handleNavClick('about')}
        >
          About
        </a>
        <a 
          href="#services" 
          className={activeLink === 'services' ? 'active' : ''}
          onClick={() => handleNavClick('services')}
        >
          Services
        </a>
        <a 
          href="#projects" 
          className={activeLink === 'projects' ? 'active' : ''}
          onClick={() => handleNavClick('projects')}
        >
          Projects
        </a>
        <a 
          href="#contact" 
          className={activeLink === 'contact' ? 'active' : ''}
          onClick={() => handleNavClick('contact')}
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
