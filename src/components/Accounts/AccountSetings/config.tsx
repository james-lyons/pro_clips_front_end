interface Props {
    email: string,
    oldPassword: string,
    password: string,
    password2: string,
    editEmailErrors: Array<Error>,
    editPasswordErrors: Array<Error>,
    handleChange: (event: Event) => void,
    editEmailSubmit: () => void,
    editPasswordSubmit: () => void,
};

interface Error {
    message: string
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

const styles = {
    divWrapper: {
        padding: '1rem'
    },
    editEmailDiv: {
        padding: '1rem',
        marginTop: '5px'
    },
    editPasswordDiv: {
        borderTop: '1px solid grey',
        padding: '1rem',
        marginTop: '5px'
    },
    errorDiv: {
        width: '100%',
        margin: '.5rem auto',
        backgroundColor: 'rgba(0,0,0,.5)'
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
