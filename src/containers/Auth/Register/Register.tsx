import React from 'react';
import { connect } from 'react-redux';
import { State, Props, Event, Response } from './config';
import { userRegister, userLogin } from '../../../redux/actions/authActions/authActions';
import RegisterComp from '../../../components/Auth/Register/RegisterComp';

class Register extends React.PureComponent<Props, State> {

    state: State = {
        username: "",
        email: "",
        password: "",
        password2: "",
        errors: null
    };

    private handleChange = (event: Event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    private handleSubmit = async () => {
        event.preventDefault();

        const { username, email, password, password2 } = this.state;
        const { userRegister, userLogin } = this.props;
        const newUser = { username, email, password, password2 };
        const loginCredentials = { email, password };

        if (password.length < 6) {
            this.setState({ errors: [{ message: 'Password must be at least 6 characters long' }]});
            return;

        } else if (password2.length < 6) {
            this.setState({ errors: [{ message: 'Password must be at least 6 characters long' }]});
            return;

        } else if (password !== password2) {
            this.setState({ errors: [{ message: 'Password must match' }]});
            return;
        };

        const res: Response = await userRegister(newUser);

        if (res.type === 'USER_REGISTRATION_REJECTED') {
            this.setState({
                errors: res.payload.errors,
            })
            return;

        } else if (res.type === 'USER_REGISTRATION_FULFILLED') {
            const res2: Response = await userLogin(loginCredentials);

            console.log('Hi!', res2)
            await this.setState({
                errors: null,
            });

            if (res2.type === 'USER_LOGIN_REJECTED') {
                this.setState({
                    errors: res.payload.errors,
                })
                return;
            };
        };
        this.props.history.push('/browseclips');
    };

    render() {

        const { username, email, password, password2, errors } = this.state;

        return (
            <>
                <RegisterComp
                    email={ email }
                    username={ username }
                    password={ password }
                    password2={ password2 }
                    errors={ errors }
                    handleChange={ this.handleChange }
                    handleSubmit={ this.handleSubmit }
                />
            </>
        );
    }
};

export default connect(null, { userRegister, userLogin })(Register);
