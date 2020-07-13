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

    const theme = localStorage.getItem('theme');

    return (
        <Segment
            className='navbar-segment'
            inverted={ theme === 'dark' }
        >
            <Menu
                secondary
                size='small'
                inverted={ theme === 'dark' }
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
                        className='navbar-sidebar'
                    >
                        Clipped
                    </Menu.Item>
                    <Menu.Item
                        as={ Link }
                        to='/popularclips'
                        name='Popular Clips'
                        active={ activeItem === 'Popular Clips' }
                        onClick={ handleSelect }
                    />
                    <Menu.Item
                        as={ Link }
                        to='/browseclips'
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

                <Menu.Menu id='navbar-searchbar-logged-out'>
                    <Menu.Item>
                        <Search />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </Segment>
    );
};

export default MobileLinks;