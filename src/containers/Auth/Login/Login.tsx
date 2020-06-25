import React from 'react';
import { connect } from 'react-redux';
import { State, Props, Event, Response } from './config';
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
        const { history, userLogin } = this.props;
        const user = { email, password };

        const res: Response = await userLogin(user);

        if (res.payload.errors) {
            this.setState({
                errors: res.payload.errors,
                message: res.payload.message
            });

            return;
        } else {
            this.setState({
                errors: null,
                message: null
            });
        };

        return history.push('/browseClips');
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

export default connect(null, { userLogin })(Login);
