import API_URL from '../../../constants';

const reportUser = (
    offender: string,
    reporter: string,
    report_reason: string,
    report_description: string
    ) => {

    let body = {
        offender,
        reporter,
        report_reason,
        report_description
    };

    return async dispatch => {
        try {
            let res = await fetch(`${ API_URL }/report/user`,
            {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(body)
            }
        );

        const data = await res.json();

        return dispatch({ type: 'REPORT_USER_FULFILLED', payload: data });

        } catch (error) {
            return dispatch({ type: 'REPORT_USER_FAILED', payload: error })
        };
    };
};

const reportClip = (
    offender: string,
    reporter: string,
    clip_id: string,
    report_reason: string,
    report_description: string
    ) => {

    let body = {
        offender,
        reporter,
        clip_id,
        report_reason,
        report_description
    };

    return async dispatch => {
        try {
            let res = await fetch(`${ API_URL }/report/clip`,
            {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(body)
            }
        );

        const data = await res.json();

        return dispatch({ type: 'REPORT_USER_FULFILLED', payload: data });

        } catch (error) {
            return dispatch({ type: 'REPORT_USER_FAILED', payload: error })
        };
    };
};

const reportReply = (
    offender: string,
    reporter: string,
    reply_id: string,
    report_text: string,
    report_reason: string,
    report_description: string
    ) => {

    let body = {
        offender,
        reporter,
        reply_id,
        report_text,
        report_reason,
        report_description
    };

    return async dispatch => {
        try {
            let res = await fetch(`${ API_URL }/report/reply`,
            {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(body)
            }
        );

        const data = await res.json();

        return dispatch({ type: 'REPORT_USER_FULFILLED', payload: data });

        } catch (error) {
            return dispatch({ type: 'REPORT_USER_FAILED', payload: error })
        };
    };
};

const reportComment = (
    offender: string,
    reporter: string,
    comment_id: string,
    report_text: string,
    report_reason: string,
    report_description: string
    ) => {

    let body = {
        offender,
        reporter,
        comment_id,
        report_text,
        report_reason,
        report_description
    };

    return async dispatch => {
        try {
            let res = await fetch(`${ API_URL }/report/comment`,
            {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(body)
            }
        );

        const data = await res.json();

        return dispatch({ type: 'REPORT_USER_FULFILLED', payload: data });

        } catch (error) {
            return dispatch({ type: 'REPORT_USER_FAILED', payload: error })
        };
    };
};

export {
    reportUser,
    reportClip,
    reportReply,
    reportComment
};
