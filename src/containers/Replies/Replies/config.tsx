interface State {
    showLoginModal: boolean
};

interface Props {
    replies: Array<ReplyI>,
    clipId: string
};

interface ReplyI {
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
