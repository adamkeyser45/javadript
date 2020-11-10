const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Checkout {
    session: ID
  }
  
  type Query {
    helloWorld: String
  }`

  


module.exports = typeDefs;