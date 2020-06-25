import React from 'react';
import { Props } from './config';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';
import Search from '../../../containers/Search/Search';

const Links: React.SFC<Props> = ({
    activeItem,
    handleSelect
}) => {
    return (
        <Menu className='navbar-menu-ui' secondary size='large' style={{ justifyContent: 'space-between' }}>
            <Menu.Menu style={{ marginRight: '3rem' }}>
                <Menu.Item
                    as={ Link }
                    to='/'
                    name='Clipped'
                    active={ activeItem === 'Clipped' }
                    onClick={ handleSelect }
                >
                    <Icon name='game' />
                        Clipped
                    <Icon name='film' style={{ marginLeft: '3px' }}/>
                </Menu.Item>
            </Menu.Menu>
            <Menu.Menu>
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
    );
};

export default Links;