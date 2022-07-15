import axios from 'axios'
import React, { useState } from 'react'
import './contact.css'


function Contact() {
  const [formInputs, setFormInputs] = useState("Submit")
  handleSubmit((e) => {
    e.preventDefault()
    axios({
      method: "POST",
      url: "http://localhost:9000/contact",
      data: formInputs
    }).then ((res) => {
      if(res.data.status === 'success') {
        alert(`Thank you, ${name}, your message has been sent `);
        resetForm()
      } else if( res.data.status === 'fail') {
        alert('Message failed to send')
      }

    })

  })

  resetForm(){
    setSFormInput({name: ‘’, email: ‘’, message: ‘’})
  }

  return (
    <div className="container">
      <h2>Contact Me!</h2>
      <form onSubmit={handleSubmit}>
          <div className="form-area">
            <label htmlFor='name'>Name:</label>
            <input className='form-control'
              type="text"
              name="name"
              required
              placeholder="Name"
            />
          </div>
          <div className="form-area">
            <label>Email:</label>
            <input
              type="text"
              className='form-control'
              name="email"
              required
              placeholder="Email Address"
            />
          </div>
          <div className="form-area">
            <label>Message:</label>
            <textarea
              type="text"
              name="message"
              required
              placeholder="Want to learn more? Leave a message."
            ></textarea>
          </div>
        
        <button type="submit">{formInputs}</button>
      </form>
    </div>
  )
}

export default Contact
