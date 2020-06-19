interface Props {
    clip: null | Clip,
    replyRef: ReplyRef,
    comments: null | Array<Comment>,
    handleReplyForm: (commentId: string) => void
};

interface Clip {
    _id: string
};

interface ReplyRef {
    replyRef: null | string
};

interface Comment {
    _id: string,
    comment_text: string,
    author_name: string,
    author_id: string,
    clip_id: string,
    replies: Array<Reply>,
    likes: Array<string>
};

interface Reply {
    author_name: string,
    _id: string,
    author_id: string,
    comment_id: string,
    likes: Array<string>
};

export {
    Props,
    Comment,
    ReplyRef
};
