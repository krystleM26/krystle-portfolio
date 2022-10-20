require('dotenv').config()
const path = require('path')
const bodyParser = require('body-parser')

const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.static(path.join(__dirname, 'client/build')))

//Middleware

app.use(express.json())
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
  res.json({ message: 'Hello from server!' })
})

const PORT = process.env.PORT || 5000
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', index.html))
})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`)
})
