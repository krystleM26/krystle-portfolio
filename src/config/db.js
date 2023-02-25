require('dotenv').config()
const mongoose = require('mongoose') // helps you interact with the db

//uri
const { MONGODB_URI } = process.env

const connectToDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewURLParser: true,
      useUnifiedTopology: true,
    })
    console.log('DB Connected')
  } catch (error) {
    console.log(error)
  }
}

connectToDB()
