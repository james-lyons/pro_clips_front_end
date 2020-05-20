import API_URL from '../../../constants';
import { NewUser } from './config';

const userRegister = (newUser: NewUser) => {
    const user = { email: newUser.email, password: newUser.password };

    return async dispatch => {
        try {
            let res = await fetch(`${ API_URL }/auth/register`,
            {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(newUser)
            });

            const data = await res.json();

            if (data.errors && data.message) {
                return dispatch({ type: 'USER_REGISTRATION_REJECTED', payload: data });
            } else if (data.message) {
                return dispatch({ type: 'USER_REGISTRATION_FULFILLED', payload: data});
            }
        } catch (error) {
            dispatch({ type: 'USER_REGISTRATION_REJECTED', payload: error });
        };
    };
};

const userLogin = (user:object) => {
    return async dispatch => {
        try {
            let res = await fetch(`${ API_URL }/auth/login`,
                {
                    method: 'POST',
                    credentials: 'include',
                    headers: { 'Content-type': 'application/json' },
                    body: JSON.stringify(user)
                });

            const data = await res.json();

            console.log(data)

            console.log('hello 1', data)

            if (data.status >= 400) {
                dispatch({ type: 'USER_LOGIN_REJECTED', payload: data });
                return { type: 'USER_LOGIN_REJECTED' };
            };

            localStorage.setItem('uid', data.data._id);
            dispatch({ type: 'USER_LOGIN_FULFILLED' });
            dispatch({ type: 'FETCH_USER_FULFILLED', payload: data })

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
    userLogout,
};
