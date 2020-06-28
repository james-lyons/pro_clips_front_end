interface Props {
    clip: Clip,
    handleFormVis: () => void,
    handleClipDelete: (clipId: string) => void,
};

interface Clip {
    _id: string,
    key: string,
    url: string,
    game: string,
    title: string,
    poster: string,
    poster_name: string,
    likes: Array<string>,
};

interface Event {
    target: Target
};

interface Target {
    name: TargetState,
    value: string
};

interface TargetState {
    username: string,
    password: string,
};

export {
    Props
};
