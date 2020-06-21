interface Props {
    clip: null | Clip,
    replyRef: null | string,
    comments: null | Array<Comment>,
    handleReplyForm: (commentId: string) => void
};

interface Clip {
    _id: string
};

interface Comment {
    _id: string,
    comment_text: string,
    author_name: string,
    author_id: string,
    clip_id: string,
    replies: Array<ReplyI>,
    likes: Array<string>
};

interface ReplyI {
    _id: string,
    author_id: string,
    comment_id: string,
    time_stamp: string,
    reply_text: string,
    author_name: string,
    likes: Array<string>
};

export {
    Props,
    Comment,
};
