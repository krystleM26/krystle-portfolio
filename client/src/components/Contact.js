import React, { useState } from 'react'
import './contact.css'

const ContactForm = () => {
  const [status, setStatus] = useState('Submit')
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('Sending..')

    fetch('/contact', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((res) => {
        setStatus('Sent')
      })
      .catch((err) => {
        setStatus('Error')
      })
  }

  const handleFormInputs = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    e.preventDefault()
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
            <input
              name="name"
              type="text"
              id="name"
              required
              placeholder="Name"
              onChange={handleFormInputs}
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
              onChange={handleFormInputs}
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <input
              name="message"
              id="message"
              required
              placeholder="Message"
              onChange={handleFormInputs}
            />
          </div>

          <button type="submit">{status}</button>
          {status === 'Error' ? '<span>There is an error</span>' : null}
        </form>
      )}
    </div>
  )
}

export default ContactForm
