import API_URL from '../../../constants';
import { User, NewUser } from './config';

const userRegister = (newUser: NewUser) => {
    return async dispatch => {
        try {
            let res = await fetch(`${ API_URL }/auth/register`,
                {
                    method: 'POST',
                    credentials: 'include',
                    headers: { 'Content-type': 'application/json' },
                    body: JSON.stringify(newUser)
                }
            );

            const data = await res.json();
            console.log('Hello from userRegister: data', data)

            if (data.status >= 400) {
                return dispatch({ type: 'USER_REGISTRATION_REJECTED', payload: data });
            } else {
                return dispatch({ type: 'USER_REGISTRATION_FULFILLED', payload: data});
            };
        } catch (error) {
            dispatch({ type: 'USER_REGISTRATION_REJECTED', payload: error });
        };
    };
};

const userLogin = (user: User) => {
    return async dispatch => {
        try {
            let res = await fetch(`${ API_URL }/auth/login`,
                {
                    method: 'POST',
                    credentials: 'include',
                    headers: { 'Content-type': 'application/json' },
                    body: JSON.stringify(user)
                }
            );

            const data = await res.json();

            console.log('Hello from userlogin 1: data', data)

            if (data.status >= 400) {
                console.log('Hello from user login: error 1', data)

                dispatch({ type: 'USER_LOGIN_REJECTED', payload: data });
                return { errors: data.errors };
            };

            localStorage.setItem('uid', data.data._id);
            dispatch({ type: 'USER_LOGIN_FULFILLED' });
            return dispatch({ type: 'FETCH_CURRENT_USER_FULFILLED', payload: data })

        } catch (error) {
            console.log('Hello from user login 2: error', error)
            return dispatch({ type: 'USER_LOGIN_REJECTED', payload: error });
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
                    headers: { 'Content-type': 'application/json' }
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

export {
    userRegister,
    userLogin,
    userLogout
};
