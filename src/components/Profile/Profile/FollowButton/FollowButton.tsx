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
                <Button size='mini' className='profile-follow-button'
                    onClick={ () => unfollowUser(userName) }>
                        Unfollow
                </Button> )
        } else {
            return (
                <Button size='mini' basic color='black' className='profile-follow-button'
                    onClick={ () => followUser(userName) }>
                        Follow
                </Button>
            );
        };
    } else {
        return (
            <Button size='mini' basic color='black' className='profile-follow-button'>
                <LoginModal modalName='Follow'/>
            </Button>
        );
    };
};

export default FollowButton;