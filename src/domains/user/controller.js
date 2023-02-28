const User = require('./model')
const { hashData, verifyHashedData } = require('../../utils/hashData')
const createToken = require('../../utils/createToken')

const authenticateUser = async (data) => {
  try {
    const { email, password } = data
    const fetchedUser = await User.findOne({
      email,
    })
    if (!fetchedUser) {
      throw Error('Invalid Email Entered!')
    }
    const hashedPassword = fetchedUser.password
    const passwordMatch = await verifyHashedData(password, hashedPassword)

    if (!passwordMatch) {
      throw Error('Invalid password')
    }
    //create user token
    const tokenData = { userID: fetchedUser.id, email }
    const token = await createToken(tokenData)

    //assign user token
    fetchedUser.token = token
    return fetchedUser
  } catch (error) {
    throw error
  }
}

const createNewUser = async (data) => {
  try {
    const { name, email, password } = data
    //check user doesn't exist
    const existingUser = await User.findOne({ email })

    if (existingUser) {
      throw Error('User with the provided email already exists')
    }

    //has password
    const hashedPassword = await hashData(password)
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    })

    //save user
    const createdUser = await newUser.save()
    return createdUser
  } catch (error) {
    throw error
  }
}

module.exports = { createNewUser, authenticateUser }
