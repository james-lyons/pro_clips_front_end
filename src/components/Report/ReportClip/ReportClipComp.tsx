import React from 'react';
import { Props } from './config';
import { Form, Icon, Modal, Button, TextArea, Message } from 'semantic-ui-react';

const ReportClipComp: React.SFC<Props> = ({
    report_description,
    successMessage,
    handleChange,
    handleSubmit
}) => {
    return (
        <Modal
            size='tiny'
            trigger={ <span>Report <Icon color='black' name='warning circle' /></span> }
        >
            <Modal.Header>Report</Modal.Header>

            { 
                successMessage &&
                <Message className='report-message' error>
                    <p>Thank you for your report.</p>
                </Message>
            }

            <Form className='report-form' onSubmit={ handleSubmit }>
                <Form.Field
                    required
                    label='Reason for report'
                    control='select'
                    name='report_reason'
                    onChange={ handleChange }
                >
                    <option value="Select">Select</option>
                    <option value="Fraud">Fraud</option>
                    <option value="Cheating">Cheating</option>
                    <option value="Harassment">Harassment</option>
                    <option value="Alternative Reason">
                        Alternative Reason (Please fill out the description box below)
                    </option>
                </Form.Field>
                <Form.Input
                    type='text'
                    label='Please provide a description for why you are reporting this comment. (Optional)'
                    textarea={ 4 }
                    control={ TextArea }
                    name='report_description'
                    value={ report_description }
                    onChange={ handleChange }
                />
                <Button
                    basic
                    size='small'
                    color='black'
                    floated='right'
                    type='submit'
                    className='report-form-button'
                >
                    Submit
                </Button>
            </Form>
        </Modal>
    );
};

export default ReportClipComp;