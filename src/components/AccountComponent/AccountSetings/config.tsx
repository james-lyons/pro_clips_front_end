interface Props {
    email: string,
    oldPassword: string,
    password: string,
    password2: string,
    editEmailErrors: Array<string>,
    editEmailMessage: string,
    editPasswordErrors: Array<string>,
    editPasswordMessage: string,
    handleChange: () => {},
    editEmailSubmit: () => {},
    editPasswordSubmit: () => {},
};

const styles = {
    divWrapper: {
        border: '1px solid grey',
        marginTop: '1rem',
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
