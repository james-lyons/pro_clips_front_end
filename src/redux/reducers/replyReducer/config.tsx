interface State {
    replies: {
        poster: string,
        text: string,
        id: string
    },
    reply: {
        poster: string,
        text: string,
        id: string
    },
    errors: null | Array<object>,
    message: null | string
}

interface Action {
    type: string,
    payload: object
};

export {
    State,
    Action
};