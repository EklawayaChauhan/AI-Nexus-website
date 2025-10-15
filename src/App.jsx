import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './styles/App.css';
import AboutPage from "./components/AboutPage.jsx";




// Lazy load components
const Header = lazy(() => import('./components/Header.jsx').catch(() => import('./components/Header.jsx')));
const HeroSection = lazy(() => import('./components/HeroSection').catch(() => import('./components/HeroSection.jsx')));
const EventPage = lazy(() => import('./components/EventPage').catch(() => import('./components/EventPage.jsx')));
const Schedule = lazy(() => import('./components/Schedule.jsx'));
const Financier = lazy(() => import('./components/Financier.jsx'));

// Loading component
const LoadingScreen = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: '#000',
    color: '#fff',
    fontSize: '1.5rem'
  }}>
    Loading...
  </div>
);

function AppContent() {
  const location = useLocation();
  
  // Show header on all pages except /event
  const showHeader = location.pathname !== '/event';

  return (
    <Suspense fallback={<LoadingScreen />}>
      {showHeader && <Header />}
      
      <Routes>
        <Route
          path="/"
          element={
            <>
              <video autoPlay muted loop playsInline id="background-video">
                <source src="/src/assets/Earth_background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <HeroSection />
            </>
          }
        />
        <Route path="/event" element={<EventPage />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/financier" element={<Financier/>} />
        
        
      </Routes>
    </Suspense>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;