interface State {
    comments: null | Array<Comment>,
    comment: Comment,
    error: null | Error
};

interface Action {
    type: string,
    payload: { error: Error }
};

interface Comment {
    _id: string,
    clip_id: string,
    author_id: string,
    author_name: string,
    comment_text: string
};

interface Error {
    message: string
};

export {
    State,
    Action
};