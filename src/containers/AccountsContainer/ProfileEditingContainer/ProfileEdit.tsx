import React from 'react';
import { connect } from 'react-redux';
import ProfileEditComponent from '../../components/AccountComponent/ProfileEdit/ProfileEditComponent';
import { fetchUser, editUserProfile, editUserPassword } from '../../actions/userActions/userActions';
import { Props, State } from './config';

class ProfileEdit extends React.PureComponent<Props, State> {

    state: State = {
        userName: '',
        email: '',
        bio: '',
        profile_image: '',
        edit_profile_success: null,
        edit_profile_picture_success: null
    };

    private componentDidMount = async () => {
        let user = localStorage.getItem('uid');
        let data = await this.props.fetchUser(user);
        let { userName, email, bio, profile_image } = data.payload.data;

        this.setState({
            userName,
            email,
            bio,
            profile_image
        });
    };

    private handleChange = (event:any) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    private editUserSubmit = () => {
        event.preventDefault();
        let user = localStorage.getItem('uid');
        let { userName, email, bio } = this.state;
        let profileChanges = { userName, email, bio, id: user };
        this.props.editUserProfile(user, profileChanges);
        this.setState({
            edit_profile_success: 'Success!'
        });
    };

    private editProfilePictureSubmit = () => {
        event.preventDefault();
        let user = localStorage.getItem('uid');
        let { profile_image } = this.state;
        let updatedProfilePicture = { profile_image };
        this.props.editUserProfile(user, updatedProfilePicture);
        this.setState({
            edit_profile_picture_success: 'Success!'
        });
    };
    
    render() {
        const { userName, email, bio, profile_image } = this.state;
        const { handleChange, editUserSubmit, editProfilePictureSubmit } = this;

        return (
            <>
                <ProfileEditComponent
                    userName={ userName }
                    email={ email }
                    bio={ bio }
                    profile_image={ profile_image }
                    handleChange={ handleChange }
                    editUserSubmit={ editUserSubmit }
                    editProfilePictureSubmit={ editProfilePictureSubmit }
                />
            </>
        );
    };
};

export default connect(null, { fetchUser, editUserProfile, editUserPassword })(ProfileEdit);