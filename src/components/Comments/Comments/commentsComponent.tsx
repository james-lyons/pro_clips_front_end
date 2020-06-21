import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';
import { Props, Comment } from './config';
import { likeComment, unlikeComment  } from '../../../redux/actions/commentActions/commentActions';
import DeleteComment from '../../../containers/Comments/DeleteComment/deleteComment';
import LikeCommentComp from '../../../containers/Comments/LikeComment/LikeComment';
import ReplyForm from '../../../containers/Replies/ReplyForm/ReplyForm';
import Replies from '../../../containers/Replies/Replies/Replies';

const CommentsComponent: React.SFC<Props> = ({
    clip,
    replyRef,
    comments,
    handleReplyForm
})=> {

    const commentMapper = (
            comments: Array<Comment>,
            clipId: string,
            replyRef: null | string
        ) => {

        const commentArray = comments.map((comment) =>
        
            <div key={ comment._id } style={{ margin: '.5 rem' }}>
                <Card
                    style={{ margin: '.5rem' }}
                >
                    <div style={{ display: 'grid', gridTemplateColumns: '90% 10%', width: '100%'}}>
                        <h1 style={{ fontSize: '1.3rem' }}>
                            { comment.author_name }: { comment.comment_text }
                        </h1>
                        <DeleteComment comment={ comment } clipId={ clipId } />
                    </div>
                    <div>
                        <LikeCommentComp comment={ comment } />
                        <span
                            style={{ width: '5rem', cursor: 'pointer' }}
                            onClick={ () => handleReplyForm(comment._id) }>
                                Reply
                        </span>
                    </div>
                    {
                        comment.replies &&
                        <Replies
                            replies={ comment.replies }
                            clipId={ clipId }
                        />
                    }
                    { replyRef === comment._id && <ReplyForm commentId={ comment._id }/>}
                </Card>
            </div>
        );
        return commentArray;
    };

    return (
        <>
            { comments && commentMapper(comments, clip._id, replyRef) }
        </>
    );
};

const mapStateToProps = (state: any) => {
    return {
        comments: state.commentReducer.comments,
        clip: state.clipReducer.clip
    };
};

export default connect(mapStateToProps, { likeComment, unlikeComment })(CommentsComponent);
