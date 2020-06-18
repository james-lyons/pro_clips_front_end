interface State {
    clip: null | object,
    clipVis: string,
    newTitle: string,
    showLoginModal: boolean
};

interface Props {
    clip: Clip,
    match: object,
    fetchClip: (clipId: string) => {},
    editClip: (clipId: string) => {},
    deleteClip: (clipId: string) => {},
};

interface Clip {
    _id: string,
    poster: string,
    title: string,
    key: string,
    url: string
}

export {
    State,
    Props
};
