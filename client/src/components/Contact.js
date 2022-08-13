import { Axios } from 'axios'
import React, { useState } from 'react'
import './contact.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const updateInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const sendEmail = () => {
    axios.post('localhost:9000/contact', {formData})
    .then(res=> {
      console.log(res);
      console.log(res.data);
      window.location = "/retrieve" 
  }}
  const handleSubmit = (e) => {
    e.preventDefault()
    sendEmail()
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }

  return (
    <div className="main">
      <h2>Get In Touch</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          required
          placeholder="Name"
          onChange={updateInput}
         
        />

        <div>
          <input
            type="email"
            id="email"
            required
            placeholder="Email"
            onChange={updateInput}
          />  
        </div>
        <div>
          <input
            id="message"
            required
            placeholder="Message"
            onChange={updateInput}
            
          />
        </div>

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default ContactForm
