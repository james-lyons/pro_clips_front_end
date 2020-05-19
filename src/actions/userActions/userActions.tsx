import API_URL from '../../constants';

const fetchUser = (currentUser:string) => {
    return async dispatch => {
        try {
            let res = await fetch(`${ API_URL }/accounts/${ currentUser }`,
                {
                    method: 'GET',
                    credentials: 'include',
                }
            );

            let data = await res.json();
            console.log(data)

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

const editUserProfile = (user, profileChanges) => {
    console.log(user)
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
            console.log(data);

        } catch (error) {
            console.log('error', error)
            dispatch({ type: 'EDIT_USER_REJECTED', payload: error });
        };
    };
};

const editUserPassword = (user, passwordChange) => {
    console.log(passwordChange)
    return async dispatch => {
        try {
            let res = await fetch(`${ API_URL }/accounts/${ user }/password`,
                {
                    method: 'PUT',
                    credentials: 'include',
                    headers: { 'Content-type': 'application/json' },
                    body: JSON.stringify(passwordChange)
                }
            );

            let data = await res.json();
            console.log(data);

        } catch (error) {
            dispatch({ type: 'EDIT_USER_REJECTED', payload: error });
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
    fetchUser,
    editUserProfile,
    editUserPassword,
    deleteUser
};
