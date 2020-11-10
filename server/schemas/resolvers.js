const { User } = require("../models");
require('dotenv').config()

const resolvers = {
    Query: {
        githubLoginUrl: () =>
          `https://github.com/login/oauth/authorize?client_id=${
            process.env.GITHUB_CLIENT_ID
          }&scope=user`,
      }
};
module.exports = resolvers;
