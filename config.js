const nodemailer = require('nodemailer');
const dotenv = require('dotenv')
dotenv.config()
const contactEmail = nodemailer.createTransport({

    service: 'gmail',
    auth: {
        port: 9000,
        type: 'OAuth2',
        user: 'mitchell.krystle2@gmail.com',
        pass: 'xapyyulimeegmgwa'
    }
})

contactEmail.verify()



    module.exports = transporter;