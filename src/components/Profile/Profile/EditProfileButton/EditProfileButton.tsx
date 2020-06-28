import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const EditProfileButton: React.SFC<{}> = () => {
    return (
        <Link to="/accounts" id='profile-edit-button'>
            <Button size='mini' basic color='black'>
                Edit Profile
            </Button>
        </Link>
    );
};

export default EditProfileButton;