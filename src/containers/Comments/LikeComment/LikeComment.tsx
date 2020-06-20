import React from 'react';
import { connect } from 'react-redux';
import { fetchComments, likeComment, unlikeComment } from '../../../redux/actions/commentActions/commentActions';
import { Props, State, Comment } from './config';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class LikeCommentComp extends React.PureComponent<Props, State> {

    state: State = {
        comments: null,
        showLoginModal: false
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

    private handleShowLoginModal = () => {
        this.setState({
            showLoginModal: true
        });
    };

    private handleCloseLoginModal = () => {
        this.setState({
            showLoginModal: false
        });
    };

    renderLikeButton = (comment: Comment) => {
        let currentUser = localStorage.getItem('uid');
        let i = comment.likes.indexOf(currentUser)

        if (!currentUser) {
            return (
                <span style={{ cursor: 'pointer', margin: '0 5px' }}
                    onClick={ () => this.handleShowLoginModal() }>
                        🤍
                </span>
            );
        } else if (i >= 0) {
            return (
                <span style={{ cursor: 'pointer', margin: '0 5px'  }}
                    onClick={ () => this.unlikeCommentSubmit(comment) }>
                        ♥️
                </span>
            )
        } else {
            return (
                <span style={{ cursor: 'pointer', margin: '0 5px'  }}
                    onClick={ () => this.likeCommentSubmit(comment) }>
                        🤍
                </span>
            );
        };
    };

    render() {

        const { renderLikeButton } = this;

        return (
            <>
                { renderLikeButton(this.props.comment) }
                <Modal show={ this.state.showLoginModal } onHide={ this.handleCloseLoginModal }>
                    <Modal.Header closeButton>
                        <Modal.Title>ProClips</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><Link to="/login">Login</Link> to like, comment, and reply!</Modal.Body>
                </Modal>
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