import React from 'react';
import PropTypes from 'prop-types';

const UserItem = (props) => {
    //traditionally (before react hooks were introduced), functional components are for stateless components.
    const { id, login, avatar_url, html_url } = props.user;

    return (
        <div className='card text-center'>
            <img 
            src={avatar_url} 
            alt=''
            className='round-img'
            style={{width: '60px'}}
            />
            <h3>{login}</h3>

            <div>
                <a 
                href={html_url} 
                className='btn btn-dark btn-sm my-1'
                >
                    More
                </a>
            </div>
        </div>
    )
    
};

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem; 