interface State {
    comments: {
        poster: string,
        text: string,
        id: string
    },
    comment: {
        poster: string,
        text: string,
        id: string
    },
    responses: {
        poster: string,
        text: string,
        id: string
    },
    response: {
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