import React from 'react';
import { connect } from 'react-redux';
import ProfileComponent from '../../components/profileComponent/profileComponent';
import { fetchCurrentUser, fetchUser } from '../../redux/actions/userActions/userActions';
import { State, Props } from './config';

class Profile extends React.PureComponent<Props, State> {
    state: State = {
        user: null
    };

    private componentDidMount = async () => {
        let currentUserId = localStorage.getItem('uid');
        if (currentUserId) {
            let currentUserData = await this.props.fetchCurrentUser(currentUserId);
        };

        let userData = await this.props.fetchUser(this.props.match.params.username);
        console.log('userdata', userData);
        console.log('user state', this.props.user);

        console.log('params', this.props.match.params);
        console.log('currentUser', this.props.currentUser );

        let { currentUser, match } = this.props;

        if (match.params.username === currentUser.userName) {
            console.log("it's a match!");
            this.setState({
                user: currentUser
            });
            console.log('user', this.state.user);
        };
    };

    private handleChange = (event:any) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
        return (
            <>
                <ProfileComponent user={ this.state.user }/>
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

export default connect(mapStateToProps, { fetchCurrentUser, fetchUser })(Profile);
