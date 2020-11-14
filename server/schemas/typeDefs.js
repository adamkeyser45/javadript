const { gql } = require('apollo-server-express');

const typeDefs = gql`
  
  type Query {
    githubLoginUrl: String!
    users: [User]
    authorizeWithGithub(code: String!): AuthPayload!
  }

  type Review {
    _id: ID
    review: String
    author: String
  }

  type User {
    _id: ID
    githubId: String
    displayName: String
    reviews: [Review]
  }

  type AuthPayload {
    githubToken: String!
    user: User!
  }

  type Mutation {
    removeUser(githubId: String!): User
    authorizeWithGithub(code: String!): AuthPayload!
  }

`
module.exports = typeDefs;