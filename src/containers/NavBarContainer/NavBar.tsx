import React from 'react';
import { connect } from 'react-redux';
import NavBarComponent from '../../components/NavBarComponent/NavBarComponent';
import { fetchCurrentUser } from '../../redux/actions/userActions/userActions';

class NavBar extends React.PureComponent <{}> {

    private componentDidMount = async () => {
        let currentUserId = localStorage.getItem('uid');
        if (currentUserId) {
            let data = await this.props.fetchCurrentUser(currentUserId);
            console.log('data 1', data)
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
