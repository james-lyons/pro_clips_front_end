interface State {
    showLoginModal: boolean
};

interface Props {
    replies: Array<ReplyI>,
    clipId: string
};

interface ReplyI {
    reply_text: string,
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
