interface State {
    game: string,
    newTitle: string,
    userClips: null | Array<Clip>
};

interface Props {
    user: null | User,
    userClips: null | Array<Clip>,
    deleteClip: (clipId: string) => void,
    fetchUserClips: (username: string) => void,
    editClip: (clipId: string, newTitle: string) => void
};

interface Event {
    target: { value: string }
};

interface ReduxState {
    userReducer: UserReducer,
    clipReducer: ClipReducer
};

interface UserReducer {
    user: User
};

interface ClipReducer {
    userClips: Array<Clip>
};

interface User {
    bio: string,
    email: string,
    userName: string,
    clips: Array<Clip>,
    isFollowed: boolean,
    profile_image: string
};

interface Clip {
    _id: string,
    url: string,
    title: string,
    game: string,
    poster: string,
    poster_name: string,
    replies: Array<string>,
    comments: Array<string>
};

export {
    State,
    Props,
    Event,
    ReduxState
};
