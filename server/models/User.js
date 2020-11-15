const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
      type: String,
      required: true,
      minlength: 5
    },
    githubId: {
      type: String,
      required: true
    },
    displayName: {
      type: String,
      required: true
    },
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Review'
      }
    ],
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const User = mongoose.model('users', userSchema);

module.exports = User;