import React from 'react';
import { connect } from 'react-redux';
import { Props, State, Event } from './config';
import { Segment, Responsive } from 'semantic-ui-react';
import { fetchCurrentUser } from '../../redux/actions/userActions/userActions';
import MobileNavBarComp from '../../components/NavBar/MobileNavBarComp';
import NavBarComp from '../../components/NavBar/NavBarComp';

class NavBar extends React.PureComponent<Props, State> {

    state: State = {
        activeItem: '',
        visible: false
    };

    componentDidMount = async () => {
        let currentUserId = localStorage.getItem('uid');
        if (currentUserId) {
            let res = await this.props.fetchCurrentUser(currentUserId);
            console.log('Navbar ComponentDidMount', res);
        };
    };

    private handleSelect = (event: Event) => {
        this.setState({
            activeItem: event.target.text
        });
    };

    private setVisibility = () => {
        this.setState({ visible: !this.state.visible })
    };

    render() {
        const { activeItem, visible } = this.state;
        const { handleSelect, setVisibility } = this;

        return (
            <>
                <Segment.Group
                    id='navbar-segment-container'
                >
                    <Responsive minWidth={ 700 }>
                        <NavBarComp
                            activeItem={ activeItem }
                            handleSelect={ handleSelect }
                        />
                    </Responsive>

                    <Responsive maxWidth={ 699 }>
                        <MobileNavBarComp
                            visible={ visible }
                            activeItem={ activeItem }
                            handleSelect={ handleSelect }
                            setVisibility={ setVisibility }
                        />
                    </Responsive>
                </Segment.Group>
            </>
        );
    };
};

export default connect(null, { fetchCurrentUser })(NavBar);
