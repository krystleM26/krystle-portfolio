import React from 'react'
import '../home/home.css'
// import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="pages">
          <div className='content'>
     <div className='header'>
     <h2>Welcome to The Home Page</h2>
     
     </div>
   
          <div className='card'>
          <h4>Projects</h4>
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" alt="Projects" />
          <div class="container">
            <p> Projects I am currently working on</p>
           </div>
          </div>
      </div>
       
    </div>
  )
}

export default Home
