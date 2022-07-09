require('dotenv').config()
const path = require('path')

const express = require('express')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'client/build')))




server.post('/send', (req,res) => {
    console.log((req.body))
    res.send(req.body)
})

const PORT = process.env.PORT || 5000

server.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

server.listen( PORT, () => {
    console.log( `listening on ${PORT}`)
})