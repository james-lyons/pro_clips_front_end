interface Props {
    gameClips: Array<Clip>
};

interface Clip {
    _id: string,
    poster: string,
    poster_name: string,
    title: string,
    game: string,
    url: string
};

export {
    Props,
    Clip
};
