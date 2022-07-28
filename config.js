const nodemailer = require('nodemailer');
const dotenv = require('dotenv')
dotenv.config()
const contactEmail = nodemailer.createTransport({

    service: 'gmail',
    auth: {
        user: 'mitchell.krystle2@gmail.com',
        pass: 'gr33nCap8926'
    }
})

contactEmail.verify()



    module.exports = transporter;