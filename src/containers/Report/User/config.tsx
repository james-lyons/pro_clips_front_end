interface State {
    report_reason: string,
    report_description: string,
    error: boolean,
    successMessage: boolean
};

interface Props {
    offender: string,
    reporter: string,
    reportUser: (
        offender: string,
        reporter: string,
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
