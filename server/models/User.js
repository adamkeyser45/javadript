const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
  {
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