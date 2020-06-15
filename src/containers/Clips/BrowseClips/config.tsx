interface State {

};

interface Props {
    browseClips: null | Array<Clip>,
    fetchBrowseClips: () => void
};

interface Clip {
    _id: string,
    poster: string,
    title: string,
    game: string,
    url: string
};

export {
    State,
    Props
};
