import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Header from './Components/Header.jsx';
import HeroSection from './components/HeroSection';
import EventPage from './components/EventPage';

function App() {
  return (
    <Router>
      <Header /> {/* Navbar */}

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
      </Routes>
    </Router>
  );
}

export default App;
