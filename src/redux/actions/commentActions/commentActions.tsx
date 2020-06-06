import API_URL from '../../../constants';

const fetchComments = (clipId: string) => {
    return async dispatch => {
        try {
            let res = await fetch(`${ API_URL }/comments/${ clipId }`,
                {
                    method: 'GET',
                    credentials: 'include',
                }
            );

            let data = await res.json();
            console.log('FETCH COMMENTS DATA', data);

            return dispatch({ type: "FETCH_COMMENTS_FULFILLED", payload: data.data });

        } catch (error) {
            console.log(error);
            return dispatch({ type: "FETCH_COMMENTS_REJECTED", payload: error })
        }
    }
};

const createComment = (commentText: string, clipId: string) => {
    let commentBody = { commentText, clipId }
    
    return async dispatch => {
        try {
            let res = await fetch(`${ API_URL }/comments/`,
                {
                    method: 'POST',
                    credentials: 'include',
                    headers: { 'Content-type': 'application/json' },
                    body: JSON.stringify(commentBody)
                }
            );

            const data = await res.json();
            return dispatch({ type: 'CREATE_COMMENT_FULFILLED', payload: data });

        } catch (error) {
            console.log(error);
            return dispatch({ type: 'CREATE_COMMENT_REJECTED', payload: data });
        };
    };
};

const editComment = (commentText: string, clipId: string) => {
    let commentBody = { commentText, clipId }
    
    return async dispatch => {
        try {
            let res = await fetch(`${ API_URL }/comments/`,
                {
                    method: 'PUT',
                    credentials: 'include',
                    headers: { 'Content-type': 'application/json' },
                    body: JSON.stringify(commentBody)
                }
            );

            let data = await res.json();
            return dispatch({ type: 'EDIT_COMMENT_FULFILLED', payload: data });

        } catch (error) {
            console.log(error);
            return dispatch({ type: 'EDIT_COMMENT_REJECTED', payload: error });
        };
    };
};

const deleteComment = (commentId: string) => {
    return async dispatch => {
        try {
            let res = await fetch(`${ API_URL }/comments/${ commentId }`,
                {
                    method: 'DELETE',
                    credentials: 'include',
                }
            );

            const data = await res.json();
            console.log('big data', data);
            
            return dispatch({ type: 'DELETE_COMMENT_FULFILLED', payload: data });

        } catch (error) {
            console.log(error);
            return dispatch({ type: 'DELETE_COMMENT_REJECTED', payload: data });
        };
    };
};

export {
    fetchComments,
    createComment,
    editComment,
    deleteComment
};
