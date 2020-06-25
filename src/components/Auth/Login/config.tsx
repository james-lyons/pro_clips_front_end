interface Props {
    email: string,
    password: string,
    message: string,
    errors: null | Array<Error>,
    handleChange: (event: Event) => void,
    handleSubmit: () => void,
};

interface Error {
    message: string
};

interface Event {
    target: Target
};

interface Target {
    name: TargetState,
    value: string
};

interface TargetState {
    userName: string,
    password: string,
};

const styles = {
    h1: {
        margin: '5rem auto .75rem',
        fontSize: '2rem',
        paddingLeft: '0'
    },
    form: {
        margin: '20vh auto 0',
        width: '35%',
        border: '1px solid black',
        borderRadius: '5px',
        padding: '1.2rem'
    },
    errorDiv: {
        width: '100%',
        backgroundColor: 'rgba(0,0,0,.5)',
        margin: '.5rem auto'
    },
    errorP: {
        color: 'black',
        padding: '.3rem',
        marginBottom: '2px',
        marginBlockStart: '0'
    }
};

export {
    Props,
    styles
};
