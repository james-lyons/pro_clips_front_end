import React from 'react';
import { connect } from 'react-redux';
import { State, Props, Event, Response } from './config';
import { userRegister, userLogin } from '../../../redux/actions/authActions/authActions';
import RegisterComp from '../../../components/Auth/Register/RegisterComp';

class Register extends React.PureComponent<Props, State> {

    state: State = {
        userName: "",
        email: "",
        password: "",
        password2: "",
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

        const { userName, email, password, password2 } = this.state;
        const { userRegister, userLogin } = this.props;
        const newUser = { userName, email, password, password2 };
        const loginCredentials = { email, password };

        const res: Response = await userRegister(newUser);

        if (res.type === 'USER_REGISTRATION_REJECTED') {
            this.setState({
                errors: res.payload.errors,
                message: res.payload.message
            })
            return;

        } else if (res.type === 'USER_REGISTRATION_FULFILLED') {
            const res2: Response = await userLogin(loginCredentials);

            console.log('Hi!', res2)
            await this.setState({
                errors: null,
                message: null
            });

            if (res2.type === 'USER_LOGIN_REJECTED') {
                this.setState({
                    errors: res.payload.errors,
                    message: res.payload.message
                })
                return;
            };
        };
        this.props.history.push('/browseclips');
    };

    render() {

        const { userName, email, password, password2, errors, message } = this.state;

        return (
            <>
                <RegisterComp
                    userName={ userName }
                    email={ email }
                    password={ password }
                    password2={ password2 }
                    errors={ errors }
                    message={ message }
                    handleChange={ this.handleChange }
                    handleSubmit={ this.handleSubmit }
                />
            </>
        );
    }
};

export default connect(null, { userRegister, userLogin })(Register);
