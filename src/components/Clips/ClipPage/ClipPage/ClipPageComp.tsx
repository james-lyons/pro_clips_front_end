import React from 'react';
import { Props } from './config';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Grid, Image } from 'semantic-ui-react';
import { likeClip, unlikeClip } from '../../../../redux/actions/clipActions/clipActions';
import CommentForm from '../../../../containers/Comments/CommentForm/CommentForm';
import EditTitleForm from '../../ClipActions/EditTitleForm/EditTitleForm';
import Comments from '../../../../containers/Comments/Comments/Comments';
import ClipActions from '../../ClipActions/ClipActions/ClipActionsComp';
import LikeClip from '../LikeClip/LikeClipComp';

const ClipPageComponent: React.SFC<Props> = ({
    clip,
    user,
    newTitle,
    editFormVis,
    handleChange,
    handleFormVis,
    handleClipEdit,
    handleClipDelete
}) => {
    const currentUser = localStorage.getItem('uid');

    return (
        <>
            <div id='clip-page-container-div'>
                <Card id='clip-page-card'>
                    <Card.Content id='clip-page-header-content'>
                        <Image
                            circular
                            size='mini'
                            floated='left'
                            as={ Link }
                            to={`/${ clip.poster_name }`}
                            src={ user.profile_image }
                        />
                        <Card.Header
                            as={ Link }
                            to={`/${ clip.poster_name }`}
                        >
                            { clip.poster_name }
                        </Card.Header>
                        <Card.Meta
                            as={ Link }
                            to={`/browseClips/${ clip.game }`}
                        >
                            { clip.game }
                        </Card.Meta>
                    </Card.Content>

                    <video
                        controls
                        width='100%'
                        src={ clip.url }
                    />

                    <Card.Content id='clip-page-card-header'>
                        <Grid>
                            <Grid.Column width={ 3 }>
                                <LikeClip />
                                { clip.likes.length } likes
                            </Grid.Column>
                            
                            <Grid.Column width={ 11 }>
                                { clip.title }
                            </Grid.Column>

                            <Grid.Column id='clip-page-actions-column' width={ 2 } floated='right'>
                                <ClipActions
                                    clip={ clip }
                                    handleFormVis={ handleFormVis }
                                    handleClipDelete={ handleClipDelete }
                                />
                            </Grid.Column>
                        </Grid>
                    </Card.Content>

                    {
                        editFormVis &&
                        <EditTitleForm
                            newTitle={ newTitle }
                            handleChange={ handleChange }
                            handleClipEdit={ handleClipEdit }
                        />
                    }

                    <Card.Content>
                        <Comments />
                        <CommentForm clipId={ clip._id }/>
                    </Card.Content>
                </Card>
            </div>
        </>
    );
};

export default connect(null, { likeClip, unlikeClip })(ClipPageComponent);