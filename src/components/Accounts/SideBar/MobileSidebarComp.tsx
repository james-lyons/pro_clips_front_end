import React from 'react';
import { Props } from './config';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';

const MobileSidebarComp: React.SFC<Props> = ({ activeItem, handleSelect }) => {
    return (
        <>
            <Menu pointing secondary>
                <Menu.Item
                    className='account-setting-menu-item'
                    name='Profile Settings'
                    active={ activeItem === 'Profile Settings' }
                    onClick={ handleSelect }
                />

                <Menu.Item
                    className='account-setting-menu-item'
                    name='Account Settings'
                    active={ activeItem === 'Account Settings' }
                    onClick={ handleSelect }
                />
                
                <Menu.Item
                    className='account-setting-menu-item'
                    name='Site Settings'
                    active={ activeItem === 'Site Settings' }
                    onClick={ handleSelect }
                />
                
                <Menu.Item
                    className='account-setting-menu-item'
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

export default connect(mapStateToProps, null)(MobileSidebarComp);
