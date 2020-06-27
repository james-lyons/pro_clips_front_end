interface State {
    bio: string,
    userName: string,
    profile_image: string,
    editProfileMessage: null | string,
    editProfileErrors: null | Array<Error>,
    edit_profile_success: null | string,
    edit_profile_picture_success: null | string
};

interface Props {
    RouteComponentProps: RouteComponentProps,
    history: History,
    currentUser: CurrentUser
    editProfileMessage: null | string,
    editProfileErrors: null | Array<Error>,
    editUserProfile: (currentUserId: string, profileChanges: ProfileChanges) => void
};

interface History {
    push: (userName?: string) => void
};

interface CurrentUser {
    userName: string,
    bio: string,
    profile_image: string
}

interface ProfileChanges {
    bio?: string,
    userName?: string,
    profile_image?: string
};

interface ReduxState {
    userReducer: UserReducer
};

interface UserReducer {
    currentUser: CurrentUser,
    editProfileErrors: Array<Error>,
    editProfileMessage: string
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
    userName: string,
    profile_image: string
};

export {
    Props,
    State,
    ReduxState,
    Event
};
