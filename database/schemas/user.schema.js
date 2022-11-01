const mongoose = require('mongoose')
var Schema = mongoose.Schema
const sha256 = require('sha256')

const UserSchema = new Schema({
  email: { type: String, required: true },
  hashPassword: { type: String, required: true },
})

UserSchema.methods.comparePassword = function comparePassword(password) {
  return this.hashedPassword === sha256(password)
}

module.exports = mongoose.model('User', UserSchema)
