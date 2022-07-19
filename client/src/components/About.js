import React from 'react'
import '../../src/App.css'
import headShot from '../assets/HeadshotMe.png'

const About = () => {
  return (
 <div  className='aboutMe'>



    <h2>Get to Know Me!</h2>
    <img className="headShot" src={headShot} alt="My Headshot" />
    <p>
    Hello, I am Krystle Mitchell a writer turned coder, who enjoys building user-friendly applications. I transitioned into web development because I always found myself recreating my blogsite for fun.
    To hone my skills in web development, I attended BloomTech's intensive 6-month Full Stack Web Development Boot-Camp.  My favorite part of the experience was creating APIs and connecting them to a customized front-end to facilitate a user-friendly experience.
    I would love to contribute to and improve business-integrated AI systems. I have learned that it is a smoother transition to work with AI as a software engineer due to the continuous study of algorithms and data structures, and deployment.
    My current tech stack includes; HTML, CSS, Javascript, Node.js, React, Express, and RESTFUL APIs.
    I have an interest in professional projects that involve working with AI. 
    If you would like to get to know me more simply contact me here: mitchell.krystle2@gmail.com or send me a message.
    </p>
  
 </div>


      
  
  )
}

export default About
