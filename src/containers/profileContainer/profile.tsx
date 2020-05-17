import React from 'react';
import { connect } from 'react-redux';
import { State, Props } from './profile.config';
import ProfileComponent from '../../components/profileComponent/profileComponent';
import { fetchUser } from '../../actions/userActions/userActions';

class Profile extends React.PureComponent<Props, State> {
    state: State = {
        userName: '',
        email: '',
        bio: '',
        password: '',
        password2: ''
    };

    private componentDidMount = async () => {
        let currentUser = localStorage.getItem('uid');
        let data = await this.props.fetchUser(currentUser);
        console.log(data)
    };

    private handleChange = () => {

    };

    render() {
        return (
            <>
                <ProfileComponent />
            </>
        );
    }
};

export default connect(null, { fetchUser })(Profile);
