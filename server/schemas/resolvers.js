const { User, Review } = require("../models");
const keys = require("../config/keys");
const { requestGithubUser } = require("../utils/helpers");
let currentUser;

const resolvers = {
    Query: {
        githubLoginUrl: () =>
          `https://github.com/login/oauth/authorize?client_id=${
            keys.githubClientId
          }&scope=user`,
        users: async () => {
          return User.find()
        },
        me: () => currentUser,
    },
    Mutation: {
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
