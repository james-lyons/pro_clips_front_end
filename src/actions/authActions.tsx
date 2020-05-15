import API_URL from '../constants';
import { NewUser } from './action.config';

const userRegister = (newUser: NewUser) => {
    return async dispatch => {
        try {
            let res = await fetch(`${ API_URL }/auth/register`,
            {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(newUser)
            });

            const data = await res.json();

            if (data.errors && data.message) {
                return dispatch({ type: 'USER_REGISTRATION_REJECTED', payload: data });
            };

            dispatch({ type: 'USER_REGISTRATION_FULFILLED', payload: data });

        } catch (error) {
            dispatch({ type: 'USER_REGISTRATION_REJECTED', payload: error });
        };
    };
};

const userLogin = (user) => {
    console.log(JSON.stringify(user));
    return async dispatch => {
        try {
            let res = await fetch(`${ API_URL }/auth/login`,
                {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                });

            const data = await res.json();

            if (data.errors && data.message) {
                return dispatch({ type: 'USER_REGISTRATION_REJECTED', payload: data });
            };

            localStorage.setItem('uid', data.data._id);
            window.location.reload();
            dispatch({ type: 'USER_LOGIN_FULFILLED', payload: data});

        } catch (error) {
            dispatch({ type: 'USER_LOGIN_REJECTED', payload: error });
        };
    };
};

const userLogout = () => {

    return async dispatch => {
        try {
            let res = await fetch(`${ API_URL }/auth/logout`,
                {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-type': 'application/json'
                    }
                });

            const data = await res.json();

            if (data.errors) {
                return dispatch({ type: 'USER_LOGOUT_REJECTED', payload: data });
            };

            localStorage.removeItem('uid');
            window.location.reload();
            dispatch({ type: 'USER_LOGOUT_FULFILLED', payload: data });

        } catch (error) {
            dispatch({ type: 'USER_LOGOUT_REJECTED', payload: error });
        };
    };
};

const fetchUser = (currentUser) => {
    console.log('hi')
};

export {
    userRegister,
    userLogin,
    userLogout,
    fetchUser
};
