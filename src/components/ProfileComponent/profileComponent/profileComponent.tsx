import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Props, styles } from './config';

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

const ProfileComponent: React.SFC<Props> = ({
    user,
    match,
    isFollowed,
    followUser,
    unfollowUser
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
                            <li style={ styles.li }><a>{ followers.length } followers</a></li>
                            <li style={ styles.li }><a>{ following.length } following</a></li>
                        </ul>
                        <div>
                            <h1 style={ styles.h1 }>{ bio }</h1>
                        </div>
                    </section>
                </header>
            </div>
        </>
    );
};

export default ProfileComponent;
