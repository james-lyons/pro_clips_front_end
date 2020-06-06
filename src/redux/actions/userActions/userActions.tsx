import API_URL from '../../../constants';

const fetchCurrentUser = (currentUser:string) => {
    return async dispatch => {
        try {
            let res = await fetch(`${ API_URL }/accounts/currentuser/${ currentUser }`,
                {
                    method: 'GET',
                    credentials: 'include',
                }
            );

            let data = await res.json();
            // console.log(data)

            if (data.status >= 400) {
                return dispatch({ type: 'FETCH_CURRENT_USER_REJECTED', payload: data });
            } else if (data.message) {
                return dispatch({ type: 'FETCH_CURRENT_USER_FULFILLED', payload: data });
            };

        } catch (error) {
            dispatch({ type: 'FETCH_CURRENT_USER_REJECTED', payload: error })
        };
    };
};

const fetchUser = (user:string) => {
    // console.log(user)
    return async dispatch => {
        try {
            let res = await fetch(`${ API_URL }/accounts/user/${ user }`,
                {
                    method: 'GET',
                    credentials: 'include',
                }
            );

            let data = await res.json();
            // console.log(data)

            if (data.status >= 400) {
                return dispatch({ type: 'FETCH_USER_REJECTED', payload: data });
            } else if (data.message) {
                return dispatch({ type: 'FETCH_USER_FULFILLED', payload: data });
            };

        } catch (error) {
            dispatch({ type: 'FETCH_USER_REJECTED', payload: error })
        };
    };
};

const editUserProfile = (user:string, profileChanges:object) => {
    console.log('profile', JSON.stringify(profileChanges))
    return async dispatch => {
        try {
            let res = await fetch(`${ API_URL }/accounts/${ user }/profile`,
                {
                    method: 'PUT',
                    credentials: 'include',
                    headers: { 'Content-type': 'application/json' },
                    body: JSON.stringify(profileChanges)
                }
            );

            let data = await res.json();

            if (data.status >= 400) {
                return dispatch({ type: 'EDIT_PROFILE_REJECTED', payload: data });
            } else {
                console.log(data)
                return dispatch({ type: 'EDIT_PROFILE_FULFILLED', payload: data });
            };

        } catch (error) {
            console.log('error', error)
            dispatch({ type: 'EDIT_PROFILE_REJECTED', payload: error });
        };
    };
};

const editUserEmail = (user: string, newEmail: object) => {
    return async dispatch => {
        try {
            let res = await fetch(`${ API_URL }/accounts/${ user }/email`,
                {
                    method: 'PUT',
                    credentials: 'include',
                    headers: { 'Content-type': 'application/json' },
                    body: JSON.stringify(newEmail)
                }
            );

            let data = await res.json();
            console.log('data', data);

            if (data.status >= 400) {
                return dispatch({ type: 'EDIT_EMAIL_REJECTED', payload: data });
            } else if (data.message) {
                return dispatch({ type: 'EDIT_EMAIL_FULFILLED', payload: data });
            };

        } catch (error) {
            dispatch({ type: 'EDIT_EMAIL_REJECTED', payload: error });
        };
    };
};

const editUserPassword = (user, newPassword) => {
    console.log(newPassword)
    return async dispatch => {
        try {
            let res = await fetch(`${ API_URL }/accounts/${ user }/password`,
                {
                    method: 'PUT',
                    credentials: 'include',
                    headers: { 'Content-type': 'application/json' },
                    body: JSON.stringify(newPassword)
                }
            );

            let data = await res.json();
            console.log('data', data);

            if (data.status >= 400) {
                return dispatch({ type: 'EDIT_PASSWORD_REJECTED', payload: data });
            } else if (data.message) {
                return dispatch({ type: 'EDIT_PASSWORD_FULFILLED', payload: data });
            };

        } catch (error) {
            dispatch({ type: 'EDIT_PASSWORD_REJECTED', payload: error });
        };
    };
};

const deleteUser = (user) => {
    return async dispatch => {
        try {
            let res = await fetch(`${ API_URL }/accounts/${ user }`,
                {
                    method: 'DELETE',
                    credentials: 'include'
                }
            );

            let data = await res.json();
            localStorage.removeItem('uid');
            window.location.reload();
            dispatch({ type: 'DELETE_USER_FULFILLED ', payload: data.data });
            
        } catch (error) {
            dispatch({ type: 'DELETE_USER_REJECTED', payload: error })
        };
    };
};

export {
    fetchCurrentUser,
    fetchUser,
    editUserProfile,
    editUserEmail,
    editUserPassword,
    deleteUser
};
