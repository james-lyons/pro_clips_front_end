import React from 'react';
import { connect } from 'react-redux';
import { createReply } from '../../../redux/actions/replyActions/replyActions';
import ReplyFormC from '../../../components/Replies/ReplyForm/ReplyFormC';
import { Props, State } from './config';

class ReplyForm extends React.PureComponent<Props, State> {

    state = {
        replyText: ''
    }

    private handleChange = (event: any) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    private handleSubmit = async () => {
        await this.props.createReply(this.state.replyText);
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

export default connect(null, { createReply })(ReplyForm);