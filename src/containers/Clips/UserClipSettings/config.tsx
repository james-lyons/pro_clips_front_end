interface State {
    clipVis: string,
    newTitle: string,
};

interface Props {
    clip: Clip,
    history: History,
    editClip: (clipId: string, newTitle: string) => void,
    deleteClip: (clipId: string) => void
};

interface History {
    push: (userName: string) => void
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

interface ReduxState {
    clipReducer: { clip: Clip }
};

interface Event {
    target: Target
};

interface Target {
    value: string,
    name: TargetState
};

interface TargetState {
    clipVis: string,
    newTitle: string, 
};

export {
    Props,
    State,
    Event,
    ReduxState
};
