const { User, Review } = require("../models");
const keys = require("../config/keys");

const resolvers = {
    Query: {
        githubLoginUrl: () =>
          `https://github.com/login/oauth/authorize?client_id=${
            keys.githubClientId
          }&scope=user`,
        users: async () => {
          return User.find()
        }
    },
    Mutation: {
      removeUser: async (parent, args) => {
        await User.findOneAndDelete(args);
      }
    }
};
module.exports = resolvers;
