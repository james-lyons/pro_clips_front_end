interface State {
    showLoginModal: boolean
};

interface Props {
    clipId: string,
    replies: Array<Reply>
};

interface Reply {
    _id: string,
    author_id: string,
    comment_id: string,
    time_stamp: string,
    reply_text: string,
    author_name: string,
    likes: Array<string>
};

export { 
    Props,
    State
};
