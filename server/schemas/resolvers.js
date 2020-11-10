const { User } = require("../models");
const keys = require("../config/keys");

const resolvers = {
    Query: {
        githubLoginUrl: () =>
          `https://github.com/login/oauth/authorize?client_id=${
            keys.githubClientId
          }&scope=user`,
      }
};
module.exports = resolvers;
