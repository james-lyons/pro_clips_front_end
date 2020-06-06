import React from 'react';
import { connect } from 'react-redux';
import { deleteComment, fetchComments } from '../../../../redux/actions/commentActions/commentActions';
import { Props } from './config';

class DeleteComment extends React.PureComponent <Props> {

    handleSubmit = async (commentId: string, clipId: string) => {
        await this.props.deleteComment(commentId);
        await this.props.fetchComments(clipId);
    };

    render() {
        const currentUser = localStorage.getItem('uid');
        const { handleSubmit } = this;
        const { comment, clip } = this.props;

        return (
            <>
                {
                    currentUser === comment.author_id &&
                    <button onClick={ () => handleSubmit(comment._id, clip._id) }>Delete</button>
                }
            </>
        );
    };
};

export default connect(null, { deleteComment, fetchComments })(DeleteComment);