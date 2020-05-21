import React from 'react';
import { connect } from 'react-redux';
import ProfileComponent from '../../components/profileComponent/profileComponent';
import { fetchCurrentUser } from '../../redux/actions/userActions/userActions';
import { State, Props } from './config';

class Profile extends React.PureComponent<Props, State> {
    state: State = {
        userName: '',
        bio: '',
        profile_image: '',
        posts: null
    };

    private componentDidMount = async () => {
        let currentUser = localStorage.getItem('uid');
        let data = await this.props.fetchCurrentUser(currentUser);
        console.log('data', data)
    };

    private handleChange = (event:any) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
        return (
            <>
                <ProfileComponent />
            </>
        );
    }
};

export default connect(null, { fetchCurrentUser })(Profile);
