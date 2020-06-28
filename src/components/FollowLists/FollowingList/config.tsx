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