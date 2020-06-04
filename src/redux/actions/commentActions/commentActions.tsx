import API_URL from '../../../constants';

const fetchComments = () => {
    console.log('hi');
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

const editComment = () => {
    console.log('hi');
};

const deleteComment = () => {
    console.log('hi');
};

export {
    fetchComments,
    createComment,
    editComment,
    deleteComment
};
