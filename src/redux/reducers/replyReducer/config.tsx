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
    error: null | Error
};

interface Action {
    type: string,
    payload: { error: Error }
};

interface Error {
    message: string
};

export {
    State,
    Action
};