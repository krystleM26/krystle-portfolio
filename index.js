require('dotenv').config()
const path = require('path')
const express = require('express')
const app= express()
const router = express.Router()
const cors = require('cors')
const nodemailer = require('nodemailer')
const http = require("http");
const { response } = require('express');
const server = http.Server(app)


//  Server Set-up

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'client/build')))

app.use('/', router)
app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/contact', cors(), (req, res) => {
  res.json({ msg: 'cors enabled for contact' })
})

app.get('/', (req, res) => {
  res.send('Hello World')
})

const PORT = process.env.PORT || 5000

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})



app.post('/contact', (req,res) => {
 

  const transporter = nodemailer.createTransport({
    service: "outlook",
    auth: {
      user: process.env.AUTH_EMAIL,
      pass: process.env.AUTH_PASSWORD,
    },
  });

  const mail = {
    from:req.body.email,
    to: process.env.AUTH_EMAIL,
    message: `${req.body.name}, ${req.body.email}, ${req.body.message}`
  }

    const mailOptions = {
      from: req.body.email,
      to: process.env.AUTH_EMAIL,
      subject: "Contact Form Inquiry",
      text: req.body.message
    };

    transporter.sendMail(mailOptions,function(error, info){
      if(error){
        console.log(err)
        res.json({err: 'There is an error'})
      } else{
        console.log( "Email Sent:")
        res.json({message: 'I have recieved your Email'})
      }

      response.redirect("/")
    })





})


 


