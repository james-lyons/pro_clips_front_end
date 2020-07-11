interface State {
    replyRef: null | string,
    replies: null | Array<Reply>
};

interface Props {
    clip: Clip,
    fetchComments: (clipId: string) => void,
    resetComments: () => void
};

interface Clip {
    _id: string,
    poster: string,
    title: string,
    key: string,
    url: string,
    comments: Array<Comment>
};

interface Comment {
    _id: string,
    comment_text: string,
    author_name: string,
    author_id: string,
    clip_id: string
};

interface Reply {
    _id: string,
    comment_text: string,
    author_name: string,
    author_id: string,
    comment_id: string
};

export {
    State,
    Props
};
