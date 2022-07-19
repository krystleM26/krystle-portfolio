import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import ProjectsImg from '../../assets/projectsImg.png'
import headShot from '../../assets/HeadshotMe.png'
import codeGreen from '../../assets/codeGreen.png'

const Home = () => {
  return (
    <div className="homepage">
      <div className="header">
        <div>
          <h2>Greetings!</h2>
          <div className="text-content">
            <p>
              {' '}
              My name is Krystle and I am a software engineer. I enjoy creating
              pathways across the web that helps make life easier for users
              around the world.{' '}
            </p>
          </div>
        </div>
        <div>
          <img className="headShot" src={headShot} alt="My Headshot" />
        </div>
      </div>
      <div className="card">
        <div className="cards">
          <h2>Projects</h2>
          <img src={ProjectsImg} className="projectImg" alt="Projects" />
          <Link to="/projects">
            <button>View Projects</button>
          </Link>
        </div>
        <div className="cards">
          <h2>Blog</h2>
          <img src={codeGreen} className="codeGreen" alt="Projects" />
          <a href="https://medium.com/green-code">
            <button>View Blog</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
