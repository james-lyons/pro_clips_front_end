import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { State, Props, Event, ReduxState } from './config';
import { fetchCurrentUser, editUserProfile, editUserPassword } from '../../../redux/actions/userActions/userActions';
import ProfileEditComp from '../../../components/Accounts/ProfileEdit/ProfileEditComp';

class ProfileEdit extends React.PureComponent<Props & RouteComponentProps, State> {

    state: State = {
        bio: '',
        username: '',
        profile_image: '',
        editProfileErrors: null,
        editProfileSuccess: false
    };

    componentDidMount = async () => {
        let { username, bio, profile_image } = this.props.currentUser;

        this.setState({
            bio,
            username,
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
        let { username, bio } = this.state;
        let { currentUser, editUserProfile } = this.props;

        if (username !== currentUser.username && bio !== currentUser.bio) {
            let profileChanges = { username, bio };
            await editUserProfile(currentUserId, profileChanges);

        } else if (username !== currentUser.username) {
            let profileChanges = { username };
            await editUserProfile(currentUserId, profileChanges);

        } else if (bio !== currentUser.bio) {
            let profileChanges = { bio };
            await editUserProfile(currentUserId, profileChanges);

        };

        if (this.props.editProfileErrors) {
            let { editProfileErrors } = this.props;

            this.setState({ editProfileErrors });
            return;

        } else {
            await this.setState({
                editProfileErrors: null,
                editProfileSuccess: !this.state.editProfileSuccess
            });
            return;
        };
    };

    private editProfilePictureSubmit = async () => {
        event.preventDefault();
        let userId = localStorage.getItem('uid');
        let { profile_image } = this.state;
        let profileChanges = { profile_image };
        let { editUserProfile } = this.props;

        await editUserProfile(userId, profileChanges); 
    };
    
    render() {
        const {
            bio,
            username,
            profile_image,
            editProfileErrors,
            editProfileSuccess
        } = this.state;
        const { handleChange, editUserSubmit, editProfilePictureSubmit } = this;

        return (
            <>
                <ProfileEditComp
                    bio={ bio }
                    username={ username }
                    profile_image={ profile_image }
                    editProfileErrors={ editProfileErrors }
                    editProfileSuccess={ editProfileSuccess }
                    handleChange={ handleChange }
                    editUserSubmit={ editUserSubmit }
                    editProfilePictureSubmit={ editProfilePictureSubmit }
                />
            </>
        );
    };
};

const mapStateToProps = (state: ReduxState) => {
    return {
        currentUser: state.userReducer.currentUser,
        editProfileErrors: state.userReducer.editProfileErrors
    };
};

export default connect(mapStateToProps,
    { fetchCurrentUser, editUserProfile, editUserPassword })
(withRouter(ProfileEdit));