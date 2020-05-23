import React from 'react';
import { connect } from 'react-redux';
import ProfileComponent from '../../components/profileComponent/profileComponent';
import { fetchCurrentUser, fetchUser } from '../../redux/actions/userActions/userActions';
import { followUser, unfollowUser } from '../../redux/actions/followActions/followActions';
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
        console.log('USER DATA', userData.payload.data);
        // console.log('USER STATE', this.props.user);
        // console.log('PARAMS', this.props.match.params);
        
        let { user, currentUser, match } = this.props;
        console.log('CURRENT USER', currentUser );
        console.log('USER DATA', userData);
        console.log('USER', user);

        if (match.params.username === currentUser.userName) {
            // console.log("IT'S A MATCH!");
            this.setState({
                user: currentUser,
                match: true,
                isFollowed: user.isFollowed
            });
            // console.log('USER', this.state);
        } else {
            this.setState({
                user: user,
                match: false,
                isFollowed: user.isFollowed
            });
        };
        console.log('state user', this.state.user)
    };

    private followUser = (userName: string) => {
        this.props.followUser(userName);
        this.setState({
            isFollowed: true
        });
        console.log('user1', this.state.user)
    };

    private unfollowUser = (userName: string) => {
        this.props.unfollowUser(userName);
        this.setState({
            isFollowed: false
        });
        console.log('user2', this.state.user)
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
                <ProfileComponent
                    user={ this.props.user }
                    match={ match }
                    isFollowed={ isFollowed }
                    followUser={ this.followUser }
                    unfollowUser={ this.unfollowUser }
                />
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
