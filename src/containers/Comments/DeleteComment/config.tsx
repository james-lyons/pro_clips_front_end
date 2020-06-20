interface Props {
    comment: Comment,
    clipId: string,
    deleteComment: (commentId: string) => void,
    fetchComments: (clipId: string) => void,
};

interface Clip {
    _id?: string
};

interface Comment {
    author_id: string,
    _id: string
};

export {
    Props
};
