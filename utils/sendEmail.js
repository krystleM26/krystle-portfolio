const dotenv = require('dotenv')
dotenv.config()
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
  port: 465,
  host: 'smtp.gmail.com',
})

module.exports = {
  verifyUserEmail: async function verifyUserEmail(name, email, message) {
    try {
      let info = await transporter.sendMail({
        from: process.env.Email,
        to: email,
        subject: 'Hello' + name,
        message: 'Thank you for your email, I will be in touch within 24-hours',
      })
    } catch (err) {
      console.log(err)
    }
  },
}
