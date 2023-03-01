import React, { useState } from 'react'
import './contact.css'

const ContactForm = () => {
  const [status, setStatus] = useState('Submit')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    const { name, email, message } = e.target.elements
    let details = {
      name: name.value,
    }
  }

  return (
    <div className="main">
      <h2>Get In Touch</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            type="text"
            id="name"
            required
            placeholder="Name"
          />
        </div>
        <div>
          <label htmlFor="name">Email:</label>
          <input
            name="email"
            type="email"
            id="email"
            required
            placeholder="Email"
            // onChange={handleFormInputs}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <input
            name="message"
            id="message"
            required
            placeholder="Message"
            // onChange={handleFormInputs}
          />
        </div>

        <button type="submit">{status}</button>
      </form>
    </div>
  )
}

export default ContactForm
