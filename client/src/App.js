import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './components/home/Home'
import About from './components/About'
import Projects from './components/projects/Projects'
import Contact from './components/Contact'
import NavBar from './components/NavBar'
import Footer from './components/Footer'


function App() {


  return (
    <Router>
    
      <NavBar />
      <Routes>
        <Route   path="/projects" element={<Projects />}></Route>
        <Route  path="/" element={<Home />}></Route>
        <Route  path="/about" element={<About />}></Route>
        <Route  path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
