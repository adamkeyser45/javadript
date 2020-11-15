import React from 'react';

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import './App.css';
import Nav from './components/Nav'

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql'
});

function App() {

  return (

    <ApolloProvider client={client}>
      <div>
        <Nav /> 
      </div>
    </ApolloProvider>

  );
}

export default App;
