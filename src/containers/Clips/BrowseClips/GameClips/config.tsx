interface Props {
    match: { params: { game: string }},
    gameClips: Array<Clip>,
    fetchGameClips: (game: string) => void
};

interface ReduxState {
    clipReducer: { gameClips: Array<Clip> }
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
