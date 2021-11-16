import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import Navbar from './components/layout/Navbar';
import About from './components/pages/About'
import HomePage from './components/HomePage';
import UserPage from './components/users/UserPage';
import NotFound from './components/pages/NotFound';

// as navbar use link and shows in every page, better put it here within the router. 
const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
              <Navbar />
              <Routes>
                <Route exact path='/' element={<HomePage />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/user/:login' element={<UserPage />} />
                <Route element={<NotFound />}/>
              </Routes>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  )
};

export default App;
