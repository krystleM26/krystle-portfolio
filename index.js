require('dotenv').config()
const path = require('path')

const express = require('express')
const server = express()
const router = express.Router()
const cors = require('cors')
const mailer= require('nodemailer')
// const transporter = require('./config')



server.use(express.json())
server.use(express.static(path.join(__dirname, 'client/build')))

server.use('/', router)
server.use(cors({
  origin:['http://www.krystlemitchell.com/contact']
}));

server.get('/contact', (req,res) => {
  res,json({msg: 'cors enabled for contact'})
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

// Receive Emails Setup

const transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    },
  })
  transporter.verify((error) => {
    if (error) {
      console.log(error)
    } else {
      console.log('Ready To Send')
    }
  })


server.post('/contact', (req, res) => {
  const { name, email, message } = req.body

  const mail = {
    from: name,
    to: 'mitchell.krystle2@gmail.com',
    subject: 'Contact Form Submission',
    html: `<p> Name: ${name}</p><p> Email: ${email}</p><p>Message: ${message}</p>`,
  }

  transporter.sendMail(mail, (error, data) => {
    if (error) {
      res.json({ status: 'ERROR' })
    } else {
      res.json({ status: 'Message Sent' })
    }
  })


})


