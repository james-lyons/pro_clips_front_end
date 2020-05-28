interface State {
    clip: null | object,
    clips: null | Array<object>,
    userClips: null | Array<object>,
    errors: null | Array<object>,
    message: null | string
};

interface Action {
    type: string,
    payload: object
};

export {
    State,
    Action
};