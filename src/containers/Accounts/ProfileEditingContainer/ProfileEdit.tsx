import React from 'react';
import { connect } from 'react-redux';
import ProfileEditComponent from '../../../components/Accounts/ProfileEdit/ProfileEditComponent';
import { fetchCurrentUser, editUserProfile, editUserPassword } from '../../../redux/actions/userActions/userActions';
import { Props, State } from './config';

class ProfileEdit extends React.PureComponent<Props, State> {

    state: State = {
        bio: '',
        userName: '',
        profile_image: '',
        editProfileErrors: null,
        editProfileMessage: null,
        edit_profile_success: null,
        edit_profile_picture_success: null
    };

    private componentDidMount = async () => {
        let user = localStorage.getItem('uid');
        // let data = await this.props.fetchCurrentUser(user);
        let { userName, bio, profile_image } = this.props.currentUser;

        this.setState({
            bio,
            userName,
            profile_image
        });
    };

    private handleChange = (event:any) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    private editUserSubmit = async () => {
        event.preventDefault();
        let currentUserId = localStorage.getItem('uid');
        let { userName, bio } = this.state;
        let profileChanges = { userName, bio, id: currentUserId };

        if (userName !== this.props.currentUser.userName && bio !== this.props.currentUser.bio) {
            let profileChanges = { userName, bio, id: currentUserId };
            await this.props.editUserProfile(currentUserId, profileChanges);
        } else if (userName !== this.props.currentUser.userName) {
            let profileChanges = { userName, id: currentUserId };
            await this.props.editUserProfile(currentUserId, profileChanges);
        } else if (bio !== this.props.currentUser.bio) {
            let profileChanges = { bio, id: currentUserId };
            await this.props.editUserProfile(currentUserId, profileChanges);
        };

        if (this.props.editProfileErrors) {
            this.setState({
                editProfileErrors: this.props.editProfileErrors,
                editProfileMessage: this.props.editProfileMessage
            });
            console.log(this.state);
            return;
        } else {
            this.setState({
                editProfileErrors: null,
                editProfileMessage: null,
                edit_profile_success: 'Success!'
            });
        };
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
        const { userName, bio, profile_image, editProfileErrors, editProfileMessage } = this.state;
        const { handleChange, editUserSubmit, editProfilePictureSubmit } = this;

        return (
            <>
                <ProfileEditComponent
                    bio={ bio }
                    userName={ userName }
                    profile_image={ profile_image }
                    editProfileErrors={ editProfileErrors }
                    editProfileMessage={ editProfileMessage }
                    handleChange={ handleChange }
                    editUserSubmit={ editUserSubmit }
                    editProfilePictureSubmit={ editProfilePictureSubmit }
                />
            </>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        currentUser: state.userReducer.currentUser,
        editProfileErrors: state.userReducer.editProfileErrors,
        editProfileMessage: state.userReducer.editProfileMessage
    };
};

export default connect(mapStateToProps, { fetchCurrentUser, editUserProfile, editUserPassword })(ProfileEdit);