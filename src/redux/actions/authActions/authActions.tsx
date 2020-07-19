import API_URL from '../../../constants';
import { User, NewUser } from './config';

const resendEmailToken = (email: string) => {
    return async dispatch => {
        try {
            let res = await fetch(`${ API_URL }/auth/register/resend/${ email }`,
                {
                    method: 'GET',
                    credentials: 'include'
                }
            );

            let data = await res.json();

            if (data.status >= 400) {
                return dispatch({ type: 'RESEND_EMAIL_TOKEN_REJECTED', payload: data })
            } else {
                return dispatch({ type: 'RESEND_EMAIL_TOKEN_FULFILLED', payload: data })
            }
        } catch (error) {
            return dispatch({ type: 'RESEND_EMAIL_TOKEN_REJECTED', payload: error})
        };
    };
};

const registerConfirm = (emailtoken: string) => {
    console.log('Hello from registerConfirm 1: emailToken', emailtoken);
    return async dispatch => {
        try {
            let res = await fetch(`${ API_URL }/auth/register/confirm/${ emailtoken }`,
                {
                    method: 'GET',
                    credentials: 'include'
                }
            );
            
            const data = await res.json();
            console.log('hello from registerConfirm 2: data', data);

            if (data.status >= 400) {
                return dispatch({ type: 'REGISTRATION_CONFIRMATION_REJECTED', payload: data });
            } else {
                return dispatch({ type: 'REGISTRATION_CONFIRMATION_FULFILLED', payload: data });
            };
        } catch (error) {
            return dispatch({ type: 'REGISTRATION_CONFIRMATION_REJECTED', payload: error })
        };
    };
};

const userRegister = (newUser: NewUser) => {
    return async dispatch => {
        try {
            let res = await fetch(`${ API_URL }/auth/register`,
                {
                    method: 'POST',
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newUser)
                }
            );

            const data = await res.json();

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
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(user)
                }
            );

            const data = await res.json();

            if (data.status >= 400) {
                dispatch({ type: 'USER_LOGIN_REJECTED', payload: data });
                return { error: data.error };
            };

            localStorage.setItem('uid', data.data._id);
            dispatch({ type: 'USER_LOGIN_FULFILLED' });
            return dispatch({ type: 'FETCH_CURRENT_USER_FULFILLED', payload: data })

        } catch (error) {
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
                    headers: { 'Content-Type': 'application/json' }
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
    resendEmailToken,
    registerConfirm,
    userRegister,
    userLogin,
    userLogout
};
