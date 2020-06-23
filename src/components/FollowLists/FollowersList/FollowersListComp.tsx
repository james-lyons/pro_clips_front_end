import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import { Props, ReduxState, Follower } from './config';

const FollowersListComp: React.SFC<Props> = ({
    user,
    followers,
    showFollowers,
    handleShowFollowers,
    handleCloseFollowers
}) => {
    const { following } = user;

    const followersMapper = (followersList: Array<Follower>, handleCloseFollowers?: () => void) => {
        const followerArray = followersList.map((follower) => 
            <div key={ follower.userName }>
                <img style={{ width: '30px', borderRadius: '50%' }} src={ follower.profile_image }/>
                <a href={`/${ follower.userName }`}>{ follower.userName }</a>
            </div>
        );
        return followerArray;
    };

    return (
        <>
            <a onClick={ handleShowFollowers }>
                { following.length } following
            </a>
            <Modal show={ showFollowers } onHide={ handleCloseFollowers }>
                <Modal.Header closeButton>
                    <Modal.Title>Following</Modal.Title>
                </Modal.Header>
                <Modal.Body>{ followers && followersMapper(followers)}</Modal.Body>
            </Modal>
        </>
    );
};

const mapStateToProps = (state: ReduxState) => {
    return {
        followers: state.followerReducer.followers
    };
};

export default connect(mapStateToProps, null)(FollowersListComp);
