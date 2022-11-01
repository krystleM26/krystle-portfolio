require('dotenv').config()
const dotenv = require('dotenv')
dotenv.config()
const path = require('path')
const nodemailer = require('nodemailer')
const PORT = process.env.PORT || 9000
const bodyParser = require('body-parser')
const cors = require('cors')

//Google oAuth2 setup
const ejs = require('ejs')
const { google } = require('googleapis')
const { OAuth2 } = google.auth
const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground'
const {
  MAILING_SERVICE_CLIENT_ID,
  MAILING_SERVICE_CLIENT_SECRET,
  MAILING_SERVICE_REFRESH_TOKEN,
  SENDER_EMAIL_ADDRESS,
} = process.env

const Mailing = {}

const oauth2Client = new OAuth2(
  MAILING_SERVICE_CLIENT_ID,
  MAILING_SERVICE_CLIENT_SECRET,
  OAUTH_PLAYGROUND,
)

// OAUTH & NODEMAILER SEND EMAIL
Mailing.sendEmail = (data) => {
  oauth2Client.setCredentials({
    refresh_token: MAILING_SERVICE_REFRESH_TOKEN,
  })
  const accessToken = oauth2Client.getAccessToken()

  const smtpTransport = nodemailer.createTransport({
    services: 'gmail',
    auth: {
      type: 'OAuth2',
      user: SENDER_EMAIL_ADDRESS,
      clientId: MAILING_SERVICE_CLIENT_ID,
      clientSecret: MAILING_SERVICE_CLIENT_SECRET,
      refreshToken: MAILING_SERVICE_REFRESH_TOKEN,
      accessToken,
    },
  })
}

//Mongoose setup
const mongoose = require('mongoose')
const User = require('./database/models/user.model')
const sha256 = require('sha256')

// Express
const express = require('express')
const app = express()
const userController = express.Router()
const mailingController = express.Router()

//MiddleWare
app.use(express.static(path.join(__dirname, 'client/build')))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use('/', userController)
app.use('/mailing', mailingController)

// Get retrieve data
userController.get('/', (req, res) => {
  User.find({}, (err, result) => {
    res.status(200).json({
      data: result,
    })
  })
})

// Post add new User
userController.post('/add-user', (req, res) => {
  const { email, password } = req.body

  const userData = {
    email,
    hashedPassword: sha256(password),
  }

  const newUser = new User(userData)
  newUser
    .save()
    .then((data) => {
      res.status(200).send(data)
    })
    .catch((err) => {
      res.status(400).send('unable to save to database')
    })
})

// Mailing data oauth2
mailingController.post('/', (req, res) => {
  try {
    Mailing.sendEmail(req.query)
    res.status(200).json({ message: 'email sent successfully' })
  } catch (err) {
    generateServerErrorCode(res, 500, error)
  }
})

// Start server

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`)
  mongoose.connect('mongodb://localhost/test').then(() => {
    console.log(`Connected to mongoDB at port 27017 `)
  })
})
