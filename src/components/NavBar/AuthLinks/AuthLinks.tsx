import React from 'react';
import { Props } from './config';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Icon } from 'semantic-ui-react';
import { userLogout } from '../../../redux/actions/authActions/authActions';
import Search from '../../../containers/Search/Search';

const AuthLinks: React.SFC<Props> = ({
    activeItem,
    currentUser,
    userLogout,
    handleSelect
}) => {

    const currentUserId = localStorage.getItem('uid');

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
                    to='/clipUpload'
                    name='Upload'
                    active={ activeItem === 'Upload Clip' }
                    onClick={ handleSelect }
                >
                    <Icon name='cloud upload' />
                    Upload
                </Menu.Item>
                <Dropdown item icon='bars' direction='left' style={{ marginRight: '10px' }}>
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
    );
};

export default connect(null, { userLogout })(AuthLinks);