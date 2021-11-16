import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import GithubState from './context/github/GithubState';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About'
import HomePage from './components/HomePage';
import UserPage from './components/users/UserPage';

// as navbar use link and shows in every page, better put it here within the router. 
const App = () => {
  return (
    <GithubState>
    <Router>
      <div className='App'>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/user/:login' element={<UserPage />} />
          </Routes>
      </div>
    </Router>
    </GithubState>
  )
};

export default App;
