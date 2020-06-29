interface State {
    bio: string,
    username: string,
    profile_image: string,
    editProfileErrors: null | Array<Error>,
    edit_profile_success: null | string,
    edit_profile_picture_success: null | string
};

interface Props {
    history: History,
    currentUser: CurrentUser
    editProfileErrors: null | Array<Error>,
    editUserProfile: (currentUserId: string, profileChanges: ProfileChanges) => void
};

interface History {
    push: (username?: string) => void
};

interface CurrentUser {
    username: string,
    bio: string,
    profile_image: string
}

interface ProfileChanges {
    bio?: string,
    username?: string,
    profile_image?: string
};

interface ReduxState {
    userReducer: UserReducer
};

interface UserReducer {
    currentUser: CurrentUser,
    editProfileErrors: Array<Error>,
};

interface Error {
    message: string
};

interface Event {
    target: Target
};

interface Target {
    name: TargetState,
    value: string
};

interface TargetState {
    bio: string,
    username: string,
    profile_image: string
};

export {
    Props,
    State,
    ReduxState,
    Event
};
