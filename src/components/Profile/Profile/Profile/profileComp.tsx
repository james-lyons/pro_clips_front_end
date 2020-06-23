import React from 'react';
import { connect } from 'react-redux';
import { Props, styles, ReduxState } from './config';
import LoginModal from '../../../LoginModal/LoginModal';
import FollowButton from '../FollowButton/FollowButton';
import EditProfileButton from '../EditProfileButton/EditProfileButton';
import FollowingList from '../../../../containers/FollowLists/FollowingList/FollowingList';
import FollowersList from '../../../../containers/FollowLists/FollowerList/FollowersList';

const ProfileComp: React.SFC<Props> = ({
    user,
    isMatch,
    isFollowed,
    showLoginModal,
    followUser,
    unfollowUser,
    handleShowLoginModal,
    handleCloseLoginModal
}) => {

    const { userName, profile_image, clips, bio } = user;
 
    return (
        <>
            <div>
                <header
                    className="col-lg-6 col-md-10 col-sm-12 mb-4"
                    style={ styles.headerWrapper }
                >
                    <div style={{ height: '100%' }}>
                        <img
                            src={ profile_image }
                            style={{ height: '7rem', borderRadius: '100%' }}
                        />
                    </div>

                    <section style={{ height: '100%' }}>
                        <div style={{ justifyContent: 'center' }}>
                            <h1 style={ styles.h1 }>{ userName }</h1>
                            {
                                isMatch
                                ? <EditProfileButton />
                                : <FollowButton
                                    userName={ userName }
                                    isFollowed={ isFollowed }
                                    followUser={ followUser }
                                    unfollowUser={ unfollowUser }
                                    handleShowLoginModal={ handleShowLoginModal }
                                />
                            }
                        </div>

                        <ul style={ styles.ulWrapper }>
                            <li style={ styles.li }>
                                <span>{ clips.length } clips</span>
                            </li>
                            <li style={ styles.li }>
                                <FollowersList />
                            </li>
                            <li style={ styles.li }>
                                <FollowingList />
                            </li>
                        </ul>

                        <div>
                            <h1 style={ styles.h1 }>{ bio }</h1>
                        </div>
                    </section>
                </header>
            </div>

            <LoginModal
                showLoginModal={ showLoginModal }
                handleCloseLoginModal={ handleCloseLoginModal }
            />
        </>
    );
};

const mapStateToProps = (state: ReduxState) => {
    return {
        followersList: state.followerReducer.followersList,
        followingList: state.followerReducer.followingList
    };
};

export default connect(mapStateToProps, null)(ProfileComp);
