interface State {
    oldPassword: string,
    password: string,
    password2: string,
    errors: null | Array<string>,
    message: null | string
};

interface Props {
    errors: null | Array<string>,
    message: null | string,
    editUserPassword: () => {}
};

export {
    State
};
