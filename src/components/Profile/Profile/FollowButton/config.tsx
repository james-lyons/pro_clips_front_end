interface Props {
    userName: string,
    isFollowed: boolean,
    followUser: (userName: string) => void,
    unfollowUser: (userName: string) => void,
    handleShowLogin: () => void
};

export {
    Props
};
