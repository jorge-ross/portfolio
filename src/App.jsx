import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import BlogPage from './pages/blog';
import Portfolio from './pages/portfolio';
import ProjectDetail from './pages/project-detail';


function App() {
  return (
    <Router basename="/the-portfolio/">
      <Routes>
        {/* <Route path="/" element={<Navigate to="/" />} /> */}
        <Route path="" element={<Home />} />
        <Route path="about-me" element={<About />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="projects/:id" element={<ProjectDetail />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </Router>
  );
}

export default App
