const { User } = require("../models");

const resolvers = {
    Query: {
        githubLoginUrl: () =>
          `https://github.com/login/oauth/authorize?client_id=${
            process.env.CLIENT_ID
          }&scope=user`,
      }
};
module.exports = resolvers;
