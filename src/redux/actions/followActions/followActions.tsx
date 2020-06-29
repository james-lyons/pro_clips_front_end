import API_URL from '../../../constants';

const followUser = (username: string) => {
    return async dispatch => {        
        try {
            const res = await fetch(`${ API_URL }/follow/follow/${ username }`, 
                {
                    method: 'POST',
                    credentials: 'include'
                }
            );
            
            const data = await res.json();

            console.log(data);
            if (data.status >= 400) {
                return dispatch({ type: 'FOLLOW_USER_REJECTED', payload: data });
            } else {
                return dispatch({ type: 'FETCH_USER_FULFILLED', payload: data });
            };

        } catch (error) {
            dispatch({ type: "FOLLOW_USER_REJECTED", payload: error });
        };
    };
};

const unfollowUser = (username: string) => {
    return async dispatch => {
        try {
            const res = await fetch(`${ API_URL }/follow/unfollow/${ username }`, 
                {
                    method: 'POST',
                    credentials: 'include'
                }
            );
            
            const data = await res.json();

            if (data.status >= 400) {
                dispatch({ type: 'FOLLOW_USER_REJECTED', payload: data });
            };

            dispatch({ type: 'UNFOLLOW_USER_FULFILLED', payload: data });
            dispatch({ type: 'UNFOLLOW_USER_UPDATE_FULFILLED', payload: data });

        } catch (error) {
            dispatch({ type: 'UNFOLLOW_USER_REJECTED', payload: error });
        };
    };
};

const fetchFollowers = (username: string) => {
    return async dispatch => {
        try {
            const res = await fetch(`${ API_URL }/follow/followers/${ username }`,
                {
                    method: 'GET',
                    credentials: 'include'
                }
            );

            const data = await res.json();

            dispatch({ type: 'FETCH_FOLLOWERS_FULFILLED', payload: data });
        } catch (error) {
            return dispatch({ type: 'FETCH_FOLLOWERS_REJECTED', payload: error })
        };
    };
};

const fetchFollowingList = (username: string) => {
    return async dispatch => {
        try {
            const res = await fetch(`${ API_URL }/follow/following/${ username }`,
                {
                    method: 'GET',
                    credentials: 'include'
                }
            );

            const data = await res.json();

            dispatch({ type: 'FETCH_FOLLOWINGLIST_FULFILLED', payload: data });
        } catch (error) {
            return dispatch({ type: 'FETCH_FOLLOWINGLIST_REJECTED', payload: error })
        };
    };
};

export {
    followUser,
    unfollowUser,
    fetchFollowers,
    fetchFollowingList
};
