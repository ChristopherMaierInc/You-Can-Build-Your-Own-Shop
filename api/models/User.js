const mongoose = require('./init')
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new mongoose.schema({
  firstName: String;
  lastName: String
})

userSchema.plugin(passportLocalMongoose, {
  userNameField: 'email', // User email not username
  userNameLowerCase: 'true', //Treat emails as case-sensitive
  session: false // We'll use JWT
})

const User = mongoose.model('User', {

})

module.exports = User
