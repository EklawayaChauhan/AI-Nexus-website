import React from 'react';
import '../styles/Financier.css';

// Data for each financier company
const financierData = [
  {
    name: 'Dataventics',
    logoUrl: '/images/dvl.png',
    description: 'A technology and innovation company that builds intelligent solutions for businesses to grow and succeed.',
    websiteUrl: 'https://dataventics.com/'
  },
  {
    name: 'Procohat Technologies',
    logoUrl: '/images/proBlackLogo.svg',
    description: 'A leading website and mobile application development company that also offers e-commerce and digital marketing services.',
    websiteUrl: 'https://www.procohat.com/'
  },
  {
    name: 'Trust Systems & Software',
    logoUrl: '/images/trust.webp',
    description: 'A leading global provider of software solutions for the banking and financial services industry, specializing in Core Banking.',
    websiteUrl: 'https://www.softtrust.com/'
  },
  {
    name: 'Pugarch Technology',
    logoUrl: '/images/pug.png',
    description: 'Empowering startups and SMEs with innovative software development and strategic IT consulting services.',
    websiteUrl: 'https://pugarch.in/'
  },
  {
    name: 'AnkHub Technology Services',
    logoUrl: '/images/ank.png',
    description: 'A trusted partner for innovative software solutions, empowering businesses to thrive in the digital age.',
    websiteUrl: 'https://ankhub.in/'
  }
];

const FinancierPage = () => {
  return (
    <div className="financier-page">

        <video
        autoPlay
        muted
        loop
        playsInline
        className="background-video"
      >
        <source src="/images/854225-hd_1920_1080_30fps.mp4" type="video/mp4" />
      </video>
      <h1 className="page-title">Our Company Partners</h1>
      <div className="card-container">
        {financierData.map((company, index) => (
          <div className="financier-card" key={index}>
            <div className="card-header">
              <img src={company.logoUrl} alt={`${company.name} Logo`} className="card-logo" />
            </div>
            <div className="card-body">
              <h3 className="card-name">{company.name}</h3>
              <p className="card-description">{company.description}</p>
            </div>
            <div className="card-footer">
              <a href={company.websiteUrl} target="_blank" rel="noopener noreferrer" className="card-button">
                Visit Website
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinancierPage;