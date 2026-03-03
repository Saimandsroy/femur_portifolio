import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import CaseStudyDetailPage from './pages/CaseStudyDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';
import ThreeBackground from './components/ThreeBackground';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div
      className={`antialiased selection:bg-indigo-500/30 bg-black ${isHomePage ? 'h-screen w-screen overflow-hidden' : 'min-h-screen overflow-y-auto'} relative`}
      style={isHomePage ? { perspective: '1000px' } : undefined}
    >
      {isHomePage && <ThreeBackground />}
      <Navbar isHomePage={isHomePage} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
