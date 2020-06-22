import { User } from "../../../redux/reducers/authReducer/reducer.config";

interface State {
    clip: null | Clip,
    clipVis: string,
    newTitle: string,
    showLoginModal: boolean
};

interface Props {
    clip: Clip,
    user: User,
    match: {params: { clipId: string }},
    history: { push: (location: string) => void },
    editClip: (clipId: string, newTitle: string) => void,
    fetchClip: (clipId: string) => void,
    deleteClip: (clipId: string) => void
};

interface Clip {
    _id: string,
    key: string,
    url: string,
    game: string,
    title: string,
    poster: string,
    poster_name: string
};

interface User {
    userName: string
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
    userName: string,
    password: string,
};

export {
    State,
    Props,
    Event,
    ReduxState
};
