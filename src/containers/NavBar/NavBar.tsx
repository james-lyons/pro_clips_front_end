import React from 'react';
import { Props, State, Event } from './config';
import { connect } from 'react-redux';
import { fetchCurrentUser } from '../../redux/actions/userActions/userActions';
import NavBarComponent from '../../components/NavBar/NavBarComp';

class NavBar extends React.PureComponent<Props, State> {

    state: State = {
        activeItem: 'home'
    };

    componentDidMount = async () => {
        let currentUserId = localStorage.getItem('uid');
        if (currentUserId) {
            await this.props.fetchCurrentUser(currentUserId);
        };
    };

    private handleSelect = (event: Event) => {
        this.setState({
            activeItem: event.target.text
        });
    };

    render() {
        const { activeItem } = this.state;
        const { handleSelect } = this;

        return (
            <>
                <NavBarComponent
                    activeItem={ activeItem }
                    handleSelect={ handleSelect }
                />
            </>
        );
    };
};

export default connect(null, { fetchCurrentUser })(NavBar);
