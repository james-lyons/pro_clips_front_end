interface State {
    userClips: null | Array<object>
};

interface Props {
    fetchUserClips: (username: string) => {},
    user: null | User,
    userClips: null | Array<object>
};

interface User {
    userName: string,
    clips: Array<object>
};

export {
    State,
    Props
};
