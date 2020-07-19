import React from 'react';
import { connect } from 'react-redux';
import { State, Props, Event } from './config';
import { resendEmailToken } from '../../../redux/actions/authActions/authActions';
import ResendRegisterTokenComp from '../../../components/Auth/ResendRegisterToken/ResendRegisterTokenComp';

class ResendRegisterToken extends React.PureComponent<Props, State> {
    state: State = {
        email: '',
        error: null,
        submitSuccess: false
    };

    private handleChange = (event: Event) => {
        this.setState({
            email: event.target.value
        });
        console.log(this.state);
    };

    private handleSubmit = async () => {
        const { resendEmailToken } = this.props;
        let res = await resendEmailToken(this.state.email);

        if (res.payload.status >= 400) {
            this.setState({ error: { message: 'Something went wrong, please return to the Register page and try again.' }});
            return;

        } else {
            this.setState({ submitSuccess: true });
            return;
        };
    };

    render() {

        const { email, error, submitSuccess } = this.state;
        const { handleChange, handleSubmit } = this;

        return (
            <>
                <ResendRegisterTokenComp
                    email={ email }
                    error={ error }
                    submitSuccess={ submitSuccess }
                    handleChange={ handleChange }
                    handleSubmit={ handleSubmit }
                />
            </>
        );
    };
};

export default connect(null, { resendEmailToken })(ResendRegisterToken);
