import React from 'react';
import { Button } from 'semantic-ui-react';
import { Props } from './config';
import LoginModal from '../../../LoginModal/LoginModal';

const FollowButton: React.SFC<Props> = ({
    userName,
    isFollowed,
    followUser,
    unfollowUser
}) => {
    const currentUser = localStorage.getItem('uid');

    if (currentUser) {
        if (isFollowed) {
            return (
                <Button size='mini' style={{ marginLeft: '2rem' }}
                    onClick={ () => unfollowUser(userName) }>
                        Unfollow
                </Button> )
        } else {
            return (
                <Button size='mini' basic color='black' style={{ marginLeft: '2rem' }}
                    onClick={ () => followUser(userName) }>
                        Follow
                </Button>
            );
        };
    } else {
        return (
            <Button size='mini' basic color='black' style={{ marginLeft: '2rem' }}>
                <LoginModal modalName='Follow'/>
            </Button>
        );
    };
};

export default FollowButton;