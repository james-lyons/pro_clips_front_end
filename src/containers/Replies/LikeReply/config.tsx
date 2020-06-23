interface State {
    showLoginModal: boolean,
    comments: null | Array<Comment>
};

interface Props {
    reply: Reply,
    clipId: string,
    comments: Array<Comment>,
    likeReply: (replyId: string) => void,
    unlikeReply: (replyId: string) => void,
    fetchComments: (clipId: string) => void
};

interface ReduxState {
    commentReducer: { comments: Array<Comment> }
};

interface Reply {
    _id: string,
    comment_id: string,
    likes: Array<string>
};

interface Comment {
    text: string
};

export {
    Props,
    State,
    Reply,
    ReduxState
};
