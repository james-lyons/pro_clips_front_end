interface Props {
    clip: Clip,
    match: object,
    editClip: (clipId: string) => {},
    deleteClip: (clipId: string) => {},};

interface State {
    clipVis: string,
    newTitle: string,
};

interface Clip {
    _id: string,
    poster: string,
    poster_name: string,
    title: string,
    key: string,
    url: string
};

export {
    Props,
    State
};
