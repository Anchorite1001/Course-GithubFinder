import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import Spinner from '../layout/Spinner';

const UserPage = () => {
    const { login } = useParams();
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
    
    // get single user's info from github endpoint
    const getUser = async (username) => {
      setLoading(true);
      const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}$client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      setUser(res.data);
      setLoading(false);
    };

    useEffect(() => {
        getUser(login);
    },[login])

    if (loading)  return <Spinner />

    return(
        <Fragment>
            <Link to='/' className='btn btn-light'>
                Back to Search
            </Link>
            Hireable: {'  '}
            {user.hierable 
            ? <i className='fas fa-check text-success' />
            : <i className='fas fa-times-circle text-danger' />}
        </Fragment>
    )
}

export default UserPage;