import { Clip } from "../../../components/Profile/ProfileClips/config";

interface Props {
    browseClips: Array<Clip>,
    fetchBrowseClips: () => void
};

interface ReduxState {
    clipReducer: { browseClips: Array<Clip> }
};

interface Clip {
    _id: string,
    url: string,
    game: string,
    title: string,
    poster: string,
    poster_name: string,
};

export {
    Props,
    ReduxState
};
