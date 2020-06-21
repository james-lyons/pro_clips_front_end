interface Props {
    clip: Clip,
    history: History,
    editClip: (clipId: string, newTitle: string) => void,
    deleteClip: (clipId: string) => void
};

interface State {
    clipVis: string,
    newTitle: string,
};

interface History {
    push: (userName: string) => void
};

interface Clip {
    _id: string,
    key: string,
    url: string,
    game: string,
    title: string,
    poster: string,
    poster_name: string
};

export {
    Props,
    State
};
