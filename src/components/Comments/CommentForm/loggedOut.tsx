import React from 'react';
import { Link } from 'react-router-dom';

const LoggedOut: React.SFC<{}> = () => {
    return (
        <div id='clip-page-login-message'>
            <span><Link to="/login">Login</Link> to like, comment, or reply!</span>
        </div>
    );
};

export default LoggedOut;