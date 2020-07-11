import API_URL from '../../../constants';

const resetComments = () => {
    return async dispatch => {
        return dispatch({ type: 'RESET_COMMENTS' });
    };
};

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

            return dispatch({ type: 'FETCH_COMMENTS_FULFILLED', payload: data.data });

        } catch (error) {
            return dispatch({ type: 'FETCH_COMMENTS_REJECTED', payload: error })
        };
    };
};

const createComment = (commentText: string, clipId: string) => {
    let commentBody = { commentText, clipId }
    
    return async dispatch => {

        try {
            let res = await fetch(`${ API_URL }/comments/`,
                {
                    method: 'POST',
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(commentBody)
                }
            );

            const data = await res.json();
            return dispatch({ type: 'CREATE_COMMENT_FULFILLED', payload: data });

        } catch (error) {
            return dispatch({ type: 'CREATE_COMMENT_REJECTED', payload: data });
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
            
            return dispatch({ type: 'DELETE_COMMENT_FULFILLED', payload: data });

        } catch (error) {
            return dispatch({ type: 'DELETE_COMMENT_REJECTED', payload: error });
        };
    };
};

const likeComment = (commentId: string) => {

    return async dispatch => {

        try {
            let res = await fetch(`${ API_URL }/comments/like/${ commentId }`,
                {
                    method: 'POST',
                    credentials: 'include'
                }
            );

            return dispatch({ type: 'LIKE_COMMENT_FULFILLED'});

        } catch (error) {
            return dispatch({ type: 'LIKE_COMMENT_REJECTED', payload: error });
        };
    };
};

const unlikeComment = (commentId: string) => {

    return async dispatch => {

        try {
            let res = await fetch(`${ API_URL }/comments/unlike/${ commentId }`,
                {
                    method: 'POST',
                    credentials: 'include'
                }
            );

            return dispatch({ type: 'UNLIKE_COMMENT_FULFILLED'});

        } catch (error) {
            return dispatch({ type: 'UNLIKE_COMMENT_REJECTED', payload: error });
        };
    };
};

export {
    resetComments,
    fetchComments,
    createComment,
    deleteComment,
    likeComment,
    unlikeComment
};
