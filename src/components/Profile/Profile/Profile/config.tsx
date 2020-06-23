interface Props {
    user: User,
    isMatch: boolean,
    isFollowed: boolean,
    showLoginModal: boolean,
    handleShowLoginModal: () => void,
    handleCloseLoginModal: () => void,
    followUser: (userName: string) => void,
    unfollowUser:  (userName: string) => void,
};

interface User {
    bio: string,
    userName: string,
    clips: Array<Clip>,
    isFollowed: boolean
    profile_image: string,
};

interface Clip {
    _id: string,
    url: string,
    title: string,
    poster: string,
    poster_name: string,
    replies: Array<string>,
    comments: Array<string>
};

interface ReduxState {
    followerReducer: FollowProps
};

interface FollowProps {
    followersList: Array<Follower>,
    followingList: Array<Follower>
};

interface Follower {
    userName: string,
    profile_image: string
};

const styles = {
    headerWrapper: {
        borderBottom: '1px solid grey',
        height: '25vh',
        margin: '10vh auto',
        display: 'grid',
        gridTemplateColumns: '30% 70%'
    },
    ulWrapper: {
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'row',
        paddingInlineStart: '0px',
        padding: '.25rem'
    },
    h1: {
        display: 'inline-block',
        fontSize: '1.5rem',
        padding: '.25rem',
    },
    li: {
        marginRight: '1.25rem'
    },
    button: {
        textIndent: '0px',
        textShadow: 'none',
        display: 'inline-block',
        textAlign: 'center',
        alignItems: 'flex-start',
        font: '400 11px system-ui',
        padding: '1px 7px 2px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'rgb(216, 216, 216) rgb(209, 209, 209) rgb(186, 186, 186)',
        borderImage: 'initial',
    }
};

export {
    Props,
    Follower,
    ReduxState,
    styles
};
