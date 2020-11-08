const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  facebookId: String,
  githubId: String
});

const User = mongoose.model('users', userSchema);

module.exports = User;