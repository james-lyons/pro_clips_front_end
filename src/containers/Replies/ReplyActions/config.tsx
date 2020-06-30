interface Props {
    reply: Reply,
    clipId: string,
    deleteReply: (replyId: string) => void,
    fetchComments: (clipId: string) => void,
};

interface Reply {
    _id: string,
    author_id: string,
    comment_id: string,
    reply_text: string,
    author_name: string,
    likes: Array<string>
};

export {
    Props
};
