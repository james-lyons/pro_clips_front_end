import { string } from "prop-types";

interface State {
    followersList: null | Array<Follower>,
    followingList: null | Array<Follower>,
    followUserError: null | Error,
    unfollowUserError: null | Error,
};

interface Action {
    type: string,
    payload: { error: Error, data: Array<Follower> }
};

interface Follower {
    username: string,
    profile_image: string
};

interface Error {
    message: string
};

export {
    State,
    Action
};
