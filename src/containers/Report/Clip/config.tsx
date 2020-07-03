interface State {
    report_reason: string,
    report_description: string,
    successMessage: boolean
};

interface Props {
    offender: string,
    reporter: string,
    clip_id: string,
    reportClip: (
        offender: string,
        reporter: string,
        clip_id: string,
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
