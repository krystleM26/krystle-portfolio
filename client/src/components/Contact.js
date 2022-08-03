import { Axios } from "axios";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState("Submit");

  const updateInput = e => {
    setFormData({
      ...formData,
      [e.target.name]:e.target.value,
    })
  }

  const sendEmail = () => {
    Axios.post(
     "localhost:9000/contact",
     formData
    )
    
  }
  const handleSubmit =  (e) => {
    e.preventDefault();
    sendEmail()
    setFormData({
      name: '',
      email: '',
      message:'',
    })
    
  
    
  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required  placeholder="Name" onChange={updateInput} value={formData.name || ""}/>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required  placeholder="Email" onChange={updateInput} value={formData.email || ""} />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" required  placeholder="Message" onChange={updateInput} value={formData.message || ""} />
      </div>
      <button type="submit" onsubmit={handleSubmit}>Submit</button>
    </form>
  );
};
}

export default ContactForm