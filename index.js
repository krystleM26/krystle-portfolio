require('dotenv').config()
const path = require('path')

const express = require('express')
const transporter = require('./config')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'client/build')))




server.post('/send', (req,res) => {
   try {
    const mailOptions = {
        from: req.body.email,
        to: process.env.email,
        subject: req.body.message,
        html: `
        <p>You have a new contact requet. </p>
        <h3>Contact Details</h3>
        <ul>
            <li></li>
            </ul>
            `
       
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if(err) {
            res.status(500).send({
                success: true,
                message: 'Something went wrong. Try again later'
            })
        } else {
            res.send({
                success:true,
                message: " Thanks for contacting us. We will get back to you shortly"
            })
        }
    })
   }
 catch(error) {
    setResult({
      success: false,
      message:
        'ERROR!! Something is missing. Remember to fill out all the required fields',
    })
  }
})







const PORT = process.env.PORT || 5000

server.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

server.listen( PORT, () => {
    console.log( `listening on ${PORT}`)
})