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
    name: 'PERSEVEX EDUCATION CONSULTANCY LLP',
    logoUrl: '/images/pers.jpeg',
    description: 'An e-learning platform offering industry-relevant courses in financial modeling, digital marketing, data science, and more to upskill students and professionals.',
    websiteUrl: 'https://www.persevex.com/'
  },
];

// Helper function to render a single card
const CompanyCard = ({ company }) => (
  <div className="financier-card" key={company.name}>
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
);

const FinancierPage = () => {
  // Separate the top companies from the rest
  const topCompanyNames = ['Dataventics', 'Procohat Technologies'];
  const topCompanies = financierData.filter(company => topCompanyNames.includes(company.name));
  const otherCompanies = financierData.filter(company => !topCompanyNames.includes(company.name));

  return (
    <div className="financier-page">
      <h1 className="page-title">Our Company Partners</h1>
      
      <div className="card-container">
        {topCompanies.map(company => (
          
          <CompanyCard company={company} key={company.name} />
        ))}
        <h2 className="coming-soon-heading">More companies coming soon...</h2>

        {otherCompanies.map(company => (
          <CompanyCard company={company} key={company.name} />
        ))}
      </div>
    </div>
  );
};

export default FinancierPage;