import axios from 'axios'
import React, { useState } from 'react'
import { json } from 'stream/consumers'
import './contact.css'


function Contact() {
  const [formInputs, setFormInputs] = useState("Submit")
  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormInputs("Sending...")
    const { name, email, message} = e.target.elements;
     let info = {
      name: name.value,
      email: email.vale,
      message: message.value,
    };
      let response = await fetch("http://localhost:9000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      });
      setFormInputs("Submit");
      let result = await response.json();
      alert(result.status)

    };

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
              required
              placeholder="Name"
            />
          </div>
          <div className="label">
            <label>Email:</label>
            <input
              type="text"
              name="email"
              required
              placeholder="Email Address"
            />
          </div>
          <div className="label">
            <label>Message:</label>
            <textarea
              type="text"
              name="message"
              required
              placeholder="Want to learn more? Leave a message."
            ></textarea>
          </div>
        </div>
        <button type="submit">{formInputs}</button>
      </form>
    </div>
  )
}

export default Contact
