import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';
import ClipSettings from './ClipSettings/ClipSettings/ClipSettingsComp';
import UserClipSettings from './ClipSettings/UserClipSettings/UserClipSettingsComp';
import CommentForm from '../../containers/CommentContainer/CommentForm/CommentForm';
import Comments from '../../containers/CommentContainer/Comments/Comments';
import { Props } from './config';
import { likeClip, unlikeClip } from '../../redux/actions/clipActions/clipActions';

// const { userName, profile_image, clips, followers, following, bio } = user;

const ClipPageComponent: React.SFC<Props> = ({
    clip,
    clipVis,
    newTitle,
    showClip,
    handleChange,
    handleClipEdit, 
    handleClipDelete
}) => {
    const currentUser = localStorage.getItem('uid');

    return (
        <Card
            key={ clip._id }
            style={{ maxWidth: '48.5vw', margin: '3rem auto' }}
        >
            <video width={ 650 } height={ 410 } src={ clip.url } controls/>
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
            <CommentForm clipId={ clip._id }/>
            <button onClick={ likeClip(clip._id) }>like</button>
            <button onClick={ unlikeClip(clip._id) }>unlike</button>
        </Card>
    );
};

export default connect(null, { likeClip, unlikeClip })(ClipPageComponent);