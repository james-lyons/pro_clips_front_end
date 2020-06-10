import API_URL from '../../../constants';

const fetchReplies = () => {
    console.log('hi');
};

const createReply = (replyText: string, commentId: string) => {
    let replyBody = { replyText }
    
    console.log('HELLO 1 FROM CREATEREPLY', replyBody)

    return async dispatch => {
        try {
            let res = await fetch(`${ API_URL }/replies/${ commentId }`,
                {
                    method: 'POST',
                    credentials: 'include',
                    headers: { 'Content-type': 'application/json' },
                    body: JSON.stringify(replyBody)
                }
            );

            const data = await res.json();

            console.log('HELLO 1 FROM CREATEREPLY', data)

            return dispatch({ type: 'CREATE_REPLY_FULFILLED', payload: data });

        } catch (error) {
            console.log(error);
            return dispatch({ type: 'CREATE_REPLY_REJECTED', payload: error });
        };
    };
};

const deleteReply = (replyId: string) => {
    return async dispatch => {
        try {
            let res = await fetch(`${ API_URL }/replies/${ replyId }`,
                {
                    method: 'DELETE',
                    credentials: 'include'
                }
            );

            const data = await res.json();
            return dispatch({ type: 'DELETE_REPLY_FULFILLED', payload: data });

        } catch (error) {
            console.log(error);
            return dispatch({ type: 'DELETE_REPLY_REJECTED', payload: error });
        };
    };
};

const likeReply = (replyId: string) => {
    console.log('hello');
    return async dispatch => {
        try {
            let res = await fetch(`${ API_URL }/replies/like/${ replyId }`,
                {
                    method: 'POST',
                    credentials: 'include'
                }
            );

            const data = await res.json();
            return dispatch({ type: 'DELETE_REPLY_FULFILLED', payload: data });

        } catch (error) {
            console.log(error);
            return dispatch({ type: 'DELETE_REPLY_REJECTED', payload: error });
        };
    };
};

const unlikeReply = (replyId: string) => {
    return async dispatch => {
        try {
            let res = await fetch(`${ API_URL }/replies/unlike/${ replyId }`,
                {
                    method: 'POST',
                    credentials: 'include'
                }
            );

            const data = await res.json();
            return dispatch({ type: 'LIKE_REPLY_FULFILLED', payload: data });

        } catch (error) {
            console.log(error);
            return dispatch({ type: 'UNLIKE_REPLY_REJECTED', payload: error });
        };
    };
};

export {
    fetchReplies,
    createReply,
    deleteReply,
    likeReply,
    unlikeReply
};
