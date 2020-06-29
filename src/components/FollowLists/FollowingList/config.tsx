interface Props {
    user: User,
    followingList: Array<Follower>,
    handleShowFollowing: () => void
};

interface ReduxState {
    followerReducer: FollowerReducer
};

interface FollowerReducer {
    followingList: Array<Follower>
};

interface Follower {
    username: string,
    profile_image: string
};

interface User {
    username: string,
    following: Array<string>
};

export {
    Props,
    ReduxState,
    Follower
};
