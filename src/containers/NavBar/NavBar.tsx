import React from 'react';
import { connect } from 'react-redux';
import NavBarComponent from '../../components/NavBar/NavBarComponent';
import { fetchCurrentUser } from '../../redux/actions/userActions/userActions';

class NavBar extends React.PureComponent <{}, {}> {

    componentDidMount = async () => {
        let currentUserId = localStorage.getItem('uid');
        if (currentUserId) {
            let data = await this.props.fetchCurrentUser(currentUserId);
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
