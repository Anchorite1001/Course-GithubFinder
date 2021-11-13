import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ alert }) => {
    Alert.propTypes = {
        alert: PropTypes.object.isRequired,
    }
    // check the css file if don't get this part.
    return (
        alert !== null && (
            <div className={`alert alert-${alert.type}`}> 
                <i className="fas fa-info-circle"/> {alert.msg}
            </div>
        )
    )
};

export default Alert;