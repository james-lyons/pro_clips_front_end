import React from 'react';
import { connect } from 'react-redux';
import DeleteReply from './DeleteReply/deleteReply';
import { likeReply, unlikeReply } from '../../../redux/actions/replyActions/replyActions';
import { Card } from 'react-bootstrap';
import { Props, Reply } from './config';

const RepliesComp: React.SFC<Props> = ({ replies, clipId }) => {

    const currentUser = localStorage.getItem('uid');

    const renderLikeButton = (reply: Reply) => {
        let i = reply.likes.indexOf(currentUser)
        if (!currentUser) {
            return (
                <button onClick={ () => alert('login to like, reply, and follow!') }>like reply</button>
            );
        } else if (i >= 0) {
            return (
                <button onClick={ unlikeReply(reply._id) }>unlike reply</button>
            )
        } else {
            return (
                <button onClick={ likeReply(reply._id) }>like reply</button>
            );
        };
    };

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
                    { renderLikeButton(reply) }
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

export default connect(null, { likeReply, unlikeReply })(RepliesComp);
