interface Props {
    clipId: string,
    replies: Array<Reply>
};

interface Reply {
    _id: string,
    comment_id: string,
    author_id: string,
    reply_text: string,
    author_name: string,
    author_profile_image: string,
    likes: Array<string>
};

export {
    Props,
    Reply
};
