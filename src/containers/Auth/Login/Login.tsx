import React from 'react';
import { connect } from 'react-redux';
import { State, Props, Event, Response } from './config';
import { userLogin } from '../../../redux/actions/authActions/authActions';
import LoginComp from '../../../components/Auth/Login/LoginComp';

class Login extends React.PureComponent<Props, State> {

    state: State = {
        email: "",
        password: "",
        passwordType: 'password',
        error: null,
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

        try {
            const res: Response = await userLogin(user);

            if (res.error) {
                this.setState({ error: res.error });
                return;
    
            } else {
                this.setState({ error: null });
            };
    
            return history.push('/browseClips');

        } catch (error) {
            console.log('Hello from login 4: error', error)
            this.setState({ error });

            return;
        };
    };

    private handlePasswordType = () => {
        event.preventDefault();
        const { passwordType } = this.state;

        passwordType === 'password'
        ? this.setState({ passwordType: 'text' })
        : this.setState({ passwordType: 'password' })
    };

    render() {
        const { email, password, error, passwordType } = this.state;
        const { handleSubmit, handleChange, handlePasswordType } = this;

        return (
            <>
                <LoginComp
                    email={ email }
                    password={ password }
                    passwordType={ passwordType }
                    error={ error }
                    handleChange={ handleChange }
                    handleSubmit={ handleSubmit }
                    handlePasswordType={ handlePasswordType }
                />
            </>
        );
    };
};

export default connect(null, { userLogin })(Login);
