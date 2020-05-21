interface Props {
    currentUser: CurrentUser
    editProfileErrors: null | Array<string>,
    editProfileMessage: null | string,
    editUserProfile: () => {}
};

interface CurrentUser {
    userName: string,
    bio: string,
    profile_image: string
}

interface State {
    bio: string,
    userName: string,
    profile_image: string,
    editProfileErrors: null | Array<string>,
    editProfileMessage: null | string,
    edit_profile_success: null | string,
    edit_profile_picture_success: null | string
};

export {
    Props,
    State
};
