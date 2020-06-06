interface Props {
    comments: null | Array<Comment>,
    clip: null | object,
    deleteComment: () => void
}

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
