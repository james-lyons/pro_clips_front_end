
interface State {
    commentText: null | string
};

interface Props {
    clipId: string,
    createComment: (commentText: string, clipId: string) => void,
    fetchComments: (clipId: string) => void
};

export { 
    State,
    Props
};
