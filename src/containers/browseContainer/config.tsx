interface State {

};

interface Props {
    browseClips: null | Array<Clip>
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
