import { string } from "prop-types";

interface State {
    replyText: null | string
};

interface Props {
    clip: Clip,
    commentId: string,
    createReply: (replyText: string, commentId: string) => void,
    fetchComments: (clipId: string) => void
};

interface Clip {
    _id: string
};

export {
    State,
    Props
};
