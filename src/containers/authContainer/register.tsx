import React from 'react';
import { connect } from 'react-redux';
import { userRegister, userLogin } from '../../actions/authActions/authActions';
import RegisterComponent from '../../components/authComponents/RegisterComponent';
import { RegisterState, RegisterProps } from './auth.config';

class Register extends React.PureComponent<RegisterProps, RegisterState> {

    state: RegisterState = {
        userName: "",
        email: "",
        password: "",
        password2: "",
        errors: null,
        message: null
    };

    private handleChange = (event:any) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    private handleSubmit = async (event:any) => {
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
        };

        await this.props.userLogin(loginCredentials);
        if (res.type === 'USER_LOGIN_REJECTED') {
            this.setState({
                errors: this.props.errors,
                message: this.props.message
            })
            return;
        };

        this.props.history.push('/featuredClips');
    };

    render() {

        const { userName, email, password, password2, errors, message } = this.state;

        return (
            <>
                <RegisterComponent
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

const mapStateToProps = (state) => {
    return {
        errors: state.authReducer.errors,
        message: state.authReducer.message
    };
};

export default connect(mapStateToProps, { userRegister, userLogin })(Register);
