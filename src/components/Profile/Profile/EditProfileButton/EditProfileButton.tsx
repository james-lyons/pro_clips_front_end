import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const EditProfileButton: React.SFC<{}> = () => {

    const theme = localStorage.getItem('theme');

    return (
        <Link to="/accounts" id='profile-edit-button'>
            <Button
                basic
                size='tiny'
                color='black'
                inverted={ theme === 'dark' }
            >
                Edit Profile
            </Button>
        </Link>
    );
};

export default EditProfileButton;