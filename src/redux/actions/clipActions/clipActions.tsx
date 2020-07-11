import API_URL from '../../../constants';

const fetchClip = (clipId: string) => {
    return async dispatch => {
        try {
            let res = await fetch(`${ API_URL }/clips/clip/${ clipId }`,
                {
                    method: 'GET',
                    credentials: 'include',
                    headers: { 'Content-type': 'application/json' },
                }
            );

            let data = await res.json();
            return dispatch({ type: 'FETCH_CLIP_FULFILLED', payload: data });

        } catch (error) {
            return dispatch({ type: 'FETCH_CLIP_REJECTED', payload: error });
        };
    };
};

const fetchUserClips = (username: string) => {
    return async dispatch => {
        try {
            let res = await fetch(`${ API_URL }/clips/clips/${ username }`,
                {
                    method: 'GET',
                    credentials: 'include'
                }
            );

            let data = await res.json();
            return dispatch({ type: 'FETCH_USER_CLIPS_FULFILLED', payload: data });

        } catch (error) {
            return dispatch({ type: 'FETCH_USER_CLIPS_REJECTED', payload: error })
        };
    };
};

const fetchGameClips = (game: string) => {
    return async dispatch => {
        try {
            let res = await fetch(`${ API_URL }/clips/clips/game/${ game }`,
                {
                    method: 'GET',
                    credentials: 'include'
                }
            );

            let data = await res.json();
            return dispatch({ type: 'FETCH_GAME_CLIPS_FULFILLED', payload: data });

        } catch (error) {
            return dispatch({ type: 'FETCH_GAME_CLIPS_REJECTED', payload: error })
        };
    };
};

const fetchBrowseClips = () => {
    return async dispatch => {
        try {
            let res = await fetch(`${ API_URL }/clips/browseclips`,
                {
                    method: 'GET',
                    credentials: 'include'
                }
            );

            let data = await res.json();
            return dispatch({ type: 'FETCH_BROWSE_CLIPS_FULFILLED', payload: data });

        } catch (error) {
            return dispatch({ type: 'FETCH_BROWSE_CLIPS_REJECTED', payload: error })
        };
    };
};

const uploadClip = (clip: File, title: string, game: string) => {

    const formData = new FormData();
    formData.append('clip', clip);
    formData.append('title', title);
    formData.append('game', game);

    console.log(formData);

    return async dispatch => {
        try {
            let res = await fetch(`${ API_URL }/clips`, 
                {
                    method: 'POST',
                    credentials: 'include',
                    headers: { 'Content-type': 'multipart/form-data' },
                    body: formData
                }
            );
            let data = await res.json();

            return dispatch({ type: "CLIP_UPLOAD_FULFILLED", payload: data.status });

        } catch (error) {
            return dispatch({ type: "CLIP_UPLOAD_REJECTED" })
        };
    };
};

const editClip = (clipId: string, newTitle: string) => {
    const titleBody = {
        title: newTitle
    };

    return async dispatch => {
        try {
            let res = await fetch(`${ API_URL }/clips/${ clipId }`, 
                {
                    method: 'PUT',
                    credentials: 'include',
                    headers: { 'Content-type': 'application/json' },
                    body: JSON.stringify(titleBody)
                }
            );
            let data = await res.json();

            return dispatch({ type: "CLIP_EDIT_FULFILLED", payload: data });

        } catch (error) {
            return dispatch({ type: "CLIP_EDIT_REJECTED", payload: error })
        };
    };
};
    
const deleteClip = (clipId: string) => {
    return async dispatch => {
        try {
            let res = await fetch(`${ API_URL }/clips/${ clipId }`, 
                {
                    method: 'DELETE',
                    credentials: 'include',
                }
            );

            let data = await res.json();

            return dispatch({ type: "CLIP_UPLOAD_FULFILLED", payload: data });

        } catch (error) {
            return dispatch({ type: "CLIP_UPLOAD_REJECTED", payload: error })
        };
    };
};

const likeClip = (clipId: string) => {
    return async dispatch => {
        try {
            let res = await fetch(`${ API_URL }/clips/like/${ clipId }`,
                {
                    method: 'POST',
                    credentials: 'include'
                }
            );

            const data = await res.json();
            dispatch({ type: 'LIKE_CLIP_FULFILLED', payload: data });
            return dispatch({ type: 'FETCH_CLIP_FULFILLED', payload: data });

        } catch (error) {
            return dispatch({ type: 'LIKE_CLIP_REJECTED', payload: error });
        };
    };
};

const unlikeClip = (clipId: string) => {
    return async dispatch => {
        try {
            let res = await fetch(`${ API_URL }/clips/unlike/${ clipId }`,
                {
                    method: 'POST',
                    credentials: 'include'
                }
            );

            const data = await res.json();
            dispatch({ type: 'UNLIKE_CLIP_FULFILLED', payload: data });
            return dispatch({ type: 'FETCH_CLIP_FULFILLED', payload: data });

        } catch (error) {
            return dispatch({ type: 'UNLIKE_CLIP_REJECTED', payload: error });
        };
    };
};

export {
    fetchClip,
    fetchUserClips,
    fetchGameClips,
    fetchBrowseClips,
    editClip,
    uploadClip,
    deleteClip,
    likeClip,
    unlikeClip
};
