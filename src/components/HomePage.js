import React, { useState, useContext } from 'react';
import axios from 'axios';
import '../App.css';

import Users from './users/Users';
import Search from './users/Search';
import Alert from './layout/Alert';

import GithubContext from '../context/github/githubContext';

const HomePage = () => {
  const githubContext = useContext(GithubContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  // clear users from search board
  const clearUsers =  () => {
    setUsers([]);
    setLoading(false);
  };
  
  // set alert for no-text search
  const showAlert = (msg, type) => {
    setAlert({ msg, type });

    setTimeout(() => setAlert(null), 5000);
  };
    
  return (
      <div className='container'>
        <Alert alert={alert}/>
        <Search 
        clearUsers = {clearUsers} 
        showClear = {users.length > 0 ? true : false}
        showAlert={showAlert}
        />
        <Users loading={loading} users={githubContext.users} />
      </div>
  );

}

export default HomePage;
