require('dotenv').config()
const path = require('path')
const express = require('express')

const { google } = require('googleapis')
const bodyParser = require('body-parser')
const cors = require('cors')
const mailer = require('nodemailer')

// OauthClient Set up//

const OAuth2 = google.auth.OAuth2
const oauth2Client = new OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  'https://developers.google.com/oauthplayground',
)
oauth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN,
})
const accessToken = oauth2Client.getAccessToken()

// Express

const server = express()
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

const router = express.Router()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'client/build')))

server.use('/', router)
server.use(
  cors({
    origin: ['http://www.krystlemitchell.com/contact'],
  }),
)

server.get('/contact', (req, res) => {
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

// Receive Emails Setup

const transporter = mailer.createTransport({
  host: 'smpt.gmail.com',
  port: 9000,
  secure: true,
  auth: {
    type: 'OAuth2',
    user: process.env.G_MAIL,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
    accessToken: accessToken
  }
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
    to: 'greencodeai@gmail.com',
    subject: 'Contact Form Submission',
    html: `<p> Name: ${name}</p><p> Email: ${email}</p><p>Message: ${message}</p>`,
  }

  transporter.sendMail(mail, (error, res) => {
    if (error) {
      res.json({ status: 'ERROR' })
    } else {
      res.json({ status: 'Message Sent' })
    }
  })
})
