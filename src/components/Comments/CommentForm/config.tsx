interface Props {
    commentText: null | string,
    handleChange: () => void,
    handleSubmit: () => void
};

interface LoggedInProps {
    commentText: string,
    handleChange: () => void,
    handleSubmit: () => void
}

export {
    Props,
    LoggedInProps
};
