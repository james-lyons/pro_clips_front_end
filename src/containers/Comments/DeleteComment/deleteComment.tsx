import React from 'react';
import { Props } from './config';
import { connect } from 'react-redux';
import { deleteComment, fetchComments } from '../../../redux/actions/commentActions/commentActions';

class DeleteComment extends React.PureComponent<Props> {

    handleSubmit = async (commentId: string, clipId: string) => {
        const { deleteComment, fetchComments } = this.props;
        await deleteComment(commentId);
        await fetchComments(clipId);
    };

    render() {
        const currentUser = localStorage.getItem('uid');
        const { handleSubmit } = this;
        const { comment, clipId } = this.props;

        return (
            <>
                {
                    currentUser === comment.author_id &&
                    <button onClick={ () => handleSubmit(comment._id, clipId) }>Delete</button>
                }
            </>
        );
    };
};

export default connect(null, { deleteComment, fetchComments })(DeleteComment);