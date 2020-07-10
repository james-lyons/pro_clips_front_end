import React from 'react';
import { State, Props, ReduxState } from './config';
import { connect } from 'react-redux';
import { fetchCurrentUser, fetchUser } from '../../../redux/actions/userActions/userActions';
import { followUser, unfollowUser, fetchFollowers, fetchFollowingList }
    from '../../../redux/actions/followActions/followActions';
import ProfileComp from '../../../components/Profile/Profile/Profile/profileComp';
import ProfileClips from '../ProfileClips/ProfileClips';
import UnavailableComp from '../../../components/Unavailable/UnavailableComp';

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

        if (match.params.username === currentUser.username) {
            this.setState({
                isMatch: true,
                user: currentUser,
                isFollowed: user.isFollowed
            });
        } else if (user) {
            this.setState({
                user: user,
                isMatch: false,
                isFollowed: user.isFollowed
            });
        };
    };

    private followUser = async (username: string) => {
        const { followUser } = this.props;
        await followUser(username);

        await this.setState({
            isFollowed: true,
            user: this.props.user
        });
    };

    private unfollowUser = async (username: string) => {
        const { unfollowUser } = this.props;
        await unfollowUser(username);
        
        await this.setState({
            isFollowed: false,
            user: this.props.user
        });
    };
    
    render() {
        const { user, isMatch, isFollowed  } = this.state;
        const { followUser, unfollowUser } = this;

        return (
            <>
                {
                    user && 
                    <ProfileComp
                        user={ user }
                        isMatch={ isMatch }
                        isFollowed={ isFollowed }
                        followUser={ followUser }
                        unfollowUser={ unfollowUser }
                    />
                }
                {
                    user &&
                    <ProfileClips user={ user } />
                }
                {/* {
                    !user && <UnavailableComp />
                } */}
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
