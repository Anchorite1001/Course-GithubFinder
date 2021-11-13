import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

import Users from './users/Users';
import Search from './users/Search';
import Alert from './layout/Alert';

class MainControl extends Component {
  state = {
    users:[],
    user: {},
    loading: false,
    alert: null,
  };

  // main search users method
  searchUsers = async text => {
    this.setState({ loading: true })
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}$client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({
      users: res.data.items,
      loading: false,
    })
  };

  // get single user's info from github endpoint
  getUser = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}$client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({
      user: res.data,
      loading: false
    })
  }

  // clear users from search board
  clearUsers =  () => {
    this.setState({
      users: [],
      loading: false,
    })
  };
  
  // set alert for no-text search
  setAlert = (msg, type) => {
    this.setState({
      alert: { msg, type }
    });

    setTimeout(() => this.setState({
      alert: null
    }), 5000);
  };

  render() {
    const { users, loading } = this.state;
    
    return (
        <div className='container'>
          <Alert alert={this.state.alert}/>
          <Search 
          searchUsers={this.searchUsers}
          clearUsers = {this.clearUsers} 
          showClear = {users.length > 0 ? true : false}
          setAlert={this.setAlert}
          />
          <Users loading={loading} users={users} />
        </div>
    );
  }
  
}

export default MainControl;
