import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Comment, Grid, Image } from 'semantic-ui-react';
import { Props, CommentI, ReduxProps } from './config';
import { likeComment, unlikeComment } from '../../../redux/actions/commentActions/commentActions';
import CommentActions from '../../../containers/Comments/CommentActions/CommentActions';
import LikeCommentComp from '../../../containers/Comments/LikeComment/LikeComment';
import ReplyForm from '../../../containers/Replies/ReplyForm/ReplyForm';
import Replies from '../../../containers/Replies/Replies/Replies';

const CommentsComp: React.SFC<Props> = ({
    clip,
    replyRef,
    comments,
    handleReplyForm
})=> {

    const commentMapper = (
            comments: Array<CommentI>,
            clipId: string,
            replyRef: null | string
        ) => {

        const commentArray = comments.map((comment) =>
            <Comment key={ comment._id }>
                <Grid.Column floated='right'>
                    <CommentActions comment={ comment } clipId={ clip._id } />
                </Grid.Column>

                <Image
                    as={ Link }
                    to={ `/${ comment.author_name }` }
                    circular
                    size='mini'
                    floated='left'
                    src={ comment.author_profile_image }
                />

                <Comment.Content className='comment-content-container'>
                    <Comment.Author as={ Link } to={`/${ comment.author_name }`}>
                        { comment.author_name }
                    </Comment.Author>
                    <Comment.Text>
                        { comment.comment_text }
                    </Comment.Text>
                    
                    <LikeCommentComp comment={ comment }/>
                    <span
                        className='reply-button'
                        onClick={ () => handleReplyForm(comment._id) }
                    >
                        Reply
                    </span>


                </Comment.Content>

                <Comment.Content id='comment-replies-container'>
                    {
                        comment.replies &&
                        <Comment.Group>
                            <Replies replies={ comment.replies } clipId={ clipId }/>
                        </Comment.Group>
                    }
                    { replyRef === comment._id && <ReplyForm commentId={ comment._id }/> }
                </Comment.Content>
            </Comment>
        );
        return commentArray;
    };

    return (
        <Comment.Group id='comment-group-container'>
            { comments && commentMapper(comments, clip._id, replyRef) }
        </Comment.Group>
    );
};

const mapStateToProps = (state: ReduxProps) => {
    return {
        comments: state.commentReducer.comments,
        clip: state.clipReducer.clip
    };
};

export default connect(mapStateToProps, { likeComment, unlikeComment })(CommentsComp);
