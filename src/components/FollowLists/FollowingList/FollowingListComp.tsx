import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import { Props, ReduxState, Follower } from './config';

const FollowingListComp: React.SFC<Props> = ({
    user,
    showFollowing,
    followingList,
    handleShowFollowing,
    handleCloseFollowing
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
            <a onClick={ handleShowFollowing }>
                { following.length } following
            </a>
            <Modal show={ showFollowing } onHide={ handleCloseFollowing }>
                <Modal.Header closeButton>
                    <Modal.Title>Following</Modal.Title>
                </Modal.Header>
                <Modal.Body>{ followingList && followersMapper(followingList)}</Modal.Body>
            </Modal>
        </>
    );
};

const mapStateToProps = (state: ReduxState) => {
    return {
        followingList: state.followerReducer.followingList
    };
};

export default connect(mapStateToProps, null)(FollowingListComp);
