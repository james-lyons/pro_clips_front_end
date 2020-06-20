interface Props {
    deleteUser: (currentUser: string) => void
};

const styles = {
    divWrapper: {
        padding: '1rem'
    },
    editProfileDiv: {
        minHeight: '20vh',
        padding: '1rem'
    }
};

export {
    Props,
    styles
};
