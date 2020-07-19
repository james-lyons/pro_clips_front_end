import React from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';
import { State, Props, Event } from './config';
import { resetPassword } from '../../../redux/actions/userActions/userActions';
import PasswordResetComp from '../../../components/PasswordRecovery/PasswordReset/PasswordResetComp';

class PasswordReset extends React.PureComponent<Props, State> {
    state: State = {
        password: '',
        password2: '',
        passwordType: 'password',
        userId: null,
        resetToken: null,
        submitSuccess: false,
        error: null
    };

    componentDidMount = async () => {
        const { location } = this.props;

        const queryList = queryString.parse(location.search);
        await this.setState({
            userId: queryList.userid,
            resetToken: queryList.token
        });

        return;
    };

    private handleChange = (event: Event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    private handleSubmit = async () => {
        const { password, password2, userId, resetToken } = this.state;

        if (password !== password2) {
            return this.setState({ error: { message: 'Passwords must match.' }});
        };

        const res = await this.props.resetPassword(password, userId, resetToken);
        if (res.payload.status === 200) {
            this.setState({ submitSuccess: true });
        } else {
            this.setState({ error: res.payload });
        };
        return;
    };

    private handlePasswordType = () => {
        event.preventDefault();
        const { passwordType } = this.state;

        passwordType === 'password'
        ? this.setState({ passwordType: 'text' })
        : this.setState({ passwordType: 'password' })
    };

    render() {
        const { password, password2, passwordType, submitSuccess, error } = this.state;
        const { handleChange, handleSubmit, handlePasswordType } = this;

        return (
            <>
                <PasswordResetComp
                    error={ error }
                    password={ password }
                    password2={ password2 }
                    passwordType={ passwordType }
                    submitSuccess={ submitSuccess }
                    handleChange={ handleChange }
                    handleSubmit={ handleSubmit }
                    handlePasswordType={ handlePasswordType }
                />
            </>
        );
    };
};

export default connect(null, { resetPassword })(PasswordReset);
