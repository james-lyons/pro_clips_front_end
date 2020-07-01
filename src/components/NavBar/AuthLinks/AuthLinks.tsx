import React from 'react';
import { Props } from './config';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Icon, Segment, Header } from 'semantic-ui-react';
import { userLogout } from '../../../redux/actions/authActions/authActions';
import Search from '../../../containers/Search/Search';

const AuthLinks: React.SFC<Props> = ({
    activeItem,
    currentUser,
    userLogout,
    handleSelect
}) => {
    
    const theme = localStorage.getItem('theme');
    const currentUserId = localStorage.getItem('uid');

    return (
        <Segment
            inverted={ theme === 'dark' }
            className='navbar-segment'
        >
            <Menu
                secondary
                size='small'
                inverted={ theme === 'dark' }
                className='navbar-menu-ui wide-screen-nav'
            >
                <Menu.Menu id='navbar-menu-header'>
                    <Menu.Item
                        as={ Link }
                        to='/'
                        name='Clipped'
                        active={ activeItem === 'Clipped' }
                        onClick={ handleSelect }
                    >
                        <Icon name='game' />
                            Clipped
                        <Icon id='navbar-icon-2' name='film' />
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
                        to='/clipUpload'
                        name='Upload'
                        active={ activeItem === 'Upload Clip' }
                        onClick={ handleSelect }
                    >
                        <Icon name='cloud upload' />
                        Upload
                    </Menu.Item>
                    <Dropdown item icon='bars' direction='left' id='navbar-dropdown-icon'>
                        <Dropdown.Menu>
                            <Dropdown.Item
                                href={ `/${ currentUser.username }` }
                            >
                                Profile
                            </Dropdown.Item>
                            <Dropdown.Item
                                as={ Link }
                                to='/accounts/site_settings'
                            >
                                Settings
                            </Dropdown.Item>
                            <Dropdown.Item
                                onClick={ () => userLogout(currentUserId) }>
                                    Log Out
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Menu>
            </Menu>
        </Segment>
    );
};

export default connect(null, { userLogout })(AuthLinks);