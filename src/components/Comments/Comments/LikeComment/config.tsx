interface Props {
    comment: Comment,
    comments: Array<Comment>,
    likeComment: (commentId: string) => void,
    unlikeComment: (commentId: string) => void
    fetchComments: (clipId: string) => void,
};

interface State {
    comments: null | Array<Comment>,
};

interface Comment {
    _id: string,
    likes: Array<string>,
    clip_id: string
};

export {
    Props,
    State,
    Comment
};
