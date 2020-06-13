import React from 'react';
import { connect } from 'react-redux';
import CommentFormComp from '../../../components/Comments/CommentForm/commentFormComp';
import { Props, State } from './config';
import { createComment, fetchComments } from '../../../redux/actions/commentActions/commentActions';

class CommentForm extends React.PureComponent<Props, State> {

    state: State = {
        commentText: ''
    };

    private handleChange = (event: any) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    private handleSubmit = async (event: any) => {
        event.preventDefault();
        await this.props.createComment(this.state.commentText, this.props.clipId);
        await this.props.fetchComments(this.props.clipId);
    };

    render() {
        const { handleChange, handleSubmit  } = this;
        const { commentText } = this.state;

        return (
            <div style={{ borderTop: '1px solid grey', marginTop: '1rem' }}>
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
