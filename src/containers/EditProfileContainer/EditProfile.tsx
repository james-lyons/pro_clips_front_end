import React from 'react';
import { connect } from 'react-redux';
import { State, Props } from './editProfile.config';
import EditProfileComponent from '../../components/editProfileComponent/editProfileComponent';

class EditProfile extends React.PureComponent<Props, State> {

    state: State = {

    };

    private handleChange = () => {

    };

    private handleSubmit = () => {

    };

    render() {
        return (
            <>
                <EditProfileComponent />
            </>
        );
    }
};

export default EditProfile;
