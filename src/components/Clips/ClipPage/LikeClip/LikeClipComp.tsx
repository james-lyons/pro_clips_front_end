import React from 'react';
import { connect } from 'react-redux';
import { likeClip, unlikeClip } from '../../../../redux/actions/clipActions/clipActions';
import { Props, Clip } from './config';

const LikeClip: React.SFC<Props>= ({
    clip,
    showLoginModal,
    likeClip,
    unlikeClip,
    handleShowLoginModal,
    handleCloseLoginModal
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
                <button style={{ width: '5rem '}} onClick={ () => handleShowLoginModal() }>like clip</button>
            );
        } else if (i >= 0) {
            return (
                <button style={{ width: '5rem '}} onClick={ () => unlikeClipSubmit(clip._id) }>unlike</button>
            )
        } else {
            return (
                <button style={{ width: '5rem '}} onClick={ () => likeClipSubmit(clip._id) }>like</button>
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