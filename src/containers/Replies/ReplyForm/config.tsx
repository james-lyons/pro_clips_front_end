interface State {
    replyText: null | string
};

interface Props {
    createReply: (replyText: string) => void
};

export {
    State,
    Props
};
