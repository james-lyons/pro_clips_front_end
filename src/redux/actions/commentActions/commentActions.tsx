import API_URL from '../../../constants';

const fetchComments = (clipId: string) => {
    console.log('hello from fetchComments 1: clipId', clipId)
    return async dispatch => {
        try {
            let res = await fetch(`${ API_URL }/comments/${ clipId }`,
                {
                    method: 'GET',
                    credentials: 'include',
                }
            );

            let data = await res.json();
            console.log('hello from fetchComments 2: data', data)

            return dispatch({ type: "FETCH_COMMENTS_FULFILLED", payload: data.data });

        } catch (error) {
            console.log(error);
            return dispatch({ type: "FETCH_COMMENTS_REJECTED", payload: error })
        }
    }
};

const createComment = (commentText: string, clipId: string) => {
    console.log('create comment 1')
    let commentBody = { commentText, clipId }
    
    return async dispatch => {
        console.log('create comment 2')

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

const deleteComment = (commentId: string) => {
    console.log('Hello from deleteComment 1: commentId', commentId);
    return async dispatch => {
        try {
            let res = await fetch(`${ API_URL }/comments/${ commentId }`,
                {
                    method: 'DELETE',
                    credentials: 'include',
                }
            );

            const data = await res.json();
            console.log('Hello from deleteComment 2: commentId', data);
            
            return dispatch({ type: 'DELETE_COMMENT_FULFILLED', payload: data });

        } catch (error) {
            console.log(error);
            return dispatch({ type: 'DELETE_COMMENT_REJECTED', payload: error });
        };
    };
};

const likeComment = (commentId: string) => {

    return async dispatch => {
        console.log('hello from likeComment 1')

        try {
            let res = await fetch(`${ API_URL }/comments/like/${ commentId }`,
                {
                    method: 'POST',
                    credentials: 'include'
                }
            );

            const data = await res.json();
            console.log('Hello from like comment 2: data', data)
            
            return dispatch({ type: 'LIKE_COMMENT_FULFILLED', payload: data });

        } catch (error) {
            console.log(error);
            return dispatch({ type: 'LIKE_COMMENT_REJECTED', payload: error });
        };
    };
};

const unlikeComment = (commentId: string) => {
    console.log('hello from unlike comment 1: commentId', commentId)

    return async dispatch => {

        try {
            let res = await fetch(`${ API_URL }/comments/unlike/${ commentId }`,
                {
                    method: 'POST',
                    credentials: 'include'
                }
            );

            const data = await res.json();
            return dispatch({ type: 'UNLIKE_COMMENT_FULFILLED', payload: data });

        } catch (error) {
            console.log(error);
            return dispatch({ type: 'UNLIKE_COMMENT_REJECTED', payload: error });
        };
    };
};

export {
    fetchComments,
    createComment,
    deleteComment,
    likeComment,
    unlikeComment
};
