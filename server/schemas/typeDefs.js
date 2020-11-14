const { gql } = require('apollo-server-express');

const typeDefs = gql`
  
  type Query {
    githubLoginUrl: String!
    reviews: [Review]
  }


  type Review {
    _id: ID
    review: String
    author: String
  }
`

  


module.exports = typeDefs;