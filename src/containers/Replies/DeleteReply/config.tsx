interface Props {
    reply: Reply,
    clipId: string,
    deleteReply: (replyId: string) => void,
    fetchComments: (clipId: string) => void,
};

interface Clip {
    _id?: string
};

interface Reply {
    _id: string,
    author_id: string,
    comment_id: string,
    author_name: string,
    likes: Array<string>
};

export {
    Props
};
