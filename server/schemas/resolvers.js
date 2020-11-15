const { User, Review } = require("../models");
const keys = require("../config/keys");
const { signToken } = require('../utils/auth');
const { requestGithubUser } = require("../utils/helpers");
const { AuthenticationError } = require('apollo-server-express');
let currentUser;

const resolvers = {
  Query: {
    user: async (parent, { email }) => {
      return User.findOne({ email })
        .select('-__v -password')
        .populate('reviews');
    },
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('reviews');

        return userData;
      }
      throw new AuthenticationError('Not logged in');
    },
    githubLoginUrl: () =>
      `https://github.com/login/oauth/authorize?client_id=${keys.githubClientId
      }&scope=user`,
    users: async () => {
      return User.find()
    },
    me: () => currentUser,
  },
  Mutation: {
    addUser: async (parent, args) => {
      //Here, the Mongoose User model creates a new user in the database with whatever is passed in as the args.
      const user = await User.create(args);
      // const token = signToken(user);

      return user;
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      // const token = signToken(user);
      return user;
    },

    removeUser: async (parent, args) => {
      await User.findOneAndDelete(args);
    },
    async authorizeWithGithub(parent, { code }) {
      // 1. Obtain data from GitHub
      let githubUser = await requestGithubUser({
        client_id: keys.githubClientId,
        client_secret: keys.githubClientSecret,
        code
      })
      // 2. Package the results in a single object, write the value to currentUser global variable
      currentUser = {
        name: githubUser.name,
        githubLogin: githubUser.login,
        githubToken: githubUser.access_token,
        avatar: githubUser.avatar_url
      }
      // 3. Return user data and their token
      return { user: currentUser, githubToken: githubUser.access_token }
    }
  }
};
module.exports = resolvers;
