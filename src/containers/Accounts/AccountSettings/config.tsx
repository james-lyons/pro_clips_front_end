interface State {
    email: string,
    oldPassword: string,
    password: string,
    password2: string,
    editEmailErrors: Array<string>,
    editEmailMessage: string,
    editPasswordErrors: Array<string>,
    editPasswordMessage: string
};

interface Props {
    errors: null | Array<string>,
    message: null | string,
    editUserPassword: () => {}
};

export {
    State
};
