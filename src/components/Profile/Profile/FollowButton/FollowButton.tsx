import React from 'react';
import { Button } from 'semantic-ui-react';
import { Props } from './config';
import LoginModal from '../../../LoginModal/LoginModal';

const FollowButton: React.SFC<Props> = ({
    username,
    isFollowed,
    followUser,
    unfollowUser
}) => {

    const theme = localStorage.getItem('theme');
    const currentUser = localStorage.getItem('uid');

    if (currentUser) {
        if (isFollowed) {
            return (
                <Button
                    basic
                    size='mini'
                    color='black'
                    inverted={ theme === 'dark' }
                    className='profile-follow-button'
                    onClick={ () => unfollowUser(username) }
                >
                        Unfollow
                </Button> )
        } else {
            return (
                <Button
                    basic
                    size='mini'
                    color='black'
                    inverted={ theme === 'dark' }
                    className='profile-follow-button'
                    onClick={ () => followUser(username) }
                >
                        Follow
                </Button>
            );
        };
    } else {
        return (
            <Button
                basic
                size='mini'
                color='black'
                inverted={ theme === 'dark' }
                className='profile-follow-button'
            >
                <LoginModal modalName='Follow'/>
            </Button>
        );
    };
};

export default FollowButton;
