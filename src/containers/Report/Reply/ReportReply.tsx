import React from 'react';
import { connect } from 'react-redux';
import { State, Props, Event } from './config';
import { reportReply } from '../../../redux/actions/reportActions/reportActions';
import ReportReplyComp from '../../../components/Report/ReportReply/ReportReplyComp';

class ReportReply extends React.PureComponent<Props, State> {
    state: State = {
        report_reason: '',
        report_description: ''
    };

    private handleChange = (event: Event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    private handleSubmit = () => {
        event.preventDefault();
        const { report_reason, report_description } = this.state;
        const { offender, reporter, reply_id, report_text, reportReply } = this.props;

        reportReply(offender, reporter, reply_id, report_text, report_reason, report_description);
    };

    render() {
        const { report_reason, report_description } = this.state;
        const { handleChange, handleSubmit } = this;
        return (
            <>
                <ReportReplyComp
                    report_reason={ report_reason }
                    report_description={ report_description }
                    handleChange={ handleChange }
                    handleSubmit={ handleSubmit }
                />
            </>
        );
    };
};

export default connect(null, { reportReply })(ReportReply);
