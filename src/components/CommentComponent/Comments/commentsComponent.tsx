import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';
import { Props, Comment } from './config';
import { deleteComment, fetchComments } from '../../../redux/actions/commentActions/commentActions';
import DeleteComment from './DeleteComment/deleteComment';

const CommentsComponent: React.SFC<Props> = ({ comments, clip }) => {
    
    const commentMapper = (comments: Array<Comment>, clipId: object) => {
        const commentArray = comments.map((comment) =>
            <div key={ comment._id } style={{ margin: '.5 rem' }}>
                <Card
                    style={{ margin: '.5rem' }}
                >
                    <div style={{ display: 'grid', gridTemplateColumns: '90% 10%', width: '100%'}}>
                        <h1 style={{ fontSize: '1.3rem' }}>{ comment.author_name }: { comment.comment_text } </h1>
                        <DeleteComment comment={ comment } clip={ clip } />
                    </div>
                </Card>
            </div>
        );
        return commentArray;
    };

    return (
        <>
            { comments && commentMapper(comments, clip._id) }
        </>
    );
};

const mapStateToProps = (state: any) => {
    return {
        comments: state.commentReducer.comments,
        clip: state.clipReducer.clip
    };
};

export default connect(mapStateToProps, { deleteComment, fetchComments })(CommentsComponent);
