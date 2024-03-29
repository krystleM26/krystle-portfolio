const nodemailer = require('nodemailer')
const { AUTH_EMAIL, AUTH_PASS } = process.env

let transporter = nodemailer.createTransport({
  host: 'hotmail.com',
  auth: {
    user: AUTH_EMAIL,
    pass: AUTH_PASS,
  },
})

//test transporter
transporter.verify((error, success) => {
  if (error) {
    console.log(error)
  } else {
    console.log('Ready for Message')
    console.log(success)
  }
})

const sendEmail = async (mailOptions) => {
  try {
    await transporter.sendMail(mailOptions)
  } catch (error) {
    throw error
  }
}

module.exports = sendEmail
