import React from 'react';
import { connect } from 'react-redux';
import { fetchComments, likeComment, unlikeComment } from '../../../../redux/actions/commentActions/commentActions';
import { Props, State, Comment } from './config';

class LikeCommentComp extends React.PureComponent<Props, State> {

    state = {
        comments: null
    };

    likeCommentSubmit = async (comment: Comment) => {
        await this.props.likeComment(comment._id);
        await this.props.fetchComments(comment.clip_id);
        
        this.setState({
            comments: this.props.comments
        });
    };

    unlikeCommentSubmit = async (comment: Comment) => {
        await this.props.unlikeComment(comment._id);
        await this.props.fetchComments(comment.clip_id);

        this.setState({
            comments: this.props.comments
        });
    };

    renderLikeButton = (comment: Comment) => {
        let currentUser = localStorage.getItem('uid');
        let i = comment.likes.indexOf(currentUser)

        if (!currentUser) {
            return (
                <button style={{ width: '5rem '}}
                    onClick={ () => alert('login to like, comment, and follow!') }>
                        like clip
                </button>
            );
        } else if (i >= 0) {
            return (
                <button style={{ width: '5rem '}}
                    onClick={ () => this.unlikeCommentSubmit(comment) }>
                        unlike
                </button>
            )
        } else {
            return (
                <button style={{ width: '5rem '}}
                    onClick={ () => this.likeCommentSubmit(comment) }>
                        like
                </button>
            );
        };
    };

    render() {

        const { renderLikeButton } = this;

        return (
            <>
                { renderLikeButton(this.props.comment) }
            </>
        );
    };
};

const mapStateToProps = (state: any) => {
    return {
        comments: state.commentReducer.comments
    };
};

export default connect(mapStateToProps, { fetchComments, likeComment, unlikeComment })(LikeCommentComp);