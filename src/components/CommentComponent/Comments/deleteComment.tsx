import React from 'react';
import { connect } from 'react-redux';
import { deleteComment, fetchComments } from '../../../redux/actions/commentActions/commentActions';

interface Props {
    commentId: string,
    clipId: string,
    deleteComment: (commentId: string) => void,
    fetchComments: (clipId: string) => void,
};

class DeleteComment extends React.PureComponent <Props> {

    handleSubmit = async (commentId: string, clipId: string) => {
        await this.props.deleteComment(commentId);
        await this.props.fetchComments(clipId);
    };

    render() {
        const currentUser = localStorage.getItem('uid');
        const { handleSubmit } = this;
        const { commentId, clipId } = this.props;

        return (
            <>
                { currentUser && <button onClick={ () => handleSubmit(commentId, clipId) }>Delete</button> }
            </>
        );
    };
};

export default connect(null, { deleteComment, fetchComments })(DeleteComment);