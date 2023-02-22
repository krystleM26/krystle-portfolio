require('dotenv').config()
const path = require('path')
const PORT = process.env.PORT || 9000
const bodyParser = require('body-parser')
const cors = require('cors')

// Express
const express = require('express')
const server = express()
const userController = express.Router()

//MiddleWare
server.use(express.static(path.join(__dirname, 'client/build')))
server.use(express.json())
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())
server.use(cors())
server.use('/', userController)

// Get retrieve data
userController.get('/', (req, res) => {
  User.find({}, (err, result) => {
    res.status(200).json({
      data: result,
    })
  })
})

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

// Start server

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`)
})
