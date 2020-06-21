import React from 'react';
import { Props } from './config';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { likeClip, unlikeClip } from '../../../../redux/actions/clipActions/clipActions';
import UserClipSettings from '../../../../containers/Clips/UserClipSettings/UserClipSettingsComp';
import CommentForm from '../../../../containers/Comments/CommentForm/CommentForm';
import ClipSettings from '../../ClipSettings/ClipSettings/ClipSettingsComp';
import Comments from '../../../../containers/Comments/Comments/Comments';
import LoginModal from '../../../LoginModal/LoginModal';
import LikeClip from '../LikeClip/LikeClipComp';

const ClipPageComponent: React.SFC<Props> = ({
    clip,
    showLoginModal,
    handleShowLoginModal,
    handleCloseLoginModal
}) => {
    const currentUser = localStorage.getItem('uid');

    return (
        <>
            <LoginModal
                showLoginModal={ showLoginModal }
                handleCloseLoginModal={ handleCloseLoginModal }
            />

            <Card
                key={ clip._id }
                style={{ maxWidth: '48.5vw', margin: '3rem auto' }}
            >
                <video width={ 650 } height={ 410 } src={ clip.url } controls/>
                <Link to={ `/${ clip.poster_name }` }>{ clip.poster_name }</Link>
                {
                    currentUser === clip.poster
                    && <UserClipSettings />
                    || <ClipSettings clip={ clip } />
                }
                <Comments />
                <LikeClip
                    showLoginModal={ showLoginModal }
                    handleShowLoginModal={ handleShowLoginModal }
                />
                <CommentForm clipId={ clip._id }/>
            </Card>
        </>
    );
};

export default connect(null, { likeClip, unlikeClip })(ClipPageComponent);