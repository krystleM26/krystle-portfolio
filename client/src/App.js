import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import NavBar from './components/NavBar'
import React from 'react'


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
    </Router>
  )
}

export default App
