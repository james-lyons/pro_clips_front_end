import React from 'react';
import { connect } from 'react-redux';
import RepliesComp from '../../../components/Replies/Replies/repliesC';
import { deleteReply } from '../../../redux/actions/replyActions/replyActions';
import { Props, State } from './config';

class Replies extends React.PureComponent<Props, State> {

    render() {

        return (
            <>
                <RepliesComp replies={ this.props.replies } />
            </>
        );
    };
};

export default connect(null, { deleteReply })(Replies);
