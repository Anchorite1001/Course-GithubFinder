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

            <div className='card grid-2'>
                <div className='all-center'>
                    <img src={user.avatar_url} 
                    className='round-img' alt=''
                    style={{width: '150px'}}/>

                    <h1>{user.name}</h1>
                    <p>Location: {user.location}</p>
                </div>
                <div>
                    {user.bio && 
                    <Fragment>
                        <h3>Bio</h3>
                        <p>{user.bio}</p>
                    </Fragment>}
                    <a href={user.html_url}
                    className='btn btn-dark my1'>
                        Visit Github Profile
                    </a>
                    <ul>
                        <li>
                            {login && 
                            <Fragment>
                                <strong>Username: </strong> {login}
                            </Fragment>}
                        </li>
                        <li>
                            {user.company && 
                            <Fragment>
                                <strong>Company: </strong> {user.company}
                            </Fragment>}
                        </li>
                        <li>
                            {user.blog && 
                            <Fragment>
                                <strong>Website: </strong> {user.blog}
                            </Fragment>}
                        </li>
                    </ul>
                </div>
            </div>
            <div className='card text-center'>
                <div className='badge badge-primary'>Followers: {user.followers}</div>
                <div className='badge badge-success'>Following: {user.following}</div>
                <div className='badge badge-light'>Public Repos: {user.public_repos}</div>
                <div className='badge badge-dark'>Public Gists: {user.public_gists}</div>
            </div>
        </Fragment>
    )
}

export default UserPage;