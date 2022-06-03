require('dotenv').config()
const path = require('path')

const express = require('express')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'client/build')))



server.get('/api/users', ( req,res) => {
    res.json([
        {id: 1, username: 'krystle'}
    ])
})

const PORT = process.env.PORT || 5000

server.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

server.listen( PORT, () => {
    console.log( `listening on ${PORT}`)
})