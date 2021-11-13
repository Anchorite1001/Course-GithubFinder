import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/layout/Navbar';
import About from './components/pages/About'
import MainControl from './components/MainControl';

// as navbar use link and shows in every page, better put it here within the router.
const App = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<MainControl />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </div>
  )
};

export default App;
