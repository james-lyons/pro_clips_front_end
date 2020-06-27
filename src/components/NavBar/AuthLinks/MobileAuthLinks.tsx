import React from 'react';
import { Props } from './config';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Icon, Sidebar } from 'semantic-ui-react';
import { userLogout } from '../../../redux/actions/authActions/authActions';
import Search from '../../../containers/Search/Search';

const MobileAuthLinks: React.SFC<Props> = ({
    visible,
    activeItem,
    currentUser,
    userLogout,
    handleSelect,
    setVisibility
}) => {

    const currentUserId = localStorage.getItem('uid');

    return (
        <Menu className='navbar-menu-ui' secondary size='large' style={{ justifyContent: 'space-between' }}>

            <Sidebar
                as={ Menu }
                animation='overlay'
                icon='labeled'
                inverted
                onHide={ () => setVisibility() }
                vertical
                visible={ visible }
                width='thin'
                style={{ marginTop: '2rem' }}
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
            </Sidebar>

            <Menu.Menu>
                <Menu.Item onClick={ () => setVisibility() }>
                    <Icon name='film' />
                </Menu.Item>
            </Menu.Menu>

            <Menu.Menu>
                <Menu.Item>
                    <Search />
                </Menu.Item>
            </Menu.Menu>

            <Menu.Menu>
                <Dropdown item icon='bars' direction='left'>
                    <Dropdown.Menu>
                        <Dropdown.Item
                            href={ `/${ currentUser.userName }` }
                        >
                            Profile
                        </Dropdown.Item>
                        <Dropdown.Item
                            as={ Link }
                            to='/clipUpload'
                            name='Upload'
                            active={ activeItem === 'Upload Clip' }
                            onClick={ handleSelect }
                        >
                            Upload
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

export default connect(null, { userLogout })(MobileAuthLinks);