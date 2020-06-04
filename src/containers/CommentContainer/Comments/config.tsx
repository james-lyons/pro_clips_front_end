
interface State {
    commentText: null | string
};

interface Props {
    clipId: string,
    createComment: (commentText: string, clipId: string) => void
};

export { 
    State,
    Props
};
