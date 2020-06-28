interface Props {
    clipId: string,
    comment: Comment,
    deleteComment: (commentId: string) => void,
    fetchComments: (clipId: string) => void,
};

interface Comment {
    _id: string,
    clip_id: string,
    author_id: string,
    author_name: string,
    comment_text: string
};


export {
    Props
};
