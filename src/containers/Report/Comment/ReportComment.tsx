import React from 'react';
import { connect } from 'react-redux';
import { State, Props, Event } from './config';
import { reportComment } from '../../../redux/actions/reportActions/reportActions';
import ReportCommentComp from '../../../components/Report/ReportComment/ReportComment';

class ReportComment extends React.PureComponent<Props, State> {
    state: State = {
        report_reason: '',
        report_description: ''
    };

    private handleChange = (event: Event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state);
    };

    private handleSubmit = () => {
        event.preventDefault();
        const { report_reason, report_description } = this.state;
        const { offender, reporter, comment_id, report_text, reportComment } = this.props;

        reportComment(offender, reporter, comment_id, report_text, report_reason, report_description);
    };

    render() {
        const { report_reason, report_description } = this.state;
        const { handleChange, handleSubmit } = this;
        return (
            <>
                <ReportCommentComp
                    report_reason={ report_reason }
                    report_description={ report_description }
                    handleChange={ handleChange }
                    handleSubmit={ handleSubmit }
                />
            </>
        );
    };
};

export default connect(null, { reportComment })(ReportComment);
