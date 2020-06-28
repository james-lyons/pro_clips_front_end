import React from 'react';
import { connect } from 'react-redux';
import { Props, State, Event } from './config';
import { Segment, Responsive } from 'semantic-ui-react';
import { fetchCurrentUser } from '../../redux/actions/userActions/userActions';
import NavBarComp from '../../components/NavBar/NavBarComp';
import MobileNavBarComp from '../../components/NavBar/MobileNavBarComp';

class NavBar extends React.PureComponent<Props, State> {

    state: State = {
        activeItem: '',
        visible: false
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

    private setVisibility = () => {
        this.setState({ visible: !this.state.visible })
    };

    render() {
        const { activeItem, visible } = this.state;
        const { handleSelect, setVisibility } = this;

        return (
            <>
              <Segment.Group style={{ border: 'none', boxShadow: 'none' }}>
                <Responsive as={ Segment } minWidth={ 700 } style={{ padding: 0 }}>
                    <NavBarComp
                        activeItem={ activeItem }
                        handleSelect={ handleSelect }
                    />
                </Responsive>

                <Responsive as={ Segment } maxWidth={ 699 } style={{ padding: 0 }}>
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