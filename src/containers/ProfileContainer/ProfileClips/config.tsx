interface State {
    userClips: null | Array<object>,
    newTitle: string,
    game: string
};

interface Props {
    user: null | User,
    userClips: null | Array<object>,
    fetchUserClips: (username: string) => {},
    editClip: (clipId: string, newTitle: string) => {},
    deleteClip: (clipId: string) => {}
};

interface User {
    userName: string,
    clips: Array<Clip>
};

interface Clip {

}

export {
    State,
    Props
};
