interface State {
    email: string,
    error: null | Error,
    submitSuccess: boolean
};

interface Props {
    resendEmailToken: (email) => Promise<Payload>
};

interface Error {
    message: string
};

interface Event {
    target: { value: string }
};

interface Payload {
    status: number,
    message?: string,
    error?: Error
}

export {
    State,
    Props,
    Event
};
