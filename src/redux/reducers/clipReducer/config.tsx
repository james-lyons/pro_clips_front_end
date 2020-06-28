interface State {
    clip: null | Clip,
    clips: null | Array<Clip>,
    userClips: null | Array<Clip>,
    browseClips: null | Array<Clip>,
    gameClips: null | Array<Clip>,
    errors: null | Array<Error>,
};

interface Action {
    type: string,
    payload: Payload
};

interface Payload {
    errors: Array<Error>,
    data: { clip: Clip }
}

interface Clip {
    _id: string,
    url: string,
    game: string,
    title: string,
    poster: string,
    poster_name: string
};

interface Error {
    message: string
}

export {
    State,
    Action
};