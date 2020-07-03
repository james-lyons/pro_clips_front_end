import React from 'react';
import { connect } from 'react-redux';
import { State, Props, Event } from './config';
import { reportClip } from '../../../redux/actions/reportActions/reportActions';
import ReportClipComp from '../../../components/Report/ReportClip/ReportClipComp';

class ReportClip extends React.PureComponent<Props, State> {
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
        const { offender, reporter, clip_id, reportClip } = this.props;

        reportClip(offender, reporter, clip_id, report_reason, report_description);
        await this.setState({ successMessage: !this.state.successMessage });
        return;
    };

    render() {
        const { report_description, successMessage } = this.state;
        const { handleChange, handleSubmit } = this;
        return (
            <>
                <ReportClipComp
                    successMessage={ successMessage }
                    report_description={ report_description }
                    handleChange={ handleChange }
                    handleSubmit={ handleSubmit }
                />
            </>
        );
    };
};

export default connect(null, { reportClip })(ReportClip);
