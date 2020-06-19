import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Modal } from 'react-bootstrap';
import ClipSettings from '../ClipSettings/ClipSettings/ClipSettingsComp';
import UserClipSettings from '../ClipSettings/UserClipSettings/UserClipSettingsComp';
import CommentForm from '../../../containers/Comments/CommentForm/CommentForm';
import Comments from '../../../containers/Comments/Comments/Comments';
import { Props } from './config';
import { likeClip, unlikeClip } from '../../../redux/actions/clipActions/clipActions';
import LikeClip from './LikeClip/LikeClipComp';

const ClipPageComponent: React.SFC<Props> = ({
    clip,
    clipVis,
    newTitle,
    showLoginModal,
    showClip,
    handleChange,
    handleClipEdit, 
    handleClipDelete,
    handleShowLoginModal,
    handleCloseLoginModal
}) => {
    const currentUser = localStorage.getItem('uid');

    return (
        <>
            <Modal show={ showLoginModal } onHide={ handleCloseLoginModal }>
                <Modal.Header closeButton>
                        <Modal.Title>ProClips</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><Link to="/login">Login</Link> to like, comment, and reply!</Modal.Body>
                </Modal>
            <Card
                key={ clip._id }
                style={{ maxWidth: '48.5vw', margin: '3rem auto' }}
            >
                <video width={ 650 } height={ 410 } src={ clip.url } controls/>
                <Link to={`/${ clip.poster_name }`}>{ clip.poster_name }</Link>
                {
                    currentUser === clip.poster
                    && <UserClipSettings
                        clip={ clip }
                        clipVis={ clipVis }
                        newTitle={ newTitle }
                        showClip={ showClip }
                        handleChange={ handleChange }
                        handleClipEdit={ handleClipEdit }
                        handleClipDelete={ handleClipDelete }
                    />
                    || <ClipSettings clip={ clip } />
                }
                <Comments />
                <LikeClip
                    showLoginModal={ showLoginModal }
                    handleShowLoginModal={ handleShowLoginModal }
                    handleCloseLoginModal={ handleCloseLoginModal }
                />
                <CommentForm clipId={ clip._id }/>
            </Card>
        </>
    );
};

export default connect(null, { likeClip, unlikeClip })(ClipPageComponent);