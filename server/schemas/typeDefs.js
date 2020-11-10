const { gql } = require('apollo-server-express');

const typeDefs = gql`
  
  type Query {
    githubLoginUrl: String!
  }

  type AuthPayload {
    githubToken: String!
    user: User!
  }
  
  type Mutation {
    ...
    authorizeWithGithub(code: String!): AuthPayload!
  }
  `

  


module.exports = typeDefs;