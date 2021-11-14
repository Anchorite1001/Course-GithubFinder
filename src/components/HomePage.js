import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

import Users from './users/Users';
import Search from './users/Search';
import Alert from './layout/Alert';

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  // main search users method
  const searchUsers = async text => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}$client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
    setUsers(res.data.items);
    setLoading(false);
  };

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
        searchUsers={searchUsers}
        clearUsers = {clearUsers} 
        showClear = {users.length > 0 ? true : false}
        showAlert={showAlert}
        />
        <Users loading={loading} users={users} />
      </div>
  );

}

export default HomePage;
