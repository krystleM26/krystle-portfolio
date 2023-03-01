const express = require('express')
const router = express.Router()
const { createNewUser, authenticateUser } = require('./controller')
const auth = require('./../../middleware/auth')
const {
  sendVerificationOTPEmail,
} = require('./../email_verification/controller')

//protected route
router.get('/privateData', auth, (req, res) => {
  console.log('world', res.body)
  res
    .status(200)
    .send(`You're in the private territory of ${req.currentUser.email}`)
})

//signin

router.post('/', async (req, res) => {
  try {
    let { email, password } = req.body
    email = email.trim()
    password = password.trim()

    if (!(email && password)) {
      throw Error('Empty credentials supplied')
    }
    const authenticatedUser = await authenticateUser({ email, password })
    res.status(200).json(authenticatedUser)
  } catch (error) {
    res.status(400).send(error.message)
  }
})

//signup

router.post('/signup', async (req, res) => {
  console.log('hello', req.body)
  try {
    let { name, email, password } = req.body
    name = name.trim()
    email = email.trim() //.trim( removes white space)
    password = password.trim()

    if (!(name && email && password)) {
      throw Error('Empty input fields!')
    } else if (!/^[a-zA-Z]*$/.test(name)) {
      throw Error('Invalid name entered')
    } else if (password.length >= 8) {
      throw Error('Password is too long!')
    } else {
      //good credentials and user can be created
      const newUser = await createNewUser({
        name,
        email,
        password,
      })
      await sendVerificationOTPEmail(email)
      res.status(200).json(newUser)
    }
  } catch (error) {
    res.status(400).send(error.message)
  }
})

module.exports = router
