
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Navbar from './components/Navbar';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';

//universal uri for app
const httpLink = createHttpLink({
  uri: '/graphql',
});
//create user context
const authLink = setContext((_, { headers }) => {
  // grabs token from local storage that was added through helper
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
//configure apollo client for provider
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>

      
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route 
              path="/" 
             element={<SearchBooks/>} 
            />
            <Route 
              path="/saved" 
              element={<SavedBooks/>} 
            />
            <Route 
              path='*' 
              element={<h1 className="display-2">404 What did you do?!</h1>}
            />
          </Routes>
        </>
      </Router>
      </ApolloProvider>
  );
}

export default App;
