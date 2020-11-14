const { gql } = require('apollo-server-express');

const typeDefs = gql`
  
  type Query {
    githubLoginUrl: String!
    reviews: [Review]
    users: [User]
  }

  type Review {
    _id: ID
    review: String
    author: String
  }

  type User {
    _id: ID
    githubId: String
  }

`

  


module.exports = typeDefs;