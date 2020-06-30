import React from 'react';
import { connect } from 'react-redux';
import { State, Props, Event } from './config';
import { reportUser } from '../../../redux/actions/reportActions/reportActions';
import ReportUserComp from '../../../components/Report/ReportUser/ReportUserComp';

class ReportUser extends React.PureComponent<Props, State> {
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
        const { offender, reporter, reportUser } = this.props;
        reportUser(offender, reporter, report_reason, report_description);
    };

    render() {
        const { report_reason, report_description } = this.state;
        const { handleChange, handleSubmit } = this;
        return (
            <>
                <ReportUserComp
                    report_reason={ report_reason }
                    report_description={ report_description }
                    handleChange={ handleChange }
                    handleSubmit={ handleSubmit }
                />
            </>
        );
    };
};

export default connect(null, { reportUser })(ReportUser);
