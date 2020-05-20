interface Props {
    
};

interface State {
    userName: string,
    email: string,
    bio: string,
    profile_image: string
    edit_profile_success: null | string,
    edit_profile_picture_success: null | string
};

export {
    Props,
    State
};
