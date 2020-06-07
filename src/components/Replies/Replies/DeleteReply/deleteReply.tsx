import React from 'react';
import { connect } from 'react-redux';
import { deleteReply } from '../../../../redux/actions/replyActions/replyActions';
import { fetchComments } from '../../../../redux/actions/commentActions/commentActions';
import { Props } from './config';

class DeleteComment extends React.PureComponent <Props> {

    handleSubmit = async (replyId: string, clipId: string) => {
        await this.props.deleteReply(replyId);
        await this.props.fetchComments(clipId);
    };

    render() {
        const currentUser = localStorage.getItem('uid');
        const { handleSubmit } = this;
        const { reply, clipId } = this.props;

        return (
            <>
                {
                    currentUser === reply.author_id &&
                    <button onClick={ () => handleSubmit(reply._id, clipId) }>Delete</button>
                }
            </>
        );
    };
};

export default connect(null, { deleteReply, fetchComments })(DeleteComment);