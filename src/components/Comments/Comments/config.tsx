interface Props {
    clip: null | Clip,
    replyRef: null | string,
    comments: null | Array<CommentI>,
    handleReplyForm: (commentId: string) => void
};

interface Clip {
    _id: string
};

interface CommentI {
    _id: string,
    clip_id: string,
    author_id: string,
    author_name: string,
    comment_text: string,
    likes: Array<string>,
    replies: Array<ReplyI>,
    author_profile_image: string,
};

interface ReplyI {
    _id: string,
    author_id: string,
    comment_id: string,
    time_stamp: string,
    reply_text: string,
    author_name: string,
    likes: Array<string>,
    author_profile_image: string
};

interface ReduxProps {
    commentReducer: CommentReducer,
    clipReducer: ClipReducer
};

interface CommentReducer {
    comments: Array<CommentI>
};

interface ClipReducer {
    clip: Clip
};

export {
    Props,
    CommentI,
    ReduxProps
};
