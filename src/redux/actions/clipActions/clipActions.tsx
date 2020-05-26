import API_URL from '../../../constants';

const uploadClip = (clip: File) => {
    console.log('HELLO 1 CLIP', clip);

    const formData = new FormData();
    formData.append('clip', clip);
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

const deleteClip = async (clip: string) => {
    console.log(clip)
};

export {
    uploadClip,
    deleteClip
};