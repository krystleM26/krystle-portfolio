require('dotenv').config()
const path = require('path')
const multiparty = require("multiparty");
const express = require('express')
const server = express()
const router = express.Router()
const cors = require('cors')
const nodemailer = require('nodemailer')

//  Server Set-up

server.use(express.json())
server.use(express.static(path.join(__dirname, 'client/build')))

server.use('/', router)

server.get('/contact', cors(), (req, res) => {
  res.json({ msg: 'cors enabled for contact' })
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
  host: "smtp-mail.outlook.com",
  port: 587,
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASSWORD,
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

server.post('/contact', (req,res) => {
  let form = new multiparty.Form();
  let data = {}

  const mail = {
    from: data.name,
    to: process.env.AUTH_EMAIL,
    message: `${data.name}, ${data.email}, ${data.message}`
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Something went wrong.");
    } else {
      res.status(200).send("Email successfully sent to recipient!");
    }
  });


})


 


