import React, { useState } from 'react'
import './contact.css'

function Contact() {
  const [formInputs, setFormInputs] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit =  (e) => {
    e.preventDefault()
   
    alert(`${formInputs.name}, your message has been sent, Cheers!.`)
  }

  const handleChange =  (e) => {
    const { name, value } = e.target
    setFormInputs({ ...formInputs, [name]: value })
    e.preventDefault()
  }

  return (
    <div className="container">
      <h2>Contact Me!</h2>
      <form onSubmit={handleSubmit}>
        <div className="contactData">
          <div className="label">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formInputs.name}
              onChange={handleChange}
              required
              placeholder="Name"
            />
          </div>
          <div className="label">
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={formInputs.email}
              onChange={handleChange}
              required
              placeholder="Email Address"
            />
          </div>
          <div className="label">
            <label>Message:</label>
            <textarea
              maxLength="250"
              type="text"
              name="message"
              value={formInputs.message}
              onChange={handleChange}
              required
              placeholder="Note"
            ></textarea>
          </div>
        </div>
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Contact
