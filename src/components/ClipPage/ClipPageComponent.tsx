import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';
import ClipSettings from './ClipSettings/ClipSettings/ClipSettingsComp';
import UserClipSettings from './ClipSettings/UserClipSettings/UserClipSettingsComp';
import CommentForm from '../../containers/Comments/CommentForm/CommentForm';
import Comments from '../../containers/Comments/Comments/Comments';
import { Props } from './config';
import { likeClip, unlikeClip } from '../../redux/actions/clipActions/clipActions';
import LikeClip from './LikeClip/LikeClipComp';

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
            <LikeClip />
        </Card>
    );
};

export default connect(null, { likeClip, unlikeClip })(ClipPageComponent);