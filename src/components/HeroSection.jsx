import React from 'react';
import Countdown from './Countdown';
import '../styles/HeroSection.css';
import aiLogo from '../assets/prabodha.png';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* ✅ 1. Added new department and forum text */}
        <p className="department-title">Department of Artificial Intelligence</p>
        <p className="forum-title">Departmental Technical Forum</p>
        
        <img src={aiLogo} alt="AI Prabodha Logo" className="ai-logo" />
        
        {/* ✅ 2. Added class for glowing text effect */}
        <h3 className="glowing-text">Presents</h3>
        <h1 className="glowing-text">AI NEXUS</h1>
        
        <Countdown />
      </div>
    </section>
  );
} 

export default HeroSection;