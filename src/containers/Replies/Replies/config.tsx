interface State {
    replies: Array<Reply>
};

interface Props {
    replies: Array<Reply>
};

interface Reply {
    author_name: string,
    _id: string,
    author_id: string,
    comment_id: string,
    likes: Array<string>
};

export { 
    Props,
    State
};
