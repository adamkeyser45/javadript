const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Checkout {
    session: ID
  }

  type User {
    _id: ID
    username: String
  }
  
  type Query {
    helloWorld: String
  }`

  


module.exports = typeDefs;