import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import About from './components/About'
import Projects from './components/projects/Projects'
import Contact from './components/Contact'
import NavBar from './components/NavBar'
import Blog from './components/blog/Blog'

import Resume from './components/resume/Resume'

function App() {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setData(data.message))
  })

  return (
    <Router>
      <p>{!data ? 'Loading...' : data}</p>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
      </Routes>
      {/* <Footer /> */}
    </Router>
  )
}

export default App
