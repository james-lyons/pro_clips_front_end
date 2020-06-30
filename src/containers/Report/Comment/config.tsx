interface State {
    report_reason: string,
    report_description: string
};

interface Props {
    offender: string,
    reporter: string,
    comment_id: string,
    report_text: string,
    reportReply: (
        offender: string,
        reporter: string,
        comment_id: string,
        report_text: string,
        report_reason: string,
        report_description: string
    ) => void
};

interface Event {
    target: Target
};

interface Target {
    name: TargetState,
    value: string
};

interface TargetState {
    name: string,
    value: string
};

export {
    State,
    Props,
    Event
};
