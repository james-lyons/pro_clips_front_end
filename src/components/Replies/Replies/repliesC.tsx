import React from 'react';
import { connect } from 'react-redux';
import { likeReply, unlikeReply } from '../../../redux/actions/replyActions/replyActions';
import { Card } from 'react-bootstrap';
import { Props, Reply } from './config';
import DeleteReply from '../../../containers/Replies/DeleteReply/deleteReply';
import LikeReply from '../../../containers/Replies/LikeReply/LikeReply';

const RepliesC: React.SFC<Props> = ({
    replies,
    clipId
}) => {

    const replyMapper = (replies: Array<Reply>, clipId: string) => {
        const replyArray = replies.map((reply) =>
            <div key={ reply._id } style={{ margin: '.5 rem' }}>
                <Card
                    style={{ margin: '.5rem' }}
                >
                    <div style={{
                        width: '100%',
                        display: 'grid',
                        gridTemplateColumns: '90% 10%'
                    }}>
                        <h1 style={{ fontSize: '1.3rem' }}>
                            { reply.author_name }: { reply.reply_text }
                        </h1>
                        <DeleteReply reply={ reply } clipId={ clipId } />
                    </div>
                    
                    <LikeReply reply={ reply } clipId={ clipId } />
                </Card>
            </div>
        );
        return replyArray;
    };

    return (
        <>
            { replies && replyMapper(replies, clipId) }
        </>
    );
};

export default connect(null, { likeReply, unlikeReply })(RepliesC);
