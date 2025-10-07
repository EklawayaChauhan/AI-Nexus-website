import React from 'react';
import Countdown from './Countdown';
import '../styles/HeroSection.css';
import aiLogo from '../assets/prabodha.png';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <img src={aiLogo} alt="AI Prabodha Logo" className="ai-logo" />
        <Countdown />
      </div>
    </section>
  );
}

export default HeroSection;
