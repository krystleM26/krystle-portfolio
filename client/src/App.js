import './App.css'
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/home/Home'
import About from './components/About'
import Projects from './components/projects/Projects'
import Contact from './components/Contact'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Resume from './components/Resume'

function App() {
  useEffect(() => {
    const url = 'http://localhost:9000/testAPI'
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const json = await response.json()
        console.log(json)
      } catch (error) {
        console.log('error', error)
      }
    }

    fetchData()
  }, [])
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
