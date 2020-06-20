interface RegisterComponentProps {
    handleChange: () => void,
    handleSubmit: () => void,
    userName: string,
    email: string,
    password: string,
    password2: string,
    errors: null | Array<Error>,
    message: string,
};

interface LoginComponentProps {
    handleChange: () => void,
    handleSubmit: () => void,
    email: string,
    password: string,
    errors: null | Array<Error>,
    message: string,
};

interface Error {
    message: string
};

const styles = {
    h1: {
        margin: '5rem auto .75rem',
        fontSize: '2rem',
        paddingLeft: '0'
    },
    form: {
        margin: '0 auto',
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
    RegisterComponentProps,
    LoginComponentProps,
    styles
};
