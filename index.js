const bodyParser = require('body-parser')
const dotenv = require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()

//Middleware

app.use(express.json())
app.use(bodyParser.json())
app.use(cors())

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}...`)
})
