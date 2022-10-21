import React, { useState } from 'react'
import './contact.css'

const ContactForm = () => {
  const [status, setStatus] = useState('Submit')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending..')
    const { name, email, message } = e.target.elements
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    let response = await fetch('http://localhost:9000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset-utf-8',
      },
      body: JSON.stringify(details),
    })
    setStatus('Sent')
    let result = await response.json()
  }

  return (
    <div className="main">
      <h2>Get In Touch</h2>
      {status === 'Sent' ? (
        <h3>Message has been sent</h3>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" required placeholder="Name" />
          </div>
          <div>
            <label htmlFor="name">Email:</label>
            <input type="email" id="email" required placeholder="Email" />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <input id="message" required placeholder="Message" />
          </div>

          <button type="submit">{status}</button>
        </form>
      )}
    </div>
  )
}

export default ContactForm
