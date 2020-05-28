import API_URL from '../../../constants';

const uploadClip = (clip: File, clip_title: string) => {
    console.log('HELLO 1 CLIP', clip);

    const formData = new FormData();
    formData.append('clip', clip);
    formData.append('title', clip_title);
    console.log(formData);

    return async dispatch => {
        try {
            let res = await fetch(`${ API_URL }/clips`, 
                {
                    method: 'POST',
                    credentials: 'include',
                    body: formData
                }
            );
            let data = await res.json();
            console.log('HELLO 2 DATA', data);

            dispatch({ type: "CLIP_UPLOAD_FULFILLED" });

        } catch (error) {
            console.log('HELLO 3 ERROR', error);
            dispatch({ type: "CLIP_UPLOAD_REJECTED" })
        };
    };
};

const fetchClip = (clipName: string) => {
    console.log(clipName);

    return async dispatch => {
        try {
            let res = await fetch(`${ API_URL }/clips/clip/${ clipName }`,
                {
                    method: 'GET',
                    credentials: 'include',
                    headers: { 'Content-type': 'application/json' },
                }
            );

            let data = await res.json();
            console.log('BIG DATA', data);
            dispatch({ type: 'FETCH_CLIP_FULFILLED', payload: data });

        } catch (error) {
            console.log(error);
            dispatch({ type: 'FETCH_CLIP_REJECTED', payload: data });
            // dispatch({ type: 'FETCH_CLIP_STREAM_REJECTED', payload: data });
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
            console.log('HELLO FROM FETCHUSERCLIPS: data', data);
            dispatch({ type: 'FETCH_USER_CLIPS_FULFILLED', payload: data});

        } catch (error) {
            console.log(error);
            dispatch({ type: 'FETCH_USER_CLIPS_REJECTED', payload: error})
        };
    };
};

const deleteClip = (clip: string) => {
    console.log(clip)
};

export {
    uploadClip,
    deleteClip,
    fetchClip,
    fetchUserClips
};
