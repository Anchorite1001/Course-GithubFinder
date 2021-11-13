import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/layout/Navbar';
import About from './components/pages/About'
import MainControl from './components/MainControl';
import UserPage from './components/users/UserPage';

// as navbar use link and shows in every page, better put it here within the router. 
const App = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<MainControl />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/user/:login' element={<UserPage />} />
        </Routes>
      </Router>
    </div>
  )
};

export default App;
