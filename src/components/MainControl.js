import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

import Users from './users/Users';
import Search from './users/Search';
import Alert from './layout/Alert';

// cross component states: context / redux / store in app component.

class MainControl extends Component {
  state = {
    users:[],
    loading: false,
    alert: null,
  };

  searchUsers = async text => {
    this.setState({ loading: true })
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}$client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({
      users: res.data.items,
      loading: false,
    })
  };

  clearUsers =  () => {
    this.setState({
      users: [],
      loading: false,
    })
  };

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
