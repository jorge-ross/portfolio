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
        <Route index element={<Navigate to="the-portfolio/" />}/>
        <Route path="the-portfolio/home" element={<Home />}/>
        <Route path="the-portfolio/about-me" element={<About />}/>
        <Route path="the-portfolio/blog" element={<BlogPage />}/>
        <Route path="the-portfolio/portfolio" element={<Portfolio />}/>
        <Route path="the-portfolio/projects/:id" element={<ProjectDetail />}/>
        <Route path= "*" element={<Navigate to="the-portfolio/home" replace={true}/>}/>
      </Route>
    </Routes>
  )
}

export default App
