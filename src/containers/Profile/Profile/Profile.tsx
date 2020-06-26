import React from 'react';
import { State, Props, ReduxState } from './config';
import { connect } from 'react-redux';
import { fetchCurrentUser, fetchUser } from '../../../redux/actions/userActions/userActions';
import { followUser, unfollowUser, fetchFollowers, fetchFollowingList }
    from '../../../redux/actions/followActions/followActions';
import ProfileComp from '../../../components/Profile/Profile/Profile/profileComp';
import ProfileClips from '../ProfileClips/ProfileClips';

class Profile extends React.PureComponent<Props, State> {
    state: State = {
        user: null,
        isMatch: false,
        isFollowed: false,
        showFollowers: false,
        showFollowing: false
    };

    componentDidMount = async () => {
        const { match, fetchUser } = this.props;
        await fetchUser(match.params.username);
        const { user, currentUser } = this.props;

        if (match.params.username === currentUser.userName) {
            this.setState({
                user: currentUser,
                isMatch: true,
                isFollowed: user.isFollowed
            });
        } else {
            this.setState({
                user: user,
                isMatch: false,
                isFollowed: user.isFollowed
            });
        };
    };

    private followUser = async (userName: string) => {
        const { followUser } = this.props;
        await followUser(userName);

        this.setState({
            isFollowed: true,
            user: this.props.user
        });
    };

    private unfollowUser = async (userName: string) => {
        const { unfollowUser } = this.props;
        await unfollowUser(userName);
        
        this.setState({
            isFollowed: false,
            user: this.props.user
        });
    };

    private handleShowLoginModal = async () => {
        this.setState({
            showLoginModal: true
        });
    };

    private handleCloseLoginModal = () => {
        this.setState({
            showLoginModal: false
        });
    };
    
    render() {
        const { user, isMatch, isFollowed, showLoginModal, buttonName  } = this.state;
        const {
            followUser,
            unfollowUser,
            handleShowLoginModal,
            handleCloseLoginModal,
        } = this;

        return (
            <>
                {
                    user && 
                    <ProfileComp
                        user={ user }
                        isMatch={ isMatch }
                        buttonName={ buttonName }
                        isFollowed={ isFollowed }
                        showLoginModal={ showLoginModal }
                        followUser={ followUser }
                        unfollowUser={ unfollowUser }
                        handleShowLoginModal={ handleShowLoginModal }
                        handleCloseLoginModal={ handleCloseLoginModal }
                    />
                }
                {
                    user && <ProfileClips user={ user } />
                }
            </>
        );
    };
};

const mapStateToProps = (state: ReduxState) => {
    return {
        user: state.userReducer.user,
        currentUser: state.userReducer.currentUser
    };
};

export default connect(mapStateToProps, {
    fetchUser,
    followUser,
    unfollowUser,
    fetchFollowers,
    fetchCurrentUser,
    fetchFollowingList
})(Profile);
