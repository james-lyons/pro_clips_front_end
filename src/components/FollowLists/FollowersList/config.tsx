interface Props {
    user: User,
    followers: Array<Follower>,
    handleShowFollowers: () => void
};

interface ReduxState {
    followerReducer: FollowerReducer,
    userReducer: { user: User }
};

interface FollowerReducer {
    followersList: Array<Follower>
};

interface Follower {
    username: string,
    profile_image: string
};

interface User {
    username: string,
    followers: Array<string>
};

export {
    Props,
    ReduxState,
    Follower
};
