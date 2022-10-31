require('dotenv').config()
const dotenv = require('dotenv')
dotenv.config()
const path = require('path')
const nodemailer = require('nodemailer')
const PORT = process.env.PORT || 9000
const bodyParser = require('body-parser')
const cors = require('cors')
// Express
const express = require('express')
const app = express()
const userController = express.Router()

//Mongoose setup
const mongoose = require('mongoose')

//MiddleWare
app.use(express.static(path.join(__dirname, 'client/build')))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use('/', userController)

// Send email with nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
  port: 465,
})

const verifyUserEmail = async (name, email, message, res) => {
  try {
    let info = await transporter.sendMail({
      from: email,
      to: process.env.EMAIL,
      subject: 'Hello' + name,
      text: `<div>message: ${message}</div>`,
    })
    if (info) {
      res.status(200).json({ msg: 'Successful' })
    }
  } catch (err) {
    res.status(400).json({ msg: 'Error' })
  }
}

//Routing

app.get('/', (req, res) => {
  res.status(200).json({
    status: `Server Run successfully`,
  })
})
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

app.post('/contact', (req, res) => {
  console.log(req.body)
  const { name, email, message } = req.body
  verifyUserEmail(name, email, message, res)
})

// Start server

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`)
  mongoose.connect('mongodb://localhost/test').then(() => {
    console.log(`Connected to mongoDB at port 27017 `)
  })
})
