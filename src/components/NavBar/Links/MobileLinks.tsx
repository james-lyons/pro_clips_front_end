import React from 'react';
import { Props } from './config';
import { Link } from 'react-router-dom';
import { Menu, Icon, Sidebar, Segment } from 'semantic-ui-react';
import Search from '../../../containers/Search/Search';

const MobileLinks: React.SFC<Props> = ({
    visible,
    activeItem,
    handleSelect,
    setVisibility
}) => {
    return (
        <Segment className='navbar-segment'>
            <Menu
                secondary
                size='small'
                className='navbar-menu-ui wide-screen-nav'
            >
                <Sidebar
                    as={ Menu }
                    animation='overlay'
                    icon='labeled'
                    inverted
                    onHide={ () => setVisibility() }
                    vertical
                    visible={ visible }
                    width='thin'
                >
                    <Menu.Item
                        as={ Link }
                        to='/'
                        name='Clipped'
                        active={ activeItem === 'Clipped' }
                        onClick={ handleSelect }
                        style={{ marginTop: '2rem' }}
                    >
                        Clipped
                    </Menu.Item>
                    <Menu.Item
                        as={ Link }
                        to='/popularClips'
                        name='Popular Clips'
                        active={ activeItem === 'Popular Clips' }
                        onClick={ handleSelect }
                    />
                    <Menu.Item
                        as={ Link }
                        to='/browseClips'
                        name='Browse Clips'
                        active={ activeItem === 'Browse Clips' }
                        onClick={ handleSelect }
                    />
                    <Menu.Item
                        as={ Link }
                        fixed='bottom'
                        to='/login'
                        name='Login'
                        active={ activeItem === 'Login' }
                        onClick={ handleSelect }
                    />

                    <Menu.Item
                        as={ Link }
                        to='/register'
                        name='Register'
                        active={ activeItem === 'Register' }
                        onClick={ handleSelect }
                    />
                </Sidebar>

                <Menu.Menu>
                    <Menu.Item onClick={ () => setVisibility() }>
                        <Icon name='film' />
                    </Menu.Item>
                </Menu.Menu>

                <Menu.Menu style={{ marginLeft: '1.7rem' }}>
                    <Menu.Item>
                        <Search />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </Segment>
    );
};

export default MobileLinks;