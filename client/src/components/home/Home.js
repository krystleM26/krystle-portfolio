import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import headShot from '../../assets/HeadShotMe.png'
import krystleResume from '../../assets/krystleResume.pdf'

const Home = () => {
  return (
    <div className>
      <div className="top-content">
        <div className="header">
          <h2>Greetings!</h2>
          <div className="text-content">
            <p>
              {' '}
              My name is Krystle Mitchell and I am a writer turned a web
              developer.{' '}
            </p>
          </div>
          <div className="btn">
            <Link to="/about">
              <button>Learn</button>
            </Link>
          </div>
        </div>
        <div className="headShot">
          <img src={headShot} alt="My Headshot" />
        </div>
      </div>

      <h3>Explore More</h3>

      <div className="card">
        <div className="cards">
          <h2>Projects</h2>
          <Link to="/projects">
            <button>View</button>
          </Link>
        </div>
        <div className="cards">
          <h2>Resume</h2>
          <Link to={krystleResume} target="_blank" download>
            <button>Download</button>
          </Link>
        </div>
        <div className="cards">
          <h2>Blog</h2>
          <Link to="/blog">
            <button>Read</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
