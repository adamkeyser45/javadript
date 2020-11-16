import React from 'react';

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import './App.css';
import Nav from './components/Nav'

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
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
