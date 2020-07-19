import React from 'react';
import { connect } from 'react-redux';
import { State, Props, Event } from './config';
import { recoverPassword } from '../../../redux/actions/userActions/userActions';
import RecoverEmailComp from '../../../components/PasswordRecovery/RecoverEmail/RecoverEmailComp';

class RecoverEmail extends React.PureComponent<Props, State> {
    state: State = {
        email: '',
        error: null,
        submitSuccess: false
    };

    private handleChange = (event: Event) => {
        this.setState({ email: event.target.value });
    };

    private handleSubmit = async () => {
        const res = await this.props.recoverPassword(this.state.email);
        if (res.payload.status === 201) {
            this.setState({ submitSuccess: true });
        };
    };

    render() {
        const { email, error, submitSuccess } = this.state;
        const { handleChange, handleSubmit } = this;
        return (
            <>
                <RecoverEmailComp
                    email={ email }
                    error={ error }
                    submitSuccess={ submitSuccess }
                    handleSubmit={ handleSubmit }
                    handleChange={ handleChange }
                />
            </>
        );
    };
};

export default connect(null, { recoverPassword })(RecoverEmail);
