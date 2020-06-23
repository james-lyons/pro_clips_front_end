import React from 'react';
import { connect } from 'react-redux';
import { Props, State, Reply, ReduxState } from './config';
import { fetchComments } from '../../../redux/actions/commentActions/commentActions';
import { likeReply, unlikeReply } from '../../../redux/actions/replyActions/replyActions';
import LoginModal from '../../../components/LoginModal/LoginModal';

class LikeReply extends React.PureComponent<Props, State> {

    state: State = {
        comments: null,
        showLoginModal: false
    };

    private likeReplySubmit = async (reply: Reply, clipId: string) => {
        const { likeReply, fetchComments, comments } = this.props;
        
        await likeReply(reply._id);
        await fetchComments(clipId);

        this.setState({ comments });
    };

    private unlikeReplySubmit = async (reply: Reply, clipId: string) => {
        const { unlikeReply, fetchComments, comments } = this.props;

        await unlikeReply(reply._id);
        await fetchComments(clipId);

        this.setState({ comments });
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

        const { reply, clipId } = this.props;
        const { showLoginModal } = this.state;
        const { renderLikeButton, handleCloseLoginModal } = this;

        return (
            <>
                { renderLikeButton(reply, clipId) }
                <LoginModal 
                    showLoginModal={ showLoginModal }
                    handleCloseLoginModal={ handleCloseLoginModal }
                /> 
            </>
        );
    };
};

const mapStateToProps = (state: ReduxState) => {
    return {
        comments: state.commentReducer.comments
    };
};

export default connect(mapStateToProps, {
    likeReply,
    unlikeReply,
    fetchComments
})(LikeReply);