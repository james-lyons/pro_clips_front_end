import React from 'react';
import { Props } from './config';
import { Link } from 'react-router-dom';
import { Menu, Icon, Segment } from 'semantic-ui-react';
import Search from '../../../containers/Search/Search';

const Links: React.SFC<Props> = ({
    activeItem,
    handleSelect
}) => {

    const theme = localStorage.getItem('theme');

    return (
        <Segment
            className='navbar-segment'
            inverted={ theme === 'dark' }
        >
            <Menu
                secondary
                size='large'
                inverted={ theme === 'dark' }
                className='navbar-menu-ui wide-screen-nav'
            >
                <Menu.Menu className='navbar-menu-header'>
                    <Menu.Item
                        as={ Link }
                        to='/'
                        name='Clipped'
                        active={ activeItem === 'Clipped' }
                        onClick={ handleSelect }
                    >
                        <Icon name='game' />
                            Clipped
                        <Icon name='film' className='navbar-dropdown-icon' />
                    </Menu.Item>
                </Menu.Menu>

                <Menu.Menu>
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

                    <Menu.Item>
                        <Search />
                    </Menu.Item>
                </Menu.Menu>

                <Menu.Menu>
                    <Menu.Item
                        as={ Link }
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
                </Menu.Menu>
            </Menu>
        </Segment>
    );
};

export default Links;