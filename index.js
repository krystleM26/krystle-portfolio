require('dotenv').config()
const path = require('path')

const express = require('express')
const server = express()
const router = express.Router()
const cors = require('cors')
const nodemailer = require('nodemailer')

//  Server Set-up

server.use(express.json())
server.use(express.static(path.join(__dirname, 'client/build')))

server.use('/', router)
server.use(cors())

server.get('/contact', cors(), (req, res) => {
  res, json({ msg: 'cors enabled for contact' })
})

server.get('/', (req, res) => {
  res.send('Hello World')
})

const PORT = process.env.PORT || 5000

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})

const transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: process.env.AUTH_EMAIL,
    password: process.env.AUTH_PASS,
  },
})

transporter.verify((error) => {
  if (error) {
    console.log(error)
  } else {
    console.log('Ready To Send')
  }
})

// Send Emails Setup
server.post('/contact', (req, res) => {
  const { name, email, message } = req.body

  const mail = {
    from: name,
    to: process.env.AUTH_EMAIL,
    subject: 'Contact Form Submission',
    html: `<p> Name: ${name}</p>
           <p> Email: ${email}</p>
           <p>Message: ${message}</p>`,
  }

  transporter.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: 'ERROR' })
    } else {
      res.json({ status: 'Message Sent' })
    }
  })
})
