import React from 'react';
import { connect } from 'react-redux';
import { Props, State, ReduxState, Event } from './config';
import { createReply } from '../../../redux/actions/replyActions/replyActions';
import { fetchComments } from '../../../redux/actions/commentActions/commentActions';
import ReplyFormComp from '../../../components/Replies/ReplyForm/ReplyFormComp';

class ReplyForm extends React.PureComponent<Props, State> {

    state: State = {
        replyText: ''
    };

    private handleChange = (event: Event) => {
        this.setState({
            replyText: event.target.value
        });
    };

    private handleSubmit = async () => {
        event.preventDefault();
        const { commentId, clip, createReply, fetchComments } = this.props;

        await createReply(this.state.replyText, commentId);
        await fetchComments(clip._id);

        this.setState({ replyText: '' });
    };

    render() {
        const { replyText } = this.state;
        const { handleChange, handleSubmit } = this;

        return (
            <>
                <ReplyFormComp
                    replyText={ replyText }
                    handleChange={ handleChange }
                    handleSubmit={ handleSubmit }
                />
            </>
        );
    };
};

const mapStateToProps = (state: ReduxState) => {
    return {
        clip: state.clipReducer.clip
    };
};

export default connect(mapStateToProps, { createReply, fetchComments })(ReplyForm);