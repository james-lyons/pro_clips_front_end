import React from 'react';
import { connect } from 'react-redux';
import { State, Props } from './editProfile.config';
import ProfileEditComponent from '../../components/ProfileEditComponent/profileEditComponent';
import {
    fetchUser,
    editUserUsername,
    editUserBio,
    editUserEmail,
    editUserPassword
} from '../../actions/userActions/userActions';

class ProfileEdit extends React.PureComponent<Props, State> {

    state: State = {
        userName: '',
        email: '',
        bio: '',
        password: '',
        password2: ''
    };

    private componentDidMount = async () => {
        let currentUser = localStorage.getItem('uid');
        let data = await this.props.fetchUser(currentUser);
        console.log(data)
    };

    private handleChange = (event:any) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    private editUsernameSubmit = (currentUser) => {
        event.preventDefault();
        console.log(currentUser)
    };

    private editBioSubmit = (currentUser) => {
        event.preventDefault();
        console.log(currentUser)
    };

    private editEmailSubmit = (currentUser) => {
        event.preventDefault();
        console.log(currentUser)
    };

    private editPasswordSubmit = (currentUser) => {
        event.preventDefault();
        console.log(currentUser)
    };

    render() {
        const { handleChange, editUsernameSubmit, editBioSubmit, editEmailSubmit, editPasswordSubmit } = this;
        return (
            <>
                <ProfileEditComponent
                    handleChange={ handleChange }
                    editUsernameSubmit={ editUsernameSubmit }
                    editBioSubmit={ editBioSubmit }
                    editEmailSubmit={ editEmailSubmit }
                    editPasswordSubmit={ editPasswordSubmit }
                />
            </>
        );
    }
};

export default connect(null, { fetchUser })(ProfileEdit);
