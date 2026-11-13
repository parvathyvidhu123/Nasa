import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { SolarSystemPage } from './pages/SolarSystemPage';
import { HardwareArchivePage } from './pages/HardwareArchivePage';
import { HardwareDetailPage } from './pages/HardwareDetailPage';
import { TimelinePage } from './pages/TimelinePage';
import { DiscoveriesPage } from './pages/DiscoveriesPage';
import { SpaceLabPage } from './pages/SpaceLabPage';
import { AboutPage } from './pages/AboutPage';

// Scroll to top on route change helper
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-space-dark text-space-text font-sans selection:bg-space-accent selection:text-space-dark">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/solar-system" element={<SolarSystemPage />} />
            <Route path="/archive" element={<HardwareArchivePage />} />
            <Route path="/hardware/:id" element={<HardwareDetailPage />} />
            <Route path="/timeline" element={<TimelinePage />} />
            <Route path="/discoveries" element={<DiscoveriesPage />} />
            <Route path="/space-lab" element={<SpaceLabPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

