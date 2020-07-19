interface State {
    isLoading: boolean,
    error: null | Error,
    registerationSuccess: boolean,
};

interface Props {
    location: { search: string },
    registerConfirm: (emailtoken: string) => Promise<RegistrationConfirmation>
};

interface Res {
    status: number
};

interface Error {
    message: string
};

interface RegistrationConfirmation {
    type: string,
    payload: {
        status: number,
        message?: string,
        error?: Error
    };
};

export {
    State,
    Props,
    Res
};
