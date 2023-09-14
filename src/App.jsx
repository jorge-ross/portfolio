import './App.css'
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import BlogPage from './pages/blog';
import Portfolio from './pages/portfolio';
import ProjectDetail from './pages/project-detail';


function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Navigate to="home" />}/>
        <Route path="home" element={<Home />}/>
        <Route path="about-me" element={<About />}/>
        <Route path="blog" element={<BlogPage />}/>
        <Route path="portfolio" element={<Portfolio />}/>
        <Route path="projects/:id" element={<ProjectDetail />}/>
        <Route path= "*" element={<Navigate to="/" />}/>
      </Route>
    </Routes>
  )
}

export default App
