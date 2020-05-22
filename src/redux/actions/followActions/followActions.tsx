import API_URL from '../../../constants';

const followUser = (userName: string) => {
    console.log('USERNAME', userName);

    return async dispatch => {
        console.log('HELLO 1')
        
        try {
            let res = await fetch(`${ API_URL }/follow/follow/${ userName }`, 
                {
                    method: 'POST',
                    credentials: 'include'
                }
            );
            
            const data = await res.json();
            console.log('HELLO 1', data);

            if (data.status >= 400) {
                console.log('error 1')
                return dispatch({ type: 'FOLLOW_USER_REJECTED', payload: data });
            };

            dispatch({ type: 'FOLLOW_USER_FULFILLED', payload: data });

        } catch (error) {
            dispatch({ type: "FOLLOW_USER_REJECTED", payload: error });
            console.log('hello', error);
        };
    };
};

const unfollowUser = (userName: string) => {
    console.log('USERNAME', userName);

    return async dispatch => {
        console.log('HELLO 1')
        try {
            let res = await fetch(`${ API_URL }/follow/unfollow/${ userName }`, 
                {
                    method: 'POST',
                    credentials: 'include'
                }
            );
            
            const data = await res.json();
            console.log('HELLO 1', data);

            if (data.status >= 400) {
                dispatch({ type: 'FOLLOW_USER_REJECTED', payload: data });
            };

            dispatch({ type: 'FOLLOW_USER_FULFILLED' });
            window.location.reload();

        } catch (error) {
            dispatch({ type: "FOLLOW_USER_REJECTED", payload: error });
            console.log(error);
        };
    };
};

export {
    followUser,
    unfollowUser
};
