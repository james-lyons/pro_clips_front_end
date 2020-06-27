interface Props {
    bio: string,
    userName: string,
    profile_image: string,
    editProfileErrors: null | Array<Error>,
    handleChange: (event: Event) => void,
    editUserSubmit: () => void,
    editProfilePictureSubmit: () => void
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
    bio: string,
    userName: string,
    profile_image: string
};

const styles = {
    divWrapper: {
        padding: '1rem'
    },
    editProfileImgDiv: {
        minHeight: '20vh',
        display: 'grid',
        gridTemplateColumns: '30% 70%'
    },
    editProfileDiv: {
        borderTop:'1px solid grey',
        minHeight: '20vh',
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
