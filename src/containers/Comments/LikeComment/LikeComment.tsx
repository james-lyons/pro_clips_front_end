import React from 'react';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react';
import { Props, State, Comment } from './config';
import { fetchComments, likeComment, unlikeComment } from '../../../redux/actions/commentActions/commentActions';
import LoginModal from '../../../components/LoginModal/LoginModal';

class LikeCommentComp extends React.PureComponent<Props, State> {

    state: State = {
        comments: null
    };

    likeCommentSubmit = async (comment: Comment) => {
        const { likeComment, fetchComments } = this.props;

        await likeComment(comment._id);
        await fetchComments(comment.clip_id);
        
        this.setState({ comments: this.props.comments });
    };

    unlikeCommentSubmit = async (comment: Comment) => {
        const { unlikeComment, fetchComments } = this.props;

        await unlikeComment(comment._id);
        await fetchComments(comment.clip_id);

        this.setState({ comments: this.props.comments });
    };

    renderLikeButton = (comment: Comment) => {
        let currentUser = localStorage.getItem('uid');
        let i = comment.likes.indexOf(currentUser)

        if (!currentUser) {
            return (
                <span className='like-button'>
                    <LoginModal modalName={ <Icon name='heart outline' color='red'/> }/>
                </span>
            );
        } else if (i >= 0) {
            return (
                <span className='like-button'
                    onClick={ () => this.unlikeCommentSubmit(comment) }
                >
                     <Icon name='heart' color='red' />
                </span>
            )
        } else {
            return (
                <span className='like-button'
                    onClick={ () => this.likeCommentSubmit(comment) }
                >
                    <Icon name='heart outline' color='red' />
                </span>
            );
        };
    };

    render() {

        const { renderLikeButton } = this;
        const { comment } = this.props;

        return (
            <>
                { renderLikeButton(comment) }
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