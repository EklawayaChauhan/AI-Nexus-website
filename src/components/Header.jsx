import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; // Make sure this path is correct

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // This function closes the menu when a link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/" onClick={closeMenu}>AI Nexus</Link> {/* Example Logo Text */}
      </div>

      {/* Navigation Links */}
      <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/schedule" onClick={closeMenu}>Schedule</Link>
        <Link to="/event" onClick={closeMenu}>Games</Link>
        <Link to="/financier" onClick={closeMenu}>Financier</Link>
        {/* For external links, use a regular <a> tag */}
        <a href="https://forms.gle/Z5gXHtGiq1f5497k9" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
          Registration
        </a>
      </nav>

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

      {/* Overlay for mobile menu */}
      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </header>
  );
}

export default Header;