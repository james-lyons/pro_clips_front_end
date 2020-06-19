import React from 'react';
import { connect } from 'react-redux';
import { likeReply, unlikeReply } from '../../../../redux/actions/replyActions/replyActions';
import { fetchComments,  } from '../../../../redux/actions/commentActions/commentActions';
import { Props, State, Reply } from './config';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class LikeReply extends React.PureComponent<Props, State> {

    state: State = {
        comments: null,
        showLoginModal: false
    };

    private likeReplySubmit = async (reply: Reply, clipId: string) => {
        await this.props.likeReply(reply._id);
        await this.props.fetchComments(clipId);
        this.setState({
            comments: this.props.comments
        });
    };

    private unlikeReplySubmit = async (reply: Reply, clipId: string) => {
        await this.props.unlikeReply(reply._id);
        await this.props.fetchComments(clipId);
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

    renderLikeButton = (reply: Reply, clipId: string) => {
        let currentUser = localStorage.getItem('uid');
        let i = reply.likes.indexOf(currentUser)

        if (!currentUser) {
            return (
                <span style={{ cursor: 'pointer', margin: '0 5px' }}
                    onClick={ () => this.handleShowLoginModal() }>
                        🤍
                </span>
            );
        } else if (i >= 0) {
            return (
                <span style={{ cursor: 'pointer', margin: '0 5px' }}
                    onClick={ () => this.unlikeReplySubmit(reply, clipId) }>
                         ♥️
                </span>
            )
        } else {
            return (
                <span style={{ cursor: 'pointer', margin: '0 5px' }}
                    onClick={ () => this.likeReplySubmit(reply, clipId) }>
                        🤍
                </span>
            );
        };
    };

    render() {

        const { renderLikeButton } = this;

        return (
            <>
                { renderLikeButton(this.props.reply, this.props.clipId) }
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

export default connect(mapStateToProps, { fetchComments, likeReply, unlikeReply })(LikeReply);