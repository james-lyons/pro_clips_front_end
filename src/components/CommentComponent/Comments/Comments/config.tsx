interface Props {
    clip: null | object,
    replyRef: null | string,
    comments: null | Array<Comment>,
    handleReplyForm: (commentId: string) => void
};

interface Comment {
    _id: string,
    comment_text: string,
    author_name: string,
    author_id: string,
    clip_id: string
};

export {
    Props,
    Comment
};
