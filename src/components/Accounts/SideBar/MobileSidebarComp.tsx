import React from 'react';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';
import { Props, styles } from './config';

const MobileSidebarComp: React.SFC<Props> = ({ activeItem, handleSelect }) => {
    return (
        <>
            <Menu pointing secondary>
                <Menu.Item
                    name='Profile Settings'
                    active={ activeItem === 'Profile Settings' }
                    onClick={ handleSelect }
                    style={{ fontSize: '.9rem' }}
                />
                <Menu.Item
                    name='Account Settings'
                    active={ activeItem === 'Account Settings' }
                    onClick={ handleSelect }
                    style={{ fontSize: '.9rem' }}
                />
                <Menu.Item
                    name='Delete Account'
                    active={ activeItem === 'Delete Account' }
                    onClick={ handleSelect }
                    style={{ fontSize: '.9rem' }}
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
