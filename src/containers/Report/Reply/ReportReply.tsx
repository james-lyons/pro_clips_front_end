import React from 'react';
import { connect } from 'react-redux';
import { State, Props, Event } from './config';
import { reportReply } from '../../../redux/actions/reportActions/reportActions';
import ReportReplyComp from '../../../components/Report/ReportReply/ReportReplyComp';

class ReportReply extends React.PureComponent<Props, State> {
    state: State = {
        report_reason: '',
        report_description: '',
        successMessage: false
    };

    private handleChange = (event: Event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    private handleSubmit = async () => {
        event.preventDefault();
        const { report_reason, report_description } = this.state;
        const { offender, reporter, reply_id, report_text, reportReply } = this.props;

        reportReply(offender, reporter, reply_id, report_text, report_reason, report_description);
        await this.setState({ successMessage: !this.state.successMessage });
        return;
    };

    render() {
        const { successMessage, report_description } = this.state;
        const { handleChange, handleSubmit } = this;
        return (
            <>
                <ReportReplyComp
                    successMessage={ successMessage }
                    report_description={ report_description }
                    handleChange={ handleChange }
                    handleSubmit={ handleSubmit }
                />
            </>
        );
    };
};

export default connect(null, { reportReply })(ReportReply);
