import API_URL from '../../../constants';

const followUser = (userName: string) => {
    console.log('USERNAME', userName);

    return async dispatch => {
        console.log('FOLLOW USER HELLO 1')
        
        try {
            let res = await fetch(`${ API_URL }/follow/follow/${ userName }`, 
                {
                    method: 'POST',
                    credentials: 'include'
                }
            );
            
            const data = await res.json();
            console.log('FOLLOW USER HELLO 2', data);

            if (data.status >= 400) {
                console.log('error 1')
                return dispatch({ type: 'FOLLOW_USER_REJECTED', payload: data });
            };

            console.log(data)

            dispatch({ type: 'FOLLOW_USER_FULFILLED', payload: data });
            dispatch({ type: 'FOLLOW_USER_UPDATE_FULFILLED', payload: data });

        } catch (error) {
            dispatch({ type: "FOLLOW_USER_REJECTED", payload: error });
            console.log('hello', error);
        };
    };
};

const unfollowUser = (userName: string) => {
    console.log('USERNAME', userName);

    return async dispatch => {
        console.log('UNFOLLOW USER HELLO 1')
        try {
            let res = await fetch(`${ API_URL }/follow/unfollow/${ userName }`, 
                {
                    method: 'POST',
                    credentials: 'include'
                }
            );
            
            const data = await res.json();
            console.log('UNFOLLOW USER HELLO 2', data);

            if (data.status >= 400) {
                dispatch({ type: 'FOLLOW_USER_REJECTED', payload: data });
            };

            dispatch({ type: 'UNFOLLOW_USER_FULFILLED', payload: data });
            dispatch({ type: 'UNFOLLOW_USER_UPDATE_FULFILLED', payload: data });

        } catch (error) {
            dispatch({ type: "UNFOLLOW_USER_REJECTED", payload: error });
            console.log(error);
        };
    };
};

export {
    followUser,
    unfollowUser
};
