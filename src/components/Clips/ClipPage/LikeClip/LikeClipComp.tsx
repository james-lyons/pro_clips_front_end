import React from 'react';
import { connect } from 'react-redux';
import { Props, Clip } from './config';
import { Icon } from 'semantic-ui-react';
import { likeClip, unlikeClip } from '../../../../redux/actions/clipActions/clipActions';
import LoginModal from '../../../LoginModal/LoginModal';

const LikeClip: React.SFC<Props> = ({
    clip,
    likeClip,
    unlikeClip
}) => {

    const likeClipSubmit = (clipId: string) => {
        likeClip(clipId);
    };

    const unlikeClipSubmit = (clipId: string) => {
        unlikeClip(clipId);
    };

    const renderLikeButton = (clip: Clip) => {
        let currentUser = localStorage.getItem('uid');
        let i = clip.likes.indexOf(currentUser)

        if (!currentUser) {
            return (
                <span className='like-clip-icon'> 
                    <LoginModal modalName={ <Icon name='heart outline' color='red'/> }/>
                </span>
            );
        } else if (i >= 0) {
            return (
                <span
                    className='like-clip-icon'
                    onClick={ () => unlikeClipSubmit(clip._id) }
                >
                    <Icon name='heart' color='red' />
                </span>
            )
        } else {
            return (
                <span
                    className='like-clip-icon'
                    onClick={ () => likeClipSubmit(clip._id) }
                >
                    <Icon name='heart outline' color='red' />
                </span>
            );
        };
    };

    return (
        <>
            { renderLikeButton(clip) }
        </>
    );
};

const mapStateToProps = (state: any) => {
    return {
        clip: state.clipReducer.clip
    };
};

export default connect(mapStateToProps, { likeClip, unlikeClip })(LikeClip);
