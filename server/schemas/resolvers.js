const { User, Review } = require("../models");
const keys = require("../config/keys");

const resolvers = {
    Query: {
        githubLoginUrl: () =>
          `https://github.com/login/oauth/authorize?client_id=${
            keys.githubClientId
          }&scope=user`,
        reviews: async () => {
          return Review.find()
        }
      }
};
module.exports = resolvers;
