import React from 'react';
import { Props } from './config';
import { connect } from 'react-redux';
import { fetchCurrentUser } from '../../redux/actions/userActions/userActions';
import NavBarComponent from '../../components/NavBar/NavBarComp';

class NavBar extends React.PureComponent <Props> {

    componentDidMount = async () => {
        let currentUserId = localStorage.getItem('uid');
        if (currentUserId) {
            await this.props.fetchCurrentUser(currentUserId);
        };
    };

    render() {
        return (
            <>
                <NavBarComponent />
            </>
        );
    };
};

export default connect(null, { fetchCurrentUser })(NavBar);
