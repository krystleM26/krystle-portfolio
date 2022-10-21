require('dotenv').config()
const path = require('path')
const dotenv = require('dotenv')
dotenv.config()
const nodemailer = require('nodemailer')
const PORT = process.env.PORT || 9000
const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const app = express()

//MiddleWare
app.use(express.static(path.join(__dirname, 'client/build')))
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())

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
  res.json({ message: 'Hello from server!' })
})
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

app.post('/contact', (req, res) => {
  console.log(req.body)
  const { name, email, message } = req.body
  verifyUserEmail(name, email, message, res)
})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`)
})
