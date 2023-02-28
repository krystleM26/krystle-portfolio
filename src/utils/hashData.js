const bcrypt = require('bcrypt')

const hashData = async (data, saltRounds = 10) => {
  try {
    const hashedData = await bcrypt.hash(data, saltRounds)
    return hashedData
  } catch (error) {
    throw error
  }
}

const verifyHashedData = async (unhashed, hashed) => {
  try {
    const match = await bcrypt.compare(unhashed, hashed)
  } catch (error) {
    throw error
  }
}
module.exports = { hashData, verifyHashedData }
