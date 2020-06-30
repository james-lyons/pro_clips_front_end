import React from 'react';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react';
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
        const { likeReply, fetchComments } = this.props;
        
        await likeReply(reply._id);
        await fetchComments(clipId);

        this.setState({ comments: this.props.comments });
    };

    private unlikeReplySubmit = async (reply: Reply, clipId: string) => {
        const { unlikeReply, fetchComments } = this.props;

        await unlikeReply(reply._id);
        await fetchComments(clipId);

        this.setState({ comments: this.props.comments });
    };

    renderLikeButton = (reply: Reply, clipId: string) => {
        let currentUser = localStorage.getItem('uid');
        let i = reply.likes.indexOf(currentUser)

        if (!currentUser) {
            return (
                <span className='like-clip-icon'> 
                    <LoginModal modalName={ <Icon name='heart outline' color='red'/> }/>
                </span>
            );
        } else if (i >= 0) {
            return (
                <span className='like-button'
                    onClick={ () => this.unlikeReplySubmit(reply, clipId) }
                >
                        <Icon name='heart' color='red' />
                </span>
            )
        } else {
            return (
                <span className='like-button'
                    onClick={ () => this.likeReplySubmit(reply, clipId) }
                >
                    <Icon name='heart outline' color='red' />
                </span>
            );
        };
    };

    render() {

        const { reply, clipId } = this.props;

        return (
            <>
                { this.renderLikeButton(reply, clipId) }
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