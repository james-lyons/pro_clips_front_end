interface Props {
    user: User,
    showFollowers: boolean,
    followers: Array<Follower>,
    handleShowFollowers: () => void
    handleCloseFollowers: () => void
};

interface ReduxState {
    followerReducer: FollowerReducer
};

interface FollowerReducer {
    followers: Array<Follower>
};

interface Follower {
    userName: string,
    profile_image: string
};

interface User {
    userName: string,
    following: Array<string>
};

export {
    Props,
    ReduxState,
    Follower
};
