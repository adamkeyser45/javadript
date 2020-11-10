const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Checkout {
    session: ID
  }
  
  type Query {
    githubLoginUrl: String!
  }
  `

  


module.exports = typeDefs;