import React from 'react';
import { Props } from './config';

const FollowButton: React.SFC<Props> = ({
    userName,
    isFollowed,
    followUser,
    unfollowUser,
    handleShowLogin
}) => {
    const currentUser = localStorage.getItem('uid');

    if (currentUser) {
        if (isFollowed) {
            return (<button style={{ marginLeft: '4rem', borderRadius: '4px' }}
                onClick={ () => unfollowUser(userName) }>
                    Unfollow
                </button> )
        } else {
            return (
                <button style={{ marginLeft: '4rem', borderRadius: '4px' }}
                    onClick={ () => followUser(userName) }>
                        Follow
                </button>
            );
        };
    } else {
        return (
            <button onClick={ () => handleShowLogin() }>follow</button>
        )
    }
};

export default FollowButton;