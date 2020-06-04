import React from 'react';
import { connect } from 'react-redux';
import CommentComponent from '../../../components/CommentComponent/Comments/commentComponent';
import { Props, State } from './config';
import { createComment } from '../../../redux/actions/commentActions/commentActions';

class Comment extends React.PureComponent<Props, State> {

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
    };

    render() {
        const { handleChange, handleSubmit  } = this;
        const { commentText } = this.state;

        return (
            <div style={{ borderTop: '1px solid grey', marginTop: '1rem' }}>
                <CommentComponent
                    commentText={ commentText }
                    handleChange={ handleChange }
                    handleSubmit={ handleSubmit }
                />
            </div>
        );
    };
};

export default connect(null, { createComment })(Comment);
