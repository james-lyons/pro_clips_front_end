import React from 'react';
import { connect } from 'react-redux';
import { Props, ReduxState } from './config';
import MobileLinks from './Links/MobileLinks';
import MobileAuthLinks from './AuthLinks/MobileAuthLinks';

const MobileNavBarComp: React.SFC<Props> = ({
    visible,
    activeItem,
    currentUser,
    handleSelect,
    setVisibility
}) => {

    const currentUserId = localStorage.getItem('uid');

    return (
        <>
            {
                currentUserId ?
                <MobileAuthLinks
                    visible={ visible }
                    activeItem={ activeItem }
                    currentUser={ currentUser }
                    handleSelect={ handleSelect }
                    setVisibility={ setVisibility }
                /> :
                <MobileLinks
                    visible={ visible }
                    activeItem={ activeItem }
                    handleSelect={ handleSelect }
                    setVisibility={ setVisibility }
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

export default connect(mapStateToProps, null)(MobileNavBarComp);
