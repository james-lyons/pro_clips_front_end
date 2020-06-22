interface State {
    email: string,
    password: string,
    password2: string,
    oldPassword: string,
    editEmailErrors: null | Array<Error>,
    editEmailMessage: null | string,
    editPasswordErrors: null | Array<Error>,
    editPasswordMessage: null | string
};

interface Props {
    errors: null | Array<Error>,
    message: null | string,
    currentUser: CurrentUser,
    editEmailErrors: Array<Error>,
    editEmailMessage: string,
    editPasswordErrors: Array<Error>,
    editPasswordMessage: string,
    editUserPassword: (user: string, newPassword: NewPassword) => void,
    editUserEmail: (currentUserId: string, newEmail: NewEmail) => void
};

interface ReduxState {
    userReducer: UserReducer
};

interface UserReducer {
    currentUser: CurrentUser,
    editEmailErrors: Array<Error>,
    editEmailMessage: string,
    editPasswordErrors: Array<Error>,
    editPasswordMessage: string
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
