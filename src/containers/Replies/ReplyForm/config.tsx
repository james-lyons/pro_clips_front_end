interface State {
    replyText: null | string
};

interface Props {
    clip: Clip,
    commentId: string,
    fetchComments: (clipId: string) => void,
    createReply: (replyText: string, commentId: string) => void
};

interface ReduxState {
    clipReducer: { clip: Clip }
};

interface Event {
    target: { value: string }
};

interface Clip {
    _id: string
};

export {
    State,
    Props,
    Event,
    ReduxState
};
