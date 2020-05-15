import React from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../../actions/authActions';
import { LoginState, LoginProps } from './auth.config';
import LoginComponent from '../../components/authComponents/loginComponent';

class Login extends React.PureComponent<LoginProps, LoginState> {

    state: LoginState = {
        email: "",
        password: "",
    };

    private handleChange = (event: any) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    private handleSubmit = async (event:any) => {
        event.preventDefault();

        const { email, password } = this.state;
        const user = { email, password };
        const { setCurrentUser } = this.props;

        const res = await this.props.userLogin(user);

        if (res.type === 'USER_LOGIN_REJECTED') {
            return;
        };
        
        this.props.history.push('/featuredClips');
        window.location.reload();
    };

    render() {
        const { email, password } = this.state;

        return (
            <>
                <LoginComponent
                    email={ email }
                    password={ password }
                    handleChange={ this.handleChange }
                    handleSubmit={ this.handleSubmit }
                />
            </>
        );
    };
};

export default connect(null, { userLogin })(Login);
