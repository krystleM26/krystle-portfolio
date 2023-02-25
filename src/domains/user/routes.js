const express = require('express')
const router = express.Router()
const { createNewUser } = require('./controller')

//signup

router.post('/signup', async (req, res) => {
  try {
    let { name, email, password } = req.body
    name = name.trim()
    email = email.trim() //.trim( removes white space)
    password = password.trim()

    if (!(name && email && password)) {
      throw Error('Empty input fields!')
    } else if (!/^[a-zA-Z]*$/.test(name)) {
      throw Error('Invalid name entered')
    } else if (password.length < 8) {
      throw Error('Password is too short!')
    } else {
      //good credentials and user can be created
      const newUser = await createNewUser({
        name,
        email,
        password,
      })
      res.status(200).json(newUser)
    }
  } catch (error) {
    res.status(400).send(error.message)
  }
})

module.exports = router