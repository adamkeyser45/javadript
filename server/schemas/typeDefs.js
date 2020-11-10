const { gql } = require('apollo-server-express');

const typeDefs = gql`
  
  type Query {
    githubLoginUrl: String!
  }
  `

  


module.exports = typeDefs;