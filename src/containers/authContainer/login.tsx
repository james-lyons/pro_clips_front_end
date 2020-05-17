import React from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../../actions/authActions/authActions';
import { LoginState, LoginProps } from './auth.config';
import LoginComponent from '../../components/authComponents/loginComponent';

class Login extends React.PureComponent<LoginProps, LoginState> {

    state: LoginState = {
        email: "",
        password: "",
        errors: null,
        message: null
    };

    // private componentDidMount = (event) => {
    //     this.setState({
    //         errors: 
    //     });
    // };

    private handleChange = (event: any) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    private handleSubmit = async (event:any) => {
        event.preventDefault();

        const { email, password } = this.state;
        const user = { email, password };

        await this.props.userLogin(user);

        if (this.props.errors) {
            console.log(this.props.errors)
            this.setState({
                errors: this.props.errors,
                message: this.props.message
            })
            return;
        };

        this.props.history.push('/featuredClips');
    };

    render() {
        const { email, password, errors, message } = this.state;

        return (
            <>
                <LoginComponent
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

const mapStateToProps = (state) => {
    return {
        errors: state.authReducer.errors,
        message: state.authReducer.message
    };
};

export default connect(mapStateToProps, { userLogin })(Login);
