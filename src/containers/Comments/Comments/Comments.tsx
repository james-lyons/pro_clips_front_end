import React from 'react';
import { connect } from 'react-redux';
import CommentsComponent from '../../../components/Comments/Comments/Comments/commentsComponent';
import { fetchComments, deleteComment } from '../../../redux/actions/commentActions/commentActions';
import { State, Props } from './config';

class Comments extends React.PureComponent<Props, State> {
    state: State = {
        comments: null,
        replies: null,
        replyRef: null
    };

    componentDidMount = async () => {
        const { clip } = this.props;

        if (clip.comments.length > 0) {
            await this.props.fetchComments(clip._id);
            this.setState({
                comments: this.props.comments
            });
        };
    };

    private deleteComment = async (commentId: string) => {
        console.log(this.props);
        await this.props.deleteComment(commentId);
        await this.props.fetchComments(this.props.clip._id);
    };

    private handleReplyForm = (commentId: string) => {
        if (commentId === this.state.replyRef) {
            this.setState({
                replyRef: null
            });
        } else {
            this.setState({
                replyRef: commentId
            });
        };
        console.log(this.state.replyRef);
    };

    render() {

        const { handleReplyForm } = this;
        const { replyRef } = this.state;

        return (
            <>
                <CommentsComponent
                    replyRef={ replyRef }
                    comments={ this.props.comments }
                    handleReplyForm={ handleReplyForm }
                    deleteComment= { this.deleteComment }
                />
            </>
        );
    };
};

const mapStateToProps = (state: any) => {
    return {
        comments: state.commentReducer.comments,
        clip: state.clipReducer.clip
    };
};

export default connect(mapStateToProps, { fetchComments, deleteComment })(Comments);
