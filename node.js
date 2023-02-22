const nodemailer = require('nodemailer')
const Imap = require('imap')
import './client/src/components/Contact'

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mitchell.krystle2@gmail.com',
    pass: 'thankGod26!',
  },
})

let imap = new Imap({
  user: 'mitchell.krystle2@gmail.com',
  pass: 'thankGod26!',
  host: 'imap.gmail.com',
  port: 933,
  tls: true,
})
imap.connect().then(() => {
  console.log('Connected to the email server')
})

imap.openBox('INBOX', true).then(() => {
  console.log('Opened mailbox')
})

imap.search(['ALL']).then((results) => {
  console.log('Found ' + results.length + ' messages')
})

imap
  .fetch(results, {
    bodies: ['TEXT'],
    markSeen: true,
  })
  .then((messages) => {
    console.log('Fetched ' + messages.length + ' messages')
  })

imap.end()

let mailOptions = {
  from: 'mitchell.krystle2@gmail.com ',
  to: 'mitchell.krystle2@gmail.com',
  subject: 'Sending Email using Node.js',
  text: ' message goes here',
}

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error)
  } else {
    console.log('Email Sent:' + info.response)
  }
})
