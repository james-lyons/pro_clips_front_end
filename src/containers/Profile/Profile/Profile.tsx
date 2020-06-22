import React from 'react';
import { State, Props } from './config';
import { connect } from 'react-redux';
import { fetchCurrentUser, fetchUser }
    from '../../../redux/actions/userActions/userActions';
import { followUser, unfollowUser, fetchFollowers, fetchFollowingList }
    from '../../../redux/actions/followActions/followActions';
import ProfileComp from '../../../components/Profile/Profile/Profile/profileComp';
import ProfileClips from '../ProfileClips/ProfileClips';

class Profile extends React.PureComponent<Props, State> {
    state: State = {
        user: null,
        match: false,
        isFollowed: false,
        showLogin: false,
        showFollowers: false,
        showFollowing: false
    };

    componentDidMount = async () => {
        let currentUserId = localStorage.getItem('uid');

        let userData = await this.props.fetchUser(this.props.match.params.username);
        
        let { user, currentUser, match } = this.props;

        if (match.params.username === currentUser.userName) {
            this.setState({
                user: currentUser,
                match: true,
                isFollowed: user.isFollowed
            });
        } else {
            this.setState({
                user: user,
                match: false,
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

    private handleChange = (event:any) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    
    private handleShowFollowers = async () => {
        await this.props.fetchFollowers(this.state.user.userName);
        this.setState({
            showFollowers: true
        });
    };
    
    private handleShowFollowing = async () => {
        await this.props.fetchFollowingList(this.state.user.userName);
        this.setState({
            showFollowing: true
        });
    };

    private handleShowLogin = async () => {
        this.setState({
            showLogin: true
        });
    };

    private handleCloseFollowers = () => {
        this.setState({
            showFollowers: false
        });
    };

    private handleCloseFollowing = () => {
        this.setState({
            showFollowing: false
        });
    };

    private handleCloseLogin = () => {
        this.setState({
            showLogin: false
        });
    };
    
    render() {
        const { user, match, isFollowed, showLogin, showFollowers, showFollowing  } = this.state;
        const {
            followUser,
            unfollowUser,
            handleShowLogin,
            handleShowFollowers,
            handleShowFollowing,
            handleCloseLogin,
            handleCloseFollowers,
            handleCloseFollowing
        } = this;

        return (
            <>
                {
                    user && 
                            <ProfileComp
                            user={ user }
                            match={ match }
                            isFollowed={ isFollowed }
                            showLogin={ showLogin }
                            showFollowers={ showFollowers }
                            showFollowing={ showFollowing }
                            followUser={ followUser }
                            unfollowUser={ unfollowUser }
                            handleShowFollowers={ handleShowFollowers }
                            handleShowFollowing={ handleShowFollowing }
                            handleShowLogin={ handleShowLogin }
                            handleCloseFollowers={ handleCloseFollowers }
                            handleCloseFollowing={ handleCloseFollowing }
                            handleCloseLogin={ handleCloseLogin }
                        />
                }
                {
                    user &&  <ProfileClips user={ user }/>
                }
            </>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
        currentUser: state.userReducer.currentUser
    };
};

export default connect(mapStateToProps, { fetchCurrentUser, fetchUser, followUser, unfollowUser, fetchFollowers, fetchFollowingList })(Profile);
