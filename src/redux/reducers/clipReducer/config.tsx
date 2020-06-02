interface State {
    clip: null | Clip,
    clips: null | Array<Clip>,
    userClips: null | Array<Clip>,
    errors: null | Array<object>,
    message: null | string
};

interface Action {
    type: string,
    payload: object
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
    Action
};