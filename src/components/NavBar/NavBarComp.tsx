import React from 'react';
import { connect } from 'react-redux';
import { Props, ReduxState } from './config';
import Links from './Links/Links';
import AuthLinks from './AuthLinks/AuthLinks';

const NavBarComponent: React.SFC<Props> = ({
    activeItem,
    currentUser,
    handleSelect
}) => {

    const currentUserId = localStorage.getItem('uid');

    return (
        <>
            {
                currentUserId ?
                <AuthLinks 
                    activeItem={ activeItem }
                    currentUser={ currentUser }
                    handleSelect={ handleSelect }
                /> :
                <Links
                    activeItem={ activeItem }
                    handleSelect={ handleSelect }
                />
            }
        </>
    );
};

const mapStateToProps = (state: ReduxState) => {
    return {
        currentUser: state.userReducer.currentUser
    };
};

export default connect(mapStateToProps, null)(NavBarComponent);
