interface RegisterComponentProps {
    handleChange: () => {},
    handleSubmit: () => {},
    userName: String,
    email: String,
    password: String,
    password2: String,
    errors: null | Array<string>,
    message: string,
};

interface LoginComponentProps {
    handleChange: () => {},
    handleSubmit: () => {},
    email: string,
    password: string,
    errors: null | Array<string>,
    message: string,
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
