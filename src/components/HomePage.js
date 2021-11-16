import React from 'react';
import '../App.css';

import Users from './users/Users';
import Search from './users/Search';
import Alert from './layout/Alert';

const HomePage = () => {
  
  return (
      <div className='container'>
        <Alert/>
        <Search/>
        <Users/>
      </div>
  );

}

export default HomePage;
