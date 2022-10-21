require('dotenv').config()
const path = require('path')

const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const app = express()

//MiddleWare
app.use(express.static(path.join(__dirname, 'client/build')))
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())

//Routing
app.get('/', (req, res) => {
  res.json({ message: 'Hello from server!' })
})
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})
const PORT = process.env.PORT || 5000

//Send API

app.post('/send', async (req, res) => {
  try {
    const { name, email, message } = req.body
    res.json({ msg: 'server' })
  } catch (error) {
    res.status(404).json({ msg: 'Error X' })
  }
})

app.post('/contact', (req, res) => {
  console.log(req.body)
  res.json({ msg: 'Hello message is here' })
})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`)
})
