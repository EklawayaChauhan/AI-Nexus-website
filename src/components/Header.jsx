import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="navbar">
      <div className="logo">AI Nexus</div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="#about">About</Link>
        <Link to="#schedule">Schedule</Link>
        <Link to="/event">Event</Link> {/* New React route */}
      </nav>
    </header>
  );
}

export default Header;
