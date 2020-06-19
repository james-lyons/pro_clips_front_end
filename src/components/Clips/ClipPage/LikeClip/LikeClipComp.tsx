import React from 'react';
import { connect } from 'react-redux';
import { likeClip, unlikeClip } from '../../../../redux/actions/clipActions/clipActions';
import { Props, Clip } from './config';

const LikeClip: React.SFC<Props>= ({
    clip,
    showLoginModal,
    likeClip,
    unlikeClip,
    handleShowLoginModal
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
                <span style={{ width: '5rem', cursor: 'pointer', margin: '0 5px'  }} onClick={ () => handleShowLoginModal() }>🤍</span>
            );
        } else if (i >= 0) {
            return (
                <span style={{ width: '5rem', cursor: 'pointer', margin: '0 5px'  }} onClick={ () => unlikeClipSubmit(clip._id) }>♥️</span>
            )
        } else {
            return (
                <span style={{ width: '5rem', cursor: 'pointer', margin: '0 5px'  }} onClick={ () => likeClipSubmit(clip._id) }>🤍</span>
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