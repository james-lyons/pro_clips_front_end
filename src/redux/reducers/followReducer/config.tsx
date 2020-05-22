interface State {
    followUserError: null | Array<string>,
    followUserMessage: null | string,
    unfollowUserError: null | Array<string>,
    unfollowUserMessage: null | string
};

interface Action {
    type: string,
    payload: object
}

export {
    State,
    Action
};
