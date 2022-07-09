const nodemailer = require('nodemailer');
const dotenv = require('dotenv')
dotenv.config()
var transporter = nodemailer.createTransport

    service: 'gmail',
    auth: {
        user: 'mitchell.krystle2@gmail.com'
        pass: 'thankGod26!'
    }

    module.exports = transporter;