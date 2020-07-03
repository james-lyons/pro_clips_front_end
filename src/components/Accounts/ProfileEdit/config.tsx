interface Props {
    bio: string,
    username: string,
    profile_image: string,
    editProfileSuccess: boolean,
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
    username: string,
    profile_image: string
};

export {
    Props
};
