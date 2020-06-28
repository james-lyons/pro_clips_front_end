interface Props {
    user: User,
    followers: Array<Follower>,
    handleShowFollowers: () => void
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
    followers: Array<string>
};

export {
    Props,
    ReduxState,
    Follower
};