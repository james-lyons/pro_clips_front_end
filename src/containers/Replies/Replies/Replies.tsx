import React from 'react';
import RepliesComp from '../../../components/Replies/Replies/RepliesComp';
import { connect } from 'react-redux';
import { deleteReply } from '../../../redux/actions/replyActions/replyActions';
import { Props, State } from './config';

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
