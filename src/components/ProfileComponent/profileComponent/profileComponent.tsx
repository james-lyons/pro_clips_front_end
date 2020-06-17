import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { Props, styles, Follower } from './config';

const EditProfileButton: React.SFC = ({}) => {
    return (
        <Link to="/accounts" style={{ marginLeft: '4rem' }}>
            <button style={{ borderRadius: '4px' }}>
                Edit Profile
            </button>
        </Link>
    );
};

const FollowButton: React.SFC = ({ userName, isFollowed, followUser, unfollowUser }) => {
    if (isFollowed) {
        return (<button style={{ marginLeft: '4rem', borderRadius: '4px' }} onClick={ () => unfollowUser(userName) }>Unfollow</button> )
    } else {
        return (
            <button style={{ marginLeft: '4rem', borderRadius: '4px' }} onClick={ () => followUser(userName) }>Follow</button>
        );
    };
};

const followersMapper = (followersList: Array<Follower>, handleCloseFollowers) => {
    const followerArray = followersList.map((follower) => 
        <div key={ follower.userName }>
            <img style={{ width: '30px', borderRadius: '50%' }} src={ follower.profile_image }/>
            <Link to={`/${ follower.userName }`}>{ follower.userName }</Link>
        </div>
    );
    return followerArray;
};

const ProfileComponent: React.SFC<Props> = ({
    user,
    match,
    isFollowed,
    followersList,
    followingList,
    showFollowers,
    showFollowing,
    followUser,
    unfollowUser,
    handleShowFollowers,
    handleShowFollowing,
    handleCloseFollowers,
    handleCloseFollowing
}) => {

    const { userName, profile_image, clips, followers, following, bio } = user;
 
    return (
        <>
            <div>
                <header className="col-lg-6 col-md-10 col-sm-12 mb-4" style={ styles.headerWrapper }>
                    <div style={{ height: '100%' }}>
                        <img src={ profile_image } style={{ height: '7rem', borderRadius: '100%' }}/>
                        
                    </div>
                    <section style={{ height: '100%' }}>
                        <div style={{ justifyContent: 'center' }}>
                            <h1 style={ styles.h1 }>{ userName }</h1>
                            {
                                match
                                ? <EditProfileButton />
                                : <FollowButton
                                    userName={ userName }
                                    isFollowed={ isFollowed }
                                    followUser={ followUser }
                                    unfollowUser={ unfollowUser }
                                />
                            }
                        </div>
                        <ul style={ styles.ulWrapper }>
                            <li style={ styles.li }><span>{ clips.length } clips</span></li>
                            <li style={ styles.li }><a onClick={ handleShowFollowers }>{ followers.length } followers</a></li>
                            <li style={ styles.li }><a onClick={ handleShowFollowing }>{ following.length } following</a></li>
                        </ul>
                        <div>
                            <h1 style={ styles.h1 }>{ bio }</h1>
                        </div>
                    </section>
                </header>
            </div>
            <Modal show={ showFollowers } onHide={ handleCloseFollowers }>
                <Modal.Header closeButton>
                <Modal.Title>Followers</Modal.Title>
                </Modal.Header>
                <Modal.Body>{ followersList && followersMapper(followersList, handleCloseFollowers)}</Modal.Body>
            </Modal>
            <Modal show={ showFollowing } onHide={ handleCloseFollowing }>
                <Modal.Header closeButton>
                <Modal.Title>Following</Modal.Title>
                </Modal.Header>
                <Modal.Body>{ followingList && followersMapper(followingList)}</Modal.Body>
            </Modal>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        followersList: state.followerReducer.followersList,
        followingList: state.followerReducer.followingList
    };
};

export default connect(mapStateToProps, null)(ProfileComponent);
