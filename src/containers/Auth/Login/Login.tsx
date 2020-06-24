import React from 'react';
import { connect } from 'react-redux';
import { State, Props, Event, ReduxState } from './config';
import { userLogin } from '../../../redux/actions/authActions/authActions';
import LoginComp from '../../../components/Auth/Login/LoginComp';

class Login extends React.PureComponent<Props, State> {

    state: State = {
        email: "",
        password: "",
        errors: null,
        message: null
    };

    private handleChange = (event: Event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    private handleSubmit = async () => {
        event.preventDefault();

        const { email, password } = this.state;
        const user = { email, password };
        const { errors, message, history, userLogin } = this.props;

        await userLogin(user);

        if (errors) {
            this.setState({
                errors: errors,
                message: message
            })
            return;
        };

        history.push('/browseclips');
    };

    render() {
        const { email, password, errors, message } = this.state;

        return (
            <>
                <LoginComp
                    email={ email }
                    password={ password }
                    errors={ errors }
                    message={ message }
                    handleChange={ this.handleChange }
                    handleSubmit={ this.handleSubmit }
                />
            </>
        );
    };
};

const mapStateToProps = (state: ReduxState) => {
    return {
        errors: state.authReducer.errors,
        message: state.authReducer.message
    };
};

export default connect(mapStateToProps, { userLogin })(Login);
