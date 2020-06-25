import React from 'react';
import { Button } from 'semantic-ui-react';
import { Props } from './config';
import LoginModal from '../../../LoginModal/LoginModal';

const FollowButton: React.SFC<Props> = ({
    userName,
    buttonName,
    isFollowed,
    followUser,
    unfollowUser,
    handleShowLoginModal
}) => {
    const currentUser = localStorage.getItem('uid');

    if (currentUser) {
        if (isFollowed) {
            return (<Button size='tiny'
                onClick={ () => unfollowUser(userName) }>
                    Unfollow
                </Button> )
        } else {
            return (
                <Button size='tiny' basic color='red'
                    onClick={ () => followUser(userName) }>
                        Follow
                </Button>
            );
        };
    } else {
        return (
            // <Button size='tiny' basic color='red'
            //     onClick={ () =>  handleShowLoginModal() }>
            //         <LoginModal
            //         />
            // </Button>
            <LoginModal buttonName={ buttonName }/>
        )
    }
};

export default FollowButton;