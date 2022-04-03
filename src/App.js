import React from 'react'
import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Layout from './pages/Layout/Index'
import Home from './pages/Home'
import About from './pages/About'
import Multi from './pages/Multi'
import Page1 from './pages/MultiPage/Page1'
import Page2 from './pages/MultiPage/Page2'
import Page11 from './pages/MultiPage/Page11'
import Page12 from './pages/MultiPage/Page12'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="multi" element={<Multi />}>
              <Route path="page1" element={<Page1 />}>
                <Route path="one" element={<Page11 />} />
                <Route path="two" element={<Page12 />} />
              </Route>
              <Route path="page2" element={<Page2 />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>  
    )
  }
}

export default App
