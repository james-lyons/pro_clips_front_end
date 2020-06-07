import React from 'react';
import DeleteReply from './DeleteReply/deleteReply';
import { Card } from 'react-bootstrap';
import { Props, Reply } from './config';

const RepliesComp: React.SFC<Props> = ({ replies, clipId }) => {

    const replyMapper = (replies: Array<Reply>, clipId: string) => {
        const replyArray = replies.map((reply) =>
            <div key={ reply._id } style={{ margin: '.5 rem' }}>
                <Card
                    style={{ margin: '.5rem' }}
                >
                    <div style={{ display: 'grid', gridTemplateColumns: '90% 10%', width: '100%'}}>
                        <h1 style={{ fontSize: '1.3rem' }}>{ reply.author_name }: { reply.reply_text } </h1>
                        <DeleteReply reply={ reply } clipId={ clipId } />
                    </div>
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

export default RepliesComp;
