import React, { useState, useEffect } from 'react'; // Import useEffect
import { Link, NavLink } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // State to track scroll

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // ✅ This effect adds a background to the navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state to true if user scrolls more than 10px
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty array ensures this runs only once

  return (
    // ✅ The 'scrolled' class is now added conditionally
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="logo" onClick={closeMenu}>
        <span className="logo-blue">AI</span> Nexus
      </Link>

      <nav className="nav-menu">
        <div className="nav-links-group">
          <NavLink to="/" className="nav-link" onClick={closeMenu} end>Home</NavLink>
          <NavLink to="/about" className="nav-link" onClick={closeMenu}>About</NavLink>
          <NavLink to="/schedule" className="nav-link" onClick={closeMenu}>Schedule</NavLink>
          <NavLink to="/event" className="nav-link" onClick={closeMenu}>Games</NavLink>
          <NavLink to="/financier" className="nav-link" onClick={closeMenu}>Company Partners</NavLink>
        </div>
        <a href="https://forms.gle/Z5gXHtGiq1f5497k9" target="_blank" rel="noopener noreferrer" className="register-button">
          Registration
        </a>
      </nav>
      
      <button
        className={`hamburger ${menuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`mobile-nav-links ${menuOpen ? 'active' : ''}`}>
        <NavLink to="/" className="nav-link" onClick={closeMenu} end>Home</NavLink>
        <NavLink to="/about" className="nav-link" onClick={closeMenu}>About</NavLink>
        <NavLink to="/event" className="nav-link" onClick={closeMenu}>Games</NavLink>
        <NavLink to="/schedule" className="nav-link" onClick={closeMenu}>Schedule</NavLink>
        <NavLink to="/financier" className="nav-link" onClick={closeMenu}>Company Partners</NavLink>
        <a href="https://forms.gle/Z5gXHtGiq1f5497k9" target="_blank" rel="noopener noreferrer" className="register-button" onClick={closeMenu}>
          Registration
        </a>
      </nav>

      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </header>
  );
}

export default Header;