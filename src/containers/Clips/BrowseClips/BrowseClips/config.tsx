interface Props {
    browseClips: null | Array<Clip>,
    fetchBrowseClips: () => void
};

interface ReduxState {
    clipReducer: { browseClips: Array<Clip> }
};

interface Clip {
    _id: string,
    url: string,
    game: string,
    title: string,
    poster: string,
    poster_name: string,
};

export {
    Props,
    ReduxState
};
