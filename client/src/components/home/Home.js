import React from 'react'
import './home.css'
// import { Link } from 'react-router-dom'


const Home = () => {
  return (
  
    <div className='homepage'> 
     <div className='header'>
     <h2>Welcome to The Home Page</h2>
     <div>
      <img src='https://media.istockphoto.com/photos/communication-network-above-earth-for-global-business-and-finance-picture-id1358839342?b=1&k=20&m=1358839342&s=170667a&w=0&h=_iTZ-wwXUi-LIucKkKF278CFWTPwPH2u0qI2jqi2l8o='  alt="Tech"/>
     </div>

     </div>
     <div className='card'>
          <div className='cards'>
          <h2>Projects</h2>
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" alt="Projects" />
         
            <p> Projects I am currently working on</p>
          
          </div>
          <div className='cards'>
          <h2>Blog</h2>
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" alt="Projects" />
         
            <p> Projects I am currently working on</p>
          
          </div>
          </div>
    

     </div>
      
       
  
  )
}

export default Home
