import React from 'react';
import { connect } from 'react-redux';
import ProfileComponent from '../../components/profileComponent/profileComponent';
import { fetchCurrentUser, fetchUser } from '../../redux/actions/userActions/userActions';
import { State, Props } from './config';

class Profile extends React.PureComponent<Props, State> {
    state: State = {
        user: null,
        match: false,
    };

    private componentDidMount = async () => {
        let currentUserId = localStorage.getItem('uid');
        if (currentUserId) {
            let currentUserData = await this.props.fetchCurrentUser(currentUserId);
        };

        let userData = await this.props.fetchUser(this.props.match.params.username);
        console.log('USER DATA', userData);
        console.log('USER STATE', this.props.user);

        console.log('PARAMS', this.props.match.params);
        
        let { currentUser, match } = this.props;
        console.log('CURRENT USER', currentUser );

        if (match.params.username === currentUser.userName) {
            console.log("IT'S A MATCH!");
            this.setState({
                user: currentUser,
                match: true
            });
            console.log('USER', this.state);
        } else {
            this.setState({
                match: false
            });
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
                <ProfileComponent user={ this.state.user } match={ this.state.match }/>
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
