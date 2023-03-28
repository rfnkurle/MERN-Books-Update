
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

function App() {
  return (
    <div className="App">
      
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route 
              path="/" 
             
            />
            <Route 
              path="/saved" 
             
            />
            <Route 
              path='*' 
              element={<h1 className="display-2">404 What did you do?!</h1>}
            />
          </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;
