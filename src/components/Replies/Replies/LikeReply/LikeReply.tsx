import React from 'react';
import { connect } from 'react-redux';
import { likeReply, unlikeReply } from '../../../../redux/actions/replyActions/replyActions';
import { fetchComments,  } from '../../../../redux/actions/commentActions/commentActions';
import { Props, State, Reply } from './config';

class LikeReply extends React.PureComponent<Props, State> {

    state = {
        comments: null
    };

    likeReplySubmit = async (reply: Reply, clipId: string) => {
        await this.props.likeReply(reply._id);
        await this.props.fetchComments(clipId);
        this.setState({
            comments: this.props.comments
        });
    };

    unlikeReplySubmit = async (reply: Reply, clipId: string) => {
        await this.props.unlikeReply(reply._id);
        await this.props.fetchComments(clipId);
        this.setState({
            comments: this.props.comments
        });
    };

    renderLikeButton = (reply: Reply, clipId: string) => {
        let currentUser = localStorage.getItem('uid');
        let i = reply.likes.indexOf(currentUser)

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
                    onClick={ () => this.unlikeReplySubmit(reply, clipId) }>
                        unlike
                </button>
            )
        } else {
            return (
                <button style={{ width: '5rem '}}
                    onClick={ () => this.likeReplySubmit(reply, clipId) }>
                        like
                </button>
            );
        };
    };

    render() {

        const { renderLikeButton } = this;

        return (
            <>
                { renderLikeButton(this.props.reply, this.props.clipId) }
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