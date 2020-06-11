interface Props {
    clipId: string,
    commentId: string,
    replies: Array<Reply>
};

interface Reply {
    reply_text: string,
    author_name: string,
    _id: string,
    author_id: string,
    comment_id: string,
    likes: Array<string>
};

export {
    Props,
    Reply
};
