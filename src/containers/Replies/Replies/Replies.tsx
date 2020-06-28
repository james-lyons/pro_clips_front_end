import React from 'react';
import { connect } from 'react-redux';
import { Props, State } from './config';
import { deleteReply } from '../../../redux/actions/replyActions/replyActions';
import RepliesComp from '../../../components/Replies/Replies/RepliesComp';

class Replies extends React.PureComponent<Props, State> {

    render() {

        const { replies, clipId } = this.props;

        return (
            <>
                <RepliesComp
                    replies={ replies }
                    clipId={ clipId }
                />
            </>
        );
    };
};

export default connect(null, { deleteReply })(Replies);
