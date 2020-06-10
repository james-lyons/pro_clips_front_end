import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';
import { Props, Comment, ReplyRef } from './config';
import { deleteComment, fetchComments, likeComment, unlikeComment  } from '../../../../redux/actions/commentActions/commentActions';
import DeleteComment from '../DeleteComment/deleteComment';
// import Replies from '../../../../containers/Replies/Replies/Replies';
import RepliesComp from '../../../Replies/Replies/RepliesC';
import ReplyForm from '../../../../containers/Replies/ReplyForm/ReplyForm';

const CommentsComponent: React.SFC<Props> = ({
    clip, replyRef, comments, handleReplyForm
})=> {
    
    const commentMapper = (comments: Array<Comment>, clipId: string, replyRef: ReplyRef) => {
        const commentArray = comments.map((comment) =>
            <div key={ comment._id } style={{ margin: '.5 rem' }}>
                <Card
                    style={{ margin: '.5rem' }}
                >
                    <div style={{ display: 'grid', gridTemplateColumns: '80% 10% 10%', width: '100%'}}>
                        <h1 style={{ fontSize: '1.3rem' }}>{ comment.author_name }: { comment.comment_text } </h1>
                        <button onClick={ () => handleReplyForm(comment._id) }>Reply</button>
                        <DeleteComment comment={ comment } clipId={ clipId } />
                    </div>
                    { comment.replies && <RepliesComp replies={ comment.replies } clipId={ clipId }/> }
                    { replyRef === comment._id && <ReplyForm commentId={ comment._id }/>}
                    <button onClick={ likeComment(comment._id) }>like comment</button>
                    <button onClick={ unlikeComment(comment._id) }>unlike comment</button>
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

export default connect(mapStateToProps, { deleteComment, fetchComments, likeComment, unlikeComment })(CommentsComponent);
