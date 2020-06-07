import React from 'react';
import { connect } from 'react-redux';
import ReplyComponent from '../../../components/Replies/Replies/replyComponent';
import { Props, State } from './config';

class Reply extends React.PureComponent<Props, State> {

    state: State = {
        replyText: ''
    };

    private handleChange = (event: any) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
        const { handleChange } = this;

        return (
            <>
                <ReplyComponent handleChange={ handleChange }/>
            </>
        );
    };
};

export default connect(null, null)(Reply);
