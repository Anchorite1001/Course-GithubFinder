import React, { useState, useContext } from 'react';
import '../App.css';

import Users from './users/Users';
import Search from './users/Search';
import Alert from './layout/Alert';

import GithubContext from '../context/github/githubContext';

const HomePage = () => {
  const githubContext = useContext(GithubContext);
  const [alert, setAlert] = useState(null);

  // set alert for no-text search
  const showAlert = (msg, type) => {
    setAlert({ msg, type });

    setTimeout(() => setAlert(null), 5000);
  };
    
  return (
      <div className='container'>
        <Alert alert={alert}/>
        <Search 
        showAlert={showAlert}
        />
        <Users/>
      </div>
  );

}

export default HomePage;
