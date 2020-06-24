import React from 'react';
import { connect } from 'react-redux';
import { State, Props, Event, ReduxState } from './config';
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
        const newUser = { userName, email, password, password2 };
        const loginCredentials = { email, password };

        const res = await this.props.userRegister(newUser);

        if (res.type === 'USER_REGISTRATION_REJECTED') {
            this.setState({
                errors: this.props.errors,
                message: this.props.message
            })
            return;
        } else if (res.type === 'USER_REGISTRATION_FULFILLED') {
            await this.props.userLogin(loginCredentials);
            if (res.type === 'USER_LOGIN_REJECTED') {
                this.setState({
                    errors: this.props.errors,
                    message: this.props.message
                })
                return;
            };
        }

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

const mapStateToProps = (state: ReduxState) => {
    return {
        errors: state.authReducer.errors,
        message: state.authReducer.message
    };
};

export default connect(mapStateToProps, { userRegister, userLogin })(Register);
