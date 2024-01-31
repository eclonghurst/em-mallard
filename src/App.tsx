import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import DisplayUsers from './queries/GET_USERS_DATA_QUERY';
import { Header } from './contentChef/contentChef';
import { GlobalReset } from '@sky-uk/ui-core';
import React from 'react';

function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-demo.mead.io/',
    cache: new InMemoryCache(),
  });

  return (
    <React.Fragment>
      <GlobalReset />
      <ApolloProvider client={client}>
        <div className="App">
          <div className="app-header">
            <Header />
          </div>
          <div className="users-body">
            <DisplayUsers />
          </div>
        </div>
      </ApolloProvider>
    </React.Fragment>
  );
}

export default App;
