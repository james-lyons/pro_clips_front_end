import React from 'react';
import { connect } from 'react-redux';
import { State, Props } from './profile.config';
import ProfileComponent from '../../components/profileComponent/profileComponent';

class Profile extends React.PureComponent<Props, State> {

    state: State = {

    };

    private handleChange = () => {

    };

    private handleSubmit = () => {

    };

    render() {
        return (
            <>
                <ProfileComponent />
            </>
        );
    }
};

export default Profile;
