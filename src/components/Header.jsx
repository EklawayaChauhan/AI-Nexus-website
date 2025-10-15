import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      
      
      {/* Hamburger Icon - Only visible on mobile */}
      <button 
        className={`hamburger ${menuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation Links */}
      <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="#schedule" onClick={closeMenu}>Schedule</Link>
        <Link to="/event">Games</Link>
        <Link to="https://forms.gle/Z5gXHtGiq1f5497k9">Registration</Link>
      </nav>

      {/* Overlay for mobile menu */}
      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </header>
  );
}

export default Header;