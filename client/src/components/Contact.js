import axios from 'axios'
import React, { useState } from 'react'
import './contact.css'

const Contact = () => {
  
  const [formInputs, setFormInputs] = useState({
    name: '',
    message: '',
    email: '',
  })
  const [sending, setSending] = useState({
    loading: false,
    success: false,
    error: false,
  })
  const { error, success, loading } = sending;


  const handleSubmit = (e) => {
    setSending({...sending, loading: true })
    e.preventDefault()
    axios
      .post('/contact', formInputs)
      .then((res) => {
        if (res.status === 200) {
          setSending({
            ...sending,
            loading: false,
            success: true,
          })
        }
      })
      .catch((err) => {
        setSending({
          ...sending,
          loading: false,
          error: true,
        })
      })
  }

  const handleChange = (e) => {
    setFormInputs({
      ...formInputs,
      [e.target.name]: e.target.value,
    })
    e.preventDefault()
  }

  if ( error ){
    return <p>There is an error</p>
  }


  return (
    <div className="container">
      <h2>Contact Me</h2>
      {success ? (
        <p>Thank you for message. I will get back to you as soon as possible.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-area">
            <label htmlFor="name">Name:</label>
            <input
              className="formInputs"
              type="text"
              name="name"
              value={formInputs.name}
              onChange={handleChange}
              required
              placeholder="Name"
            />
          </div>
          <div className="form-area">
            <label>Email:</label>
            <input
              type="email"
              className="formInputs"
              value={formInputs.email}
              onChange={handleChange}
              name="email"
              required
              placeholder="Email Address"
            />
          </div>
          <div className="form-area">
            <label>Message:</label>
            <textarea
              className="formInputs"
              type="text"
              name="message"
              value={formInputs.message}
              onChange={handleChange}
              required
              placeholder="Want to learn more? Leave a message."
            ></textarea>
          </div>

          <button type="submit">{loading ? 'Sending ' : 'submit'}</button>
        </form>
      )}
    </div>
  )
}

export default Contact
