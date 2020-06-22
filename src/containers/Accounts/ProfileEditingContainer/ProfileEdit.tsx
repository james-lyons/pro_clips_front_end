import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { State, Props, Event, ReduxState } from './config';
import { fetchCurrentUser, editUserProfile, editUserPassword } from '../../../redux/actions/userActions/userActions';
import ProfileEditComponent from '../../../components/Accounts/ProfileEdit/ProfileEditComponent';

class ProfileEdit extends React.PureComponent<Props & RouteComponentProps, State> {

    state: State = {
        bio: '',
        userName: '',
        profile_image: '',
        editProfileErrors: null,
        editProfileMessage: null,
        edit_profile_success: null,
        edit_profile_picture_success: null
    };

    componentDidMount = async () => {
        let { userName, bio, profile_image } = this.props.currentUser;

        this.setState({
            bio,
            userName,
            profile_image
        });
    };

    private handleChange = (event: Event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    private editUserSubmit = async () => {
        event.preventDefault();
        let currentUserId = localStorage.getItem('uid');
        let { userName, bio } = this.state;
        let { history, currentUser, editUserProfile } = this.props;

        if (userName !== currentUser.userName && bio !== currentUser.bio) {
            let profileChanges = { userName, bio };
            await editUserProfile(currentUserId, profileChanges);
            history.push(`/${ userName }`);

        } else if (userName !== currentUser.userName) {
            let profileChanges = { userName };
            await editUserProfile(currentUserId, profileChanges);
            history.push(`/${ userName }`);

        } else if (bio !== currentUser.bio) {
            let profileChanges = { bio };
            await editUserProfile(currentUserId, profileChanges);
            history.push(`/${ userName }`);

        };

        if (this.props.editProfileErrors) {
            let { editProfileErrors, editProfileMessage } = this.props;

            this.setState({
                editProfileErrors,
                editProfileMessage
            });
            return;

        } else {
            this.setState({
                editProfileErrors: null,
                editProfileMessage: null,
                edit_profile_success: 'Success!'
            });
        };
    };

    private editProfilePictureSubmit = async () => {
        event.preventDefault();
        let userId = localStorage.getItem('uid');
        let { profile_image } = this.state;
        let profileChanges = { profile_image };
        let { history, currentUser,  editUserProfile } = this.props;

        await editUserProfile(userId, profileChanges);
        history.push(`/${ currentUser.userName }`)

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
                <button onClick={ () => console.log(this.props.currentUser)}>button</button>
            </>
        );
    };
};

const mapStateToProps = (state: ReduxState) => {
    return {
        currentUser: state.userReducer.currentUser,
        editProfileErrors: state.userReducer.editProfileErrors,
        editProfileMessage: state.userReducer.editProfileMessage
    };
};

export default connect(mapStateToProps,
    { fetchCurrentUser, editUserProfile, editUserPassword })
(withRouter(ProfileEdit));