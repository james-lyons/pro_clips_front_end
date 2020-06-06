interface State {
    comments: null | Array<Comment>,
    comment: Comment,
    errors: null | Array<object>,
    message: null | string
};

interface Action {
    type: string,
    payload: object
};

interface Comment {
    comment_text: string,
    _id: string,
    author_id: string,
    author_name: string,
    clip_id: string
};

export {
    State,
    Action
};