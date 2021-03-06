import React from 'react';
import { connect } from 'react-redux';
import { Props, State } from './config';
import { createComment, fetchComments } from '../../../redux/actions/commentActions/commentActions';
import CommentFormComp from '../../../components/Comments/CommentForm/CommentFormC';

class CommentForm extends React.PureComponent<Props, State> {

    state: State = {
        commentText: ''
    };

    private handleChange = () => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    private handleSubmit = async () => {
        event.preventDefault();
        const { clipId, createComment, fetchComments } = this.props;

        await createComment(this.state.commentText, clipId);
        await fetchComments(clipId);
        this.setState({ commentText: '' });
    };

    render() {
        const { handleChange, handleSubmit  } = this;
        const { commentText } = this.state;

        return (
            <div id='comment-form-container-div'>
                <CommentFormComp
                    commentText={ commentText }
                    handleChange={ handleChange }
                    handleSubmit={ handleSubmit }
                />
            </div>
        );
    };
};

export default connect(null, { createComment, fetchComments })(CommentForm);
