import React from 'react';
import { connect } from 'react-redux';
import CommentsComponent from '../../../components/Comments/Comments/commentsComponent';
import { fetchComments } from '../../../redux/actions/commentActions/commentActions';
import { State, Props } from './config';

class Comments extends React.PureComponent<Props, State> {
    state: State = {
        comments: null,
        replies: null,
        replyRef: null
    };

    componentDidMount = async () => {
        const { clip, comments, fetchComments } = this.props;

        if (clip.comments.length > 0) {
            await fetchComments(clip._id);
            this.setState({ comments });
        };
    };

    private handleReplyForm = (commentId: string) => {
        if (commentId === this.state.replyRef) {
            this.setState({ replyRef: null });
        } else {
            this.setState({ replyRef: commentId });
        };
    };

    render() {

        const { replyRef } = this.state;
        const { handleReplyForm } = this;

        return (
            <>
                <CommentsComponent
                    replyRef={ replyRef }
                    handleReplyForm={ handleReplyForm }
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

export default connect(mapStateToProps, { fetchComments })(Comments);
