import React from 'react';
import { connect } from 'react-redux';
import { State, Props } from './config';
import { fetchComments, resetComments } from '../../../redux/actions/commentActions/commentActions';
import CommentsComp from '../../../components/Comments/Comments/CommentsComp';

class Comments extends React.PureComponent<Props, State> {
    state: State = {
        replies: null,
        replyRef: null
    };

    componentDidMount = async () => {
        const { clip, fetchComments, resetComments } = this.props;

        if (clip.comments.length > 0) {
            fetchComments(clip._id);
            return;

        } else {
            resetComments();
            return;
        };
    };

    private handleReplyForm = (commentId: string) => {
        if (commentId === this.state.replyRef) {
            this.setState({ replyRef: null });
            return;

        } else {
            this.setState({ replyRef: commentId });
            return;
            
        };
    };

    render() {

        const { replyRef } = this.state;
        const { handleReplyForm } = this;

        return (
            <>
                <CommentsComp
                    replyRef={ replyRef }
                    handleReplyForm={ handleReplyForm }
                />
            </>
        );
    };
};

const mapStateToProps = (state: any) => {
    return {
        clip: state.clipReducer.clip
    };
};

export default connect(mapStateToProps, { fetchComments, resetComments })(Comments);
