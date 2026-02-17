import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import SchedulePage from './pages/SchedulePage';
import GetInvolvedPage from './pages/GetInvolvedPage';
import ContactPage from './pages/ContactPage';

// Scroll to top and update title on route change
const PageManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Update document title for accessibility
    const titles = {
      '/': 'San Diego Goalball | Empowering Athletes',
      '/about': 'About Us | San Diego Goalball',
      '/programs': 'Our Programs | San Diego Goalball',
      '/schedule': 'Practice Schedule | San Diego Goalball',
      '/get-involved': 'Get Involved | San Diego Goalball',
      '/contact': 'Contact Us | San Diego Goalball',
    };

    document.title = titles[pathname] || 'San Diego Goalball';

    // Optional: focus the main content area for screen readers on page change
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
    }
  }, [pathname]);

  return null;
};

function Website() {
  return (
    <HashRouter>
      <PageManager />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="programs" element={<ProgramsPage />} />
          <Route path="schedule" element={<SchedulePage />} />
          <Route path="get-involved" element={<GetInvolvedPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default Website;
