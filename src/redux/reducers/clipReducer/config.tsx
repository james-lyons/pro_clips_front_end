interface State {
    clip: null | Clip,
    clips: null | Array<Clip>,
    userClips: null | Array<Clip>,
    browseClips: null | Array<Clip>,
    gameClips: null | Array<Clip>,
    errors: null | Array<object>,
    message: null | string
};

interface Action {
    type: string,
    payload: object
};

interface Clip {
    _id: string,
    url: string,
    game: string,
    title: string,
    poster: string,
    poster_name: string
};

export {
    State,
    Action
};