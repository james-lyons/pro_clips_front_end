import { User } from "../../../../redux/actions/authActions/config";

interface Props {
    clip: Clip,
    user: User,
    newTitle: null | string,
    editFormVis: boolean,
    handleFormVis: () => void,
    handleClipEdit: () => void,
    handleChange: (event: Event) => void,
    handleClipDelete: (clipId: string) => void,
};

interface Clip {
    _id: string,
    key: string,
    url: string,
    game: string,
    title: string,
    poster: string,
    poster_name: string,
    likes: Array<string>,
};

interface User {
    username: string,
    profile_image: string
};

interface ReduxState {
    clipReducer: { clip: Clip }
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
    Props,
    ReduxState
};
