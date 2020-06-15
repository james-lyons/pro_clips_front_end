import React from 'react';
import { connect } from 'react-redux';
import { createReply } from '../../../redux/actions/replyActions/replyActions';
import { fetchComments } from '../../../redux/actions/commentActions/commentActions';
import ReplyFormC from '../../../components/Replies/ReplyForm/ReplyFormC';
import { Props, State } from './config';

class ReplyForm extends React.PureComponent<Props, State> {

    state: State = {
        replyText: ''
    }

    private handleChange = (event: any) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state)
    };

    private handleSubmit = async () => {
        event.preventDefault();
        await this.props.createReply(this.state.replyText, this.props.commentId);
        await this.props.fetchComments(this.props.clip._id);
        this.setState({ replyText: '' });
    };

    render() {
        const { replyText } = this.state;
        const { handleChange, handleSubmit } = this;

        return (
            <>
                <ReplyFormC
                    replyText={ replyText }
                    handleChange={ handleChange }
                    handleSubmit={ handleSubmit }
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

export default connect(mapStateToProps, { createReply, fetchComments })(ReplyForm);