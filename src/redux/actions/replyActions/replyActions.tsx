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
            return dispatch({ type: 'CREATE_REPLY_REJECTED', payload: data });
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
            return dispatch({ type: 'DELETE_REPLY_REJECTED', payload: data });
        };
    };
};

export {
    fetchReplies,
    createReply,
    deleteReply
};
