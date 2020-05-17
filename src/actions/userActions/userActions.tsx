import API_URL from '../../constants';

const fetchUser = (currentUser) => {
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

const editUserUsername = (currentUser) => {
    return async dispatch => {
        try {
            console.log('hi');
        } catch (error) {
            dispatch({ type: 'EDIT_USER_REJECTED', payload: error });
        };
    };
};

const editUserBio = (currentUser) => {
    return async dispatch => {
        try {
            console.log('hi');
        } catch (error) {
            dispatch({ type: 'EDIT_USER_REJECTED', payload: error });
        };
    };
};

const editUserEmail = (currentUser) => {
    return async dispatch => {
        try {
            console.log('hi');
        } catch (error) {
            dispatch({ type: 'EDIT_USER_REJECTED', payload: error });
        };
    };
};

const editUserPassword = (currentUser) => {
    return async dispatch => {
        try {
            console.log('hi');
        } catch (error) {
            dispatch({ type: 'EDIT_USER_REJECTED', payload: error });
        };
    };
};

const deleteUser = () => {
    return async dispatch => {
        try {
            console.log('hi');
        } catch (error) {
            dispatch({ type: 'DELETE_USER_REJECTED', payload: error })
        };
    };
};

export {
    fetchUser,
    editUserUsername,
    editUserEmail,
    editUserBio,
    editUserPassword,
    deleteUser
};
