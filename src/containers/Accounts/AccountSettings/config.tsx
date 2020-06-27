interface State {
    email: string,
    password: string,
    password2: string,
    oldPassword: string,
    editEmailErrors: null | Array<Error>,
    editPasswordErrors: null | Array<Error>,
};

interface Props {
    errors: null | Array<Error>,
    message: null | string,
    currentUser: CurrentUser,
    editEmailErrors: Array<Error>,
    editPasswordErrors: Array<Error>,
    editUserPassword: (user: string, newPassword: NewPassword) => void,
    editUserEmail: (currentUserId: string, newEmail: NewEmail) => void
};

interface ReduxState {
    userReducer: UserReducer
};

interface UserReducer {
    currentUser: CurrentUser,
    editEmailErrors: Array<Error>,
    editPasswordErrors: Array<Error>,
};

interface CurrentUser {
    email: string
};

interface Error {
    message: string
};

interface CurrentUser {
    email: string
};

interface NewEmail {
    email: string
};

interface NewPassword {
    oldPassword: string,
    password: string,
    password2: string
};

interface Event {
    target: Target,
};

interface Target {
    name: StateTargets,
    value: string
};

interface StateTargets {
    email: string,
    password: string,
    password2: string,
    oldPassword: string
};

export {
    State,
    Props,
    ReduxState,
    Event
};
