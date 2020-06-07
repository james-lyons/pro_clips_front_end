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
    author_name: string,
    _id: string,
    author_id: string,
    comment_id: string,
    likes: Array<string>
};

export {
    Props
};
