require('dotenv').config()
const express = require('express')
const server = express()

const PORT = process.env.PORT || 5000

server.get('/api/users', ( req,res) => {
    res.json([
        {id: 1, username: 'krystle'}
    ])
})

server.listen( PORT, () => {
    console.log( `listening on ${PORT}`)
})