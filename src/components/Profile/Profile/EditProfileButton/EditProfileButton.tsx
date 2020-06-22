import React from 'react';
import { Link } from 'react-router-dom';

const EditProfileButton: React.SFC<{}> = ({}) => {
    return (
        <Link to="/accounts" style={{ marginLeft: '4rem' }}>
            <button style={{ borderRadius: '4px' }}>
                Edit Profile
            </button>
        </Link>
    );
};

export default EditProfileButton;