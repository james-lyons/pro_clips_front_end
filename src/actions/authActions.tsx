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

            if (data.errors || data.message) {
                return dispatch({ type: 'USER_REGISTRATION_REJECTED', payload: data });
            };

            dispatch({ type: 'USER_REGISTRATION_FULFILLED', payload: data });

        } catch (error) {
            dispatch({ type: 'USER_REGISTRATION_REJECTED', payload: error });
        };
    };
};

const userLogin = (user) => {
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

            if (data.errors || data.message) {
                return dispatch({ type: 'USER_REGISTRATION_REJECTED', payload: data });
            };

            dispatch({ type: 'USER_LOGIN_FULFILLED', payload: data});

        } catch (error) {
            dispatch({ type: 'USER_LOGIN_REJECTED', payload: error });
        };
    };
};

const userLogout = (newUser) => {

};

const fetchUser = (currentUser) => {

};

export {
    userRegister,
    userLogin,
    userLogout,
    fetchUser
};
