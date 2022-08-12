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
    Axios.post('localhost:9000/contact', formData)
  }
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
          value={formData.name || ''}
        />

        <div>
          <input
            type="email"
            id="email"
            required
            placeholder="Email"
            onChange={updateInput}
            value={formData.email || ''}
          />
        </div>
        <div>
          <input
            id="message"
            required
            placeholder="Message"
            onChange={updateInput}
            value={formData.message || ''}
          />
        </div>

        <button type="submit" onSubmit={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default ContactForm
