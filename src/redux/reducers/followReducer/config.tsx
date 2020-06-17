import { string } from "prop-types";

interface State {
    followersList: null | Array<Follower>,
    followingList: null | Array<Follower>,
    followUserError: null | Array<string>,
    followUserMessage: null | string,
    unfollowUserError: null | Array<string>,
    unfollowUserMessage: null | string
};

interface Action {
    type: string,
    payload: object
};

interface Follower {
    username: string,
    profile_image: string
};

export {
    State,
    Action
};
