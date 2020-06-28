interface State {
    clip: null | Clip,
    user: null | User,
    editFormVis: boolean,
    newTitle: null | string,
};

interface Props {
    clip: Clip,
    user: User,
    match: {params: { clipId: string }},
    history: { push: (location: string) => void },
    fetchUser: (user: string) => void,
    fetchClip: (clipId: string) => void,
    deleteClip: (clipId: string) => void,
    editClip: (clipId: string, newTitle: string) => void,
};

interface Clip {
    _id: string,
    key: string,
    url: string,
    game: string,
    title: string,
    poster: string,
    poster_name: string,
    likes: Array<string>
};

interface User {
    username: string,
    profile_image: string
};

interface ReduxState {
    clipReducer: { clip: Clip },
    userReducer: { user: User }
};

interface Event {
    target: Target
};

interface Target {
    name: TargetState,
    value: string
};

interface TargetState {
    username: string,
    password: string,
};

export {
    State,
    Props,
    Event,
    ReduxState
};
