import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import headShot from '../../assets/HeadshotMe.png'
import KrystleResume from '../../assets/KrystleMitchell-Resume.pdf'

const Home = () => {
  return (
    <div className>
      <div className="top-content">
        <div className="header">
          <h2>Greetings!</h2>
          <div className="text-content">
            <p>
              {' '}
              My name is Krystle and I am a software engineer. I enjoy creating
              pathways across the web that helps make life easier for users
              around the world.{' '}
            </p>
          </div>
          <div className="btn">
        <Link to="/about">
          <button>About</button>
        </Link>
      </div>
        </div>
        <div className="headShot">
          <img src={headShot} alt="My Headshot" />
        </div>
        
      </div>
      
      <div className="card">
        <div className="cards">
          <h2>Projects</h2>
          <Link to="/projects">
            <button>View</button>
          </Link>
        </div>
        <div className="cards">
          <h2>Resume</h2>
          <Link to={KrystleResume} target="_blank" download>
            <button>Download</button>
          </Link>
        </div>
        <div className="cards">
          <h2>Blog</h2>
          <a href="https://medium.com/green-code">
            <button>View</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
