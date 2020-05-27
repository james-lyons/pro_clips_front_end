import React from 'react';
import { connect } from 'react-redux';
import ProfileComponent from '../../../components/ProfileComponent/profileComponent/profileComponent';
import ProfileClips from '../ProfileClips/ProfileClips';
import { fetchCurrentUser, fetchUser } from '../../../redux/actions/userActions/userActions';
import { followUser, unfollowUser } from '../../../redux/actions/followActions/followActions';
import { State, Props } from './config';

class Profile extends React.PureComponent<Props, State> {
    state: State = {
        user: null,
        match: false,
        isFollowed: false
    };

    private componentDidMount = async () => {
        let currentUserId = localStorage.getItem('uid');

        let userData = await this.props.fetchUser(this.props.match.params.username);
        // console.log('USER DATA', userData.payload.data);
        
        let { user, currentUser, match } = this.props;
        console.log('USER', user);

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

    private followUser = (userName: string) => {
        this.props.followUser(userName);
        this.setState({
            isFollowed: true
        });
    };

    private unfollowUser = (userName: string) => {
        this.props.unfollowUser(userName);
        this.setState({
            isFollowed: false
        });
    };

    private handleChange = (event:any) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
        const { user, match, isFollowed } = this.state;
        return (
            <>
                {
                    user && 
                            <ProfileComponent
                            user={ user }
                            match={ match }
                            isFollowed={ isFollowed }
                            followUser={ this.followUser }
                            unfollowUser={ this.unfollowUser }
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

export default connect(mapStateToProps, { fetchCurrentUser, fetchUser, followUser, unfollowUser })(Profile);
