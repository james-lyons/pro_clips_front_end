import React from 'react';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';
import { Props, styles } from './config';

const SidebarComp: React.SFC<Props> = ({ activeItem, handleSelect }) => {
    return (
        <>
            <Menu pointing secondary vertical fluid>
                <Menu.Item
                    style={{ margin: '1rem 0' }}
                    name='Profile Settings'
                    active={ activeItem === 'Profile Settings' }
                    onClick={ handleSelect }
                />
                <Menu.Item
                    style={{ margin: '1rem 0' }}
                    name='Account Settings'
                    active={ activeItem === 'Account Settings' }
                    onClick={ handleSelect }
                />
                <Menu.Item
                    style={{ margin: '1rem 0' }}
                    name='Delete Account'
                    active={ activeItem === 'Delete Account' }
                    onClick={ handleSelect }
                />
            </Menu>
        </>
    );
};

const mapStateToProps = (state: any) => {
    return {
        activeItem: state.accountReducer.activeItem
    };
};

export default connect(mapStateToProps, null)(SidebarComp);
