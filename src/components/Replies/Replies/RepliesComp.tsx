import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Props, Reply } from './config';
import { Comment, Grid, Image } from 'semantic-ui-react';
import { likeReply, unlikeReply } from '../../../redux/actions/replyActions/replyActions';
import DeleteReply from '../../../containers/Replies/DeleteReply/deleteReply';
import LikeReply from '../../../containers/Replies/LikeReply/LikeReply';

const RepliesComp: React.SFC<Props> = ({
    replies,
    clipId
}) => {

    const replyMapper = (replies: Array<Reply>, clipId: string) => {
        const replyArray = replies.map((reply) =>
            <Comment key={ reply._id }>

                <Image
                    as={ Link }
                    to={ `/${ reply.author_name }` }
                    circular
                    size='mini'
                    floated='left'
                    src={ reply.author_profile_image }
                />

                <Grid.Column floated='right'>
                    <DeleteReply reply={ reply } clipId={ clipId } />
                </Grid.Column>

                <Comment.Content className='comment-content-container'>
                    <Comment.Author as={ Link } to={`/${ reply.author_name }`}>{ reply.author_name }</Comment.Author>
                    <Comment.Text>{ reply.reply_text }</Comment.Text>
                    <LikeReply reply={ reply } clipId={ clipId } />
                </Comment.Content>
            </Comment>
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
