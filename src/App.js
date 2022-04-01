import React from 'react'
import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Layout from './pages/Layout/Index'
import Home from './pages/Home'
import About from './pages/About'
import Page1 from './pages/Page1'
class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="page1" element={<Page1 />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>  
    )
  }
}

export default App
