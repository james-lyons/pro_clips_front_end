import React from 'react';
import { Form, Col, Button} from 'react-bootstrap';
import API_URL from '../../constants';

interface State {
    username: string,
    email: string,
    password: string,
    password2: string,
    errors: Array<string> | null
};

interface Props {
    setCurrentUser: () => {}
};

class Register extends React.PureComponent<Props, State> {

    state: State = {
        username: "",
        email: "",
        password: "",
        password2: "",
        errors: null
    };

    private handleChange = (event:any) => {
        console.log(this.state)
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    private handleSubmit = async (event:any) => {
        event.preventDefault();

        const { username, email, password, password2 } = this.state;
        const newUser = { username, email, password, password2 };

        try {
            let res = await fetch(`${ API_URL }/auth/register`,
                {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
            
            const data = await res.json();
            
            if (data.errors) {
                this.setState({
                    errors: [...data.errors]
                });
            };
        } catch (error) {
            this.setState({
                errors: [...error]
            });
        };
    };

    render() {

        const { username, email, password, password2, errors } = this.state;

        return (
            <>
                <h1 className="col-lg-4 col-md-6 col-sm-10 mb-4" style={{ margin: '5rem auto .75rem', fontSize: '2rem', paddingLeft: '0' }}>Sign up</h1>
                <Form className="col-lg-4 col-md-6 col-sm-10 mb-4" style={{ margin: '0 auto', border: '1px solid black', borderRadius: '5px', padding: '1.2rem' }}>
                    <Form.Row>
                    {
                        errors && (
                            <div>
                                { errors }
                                <button type="button" data-dismiss="alert">
                                    <span>&times;</span>
                                </button>
                            </div>
                        )
                    }
                        <Form.Group as={ Col } controlId="formGridUserName" onSubmit={ this.handleSubmit }>
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                name="username"
                                placeholder="Enter Username"
                                value={ username }
                                onChange={ this.handleChange }
                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={ Col } controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Enter email"
                                value={ email }
                                onChange={ this.handleChange }
                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={ Col } controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={ password }
                                onChange={ this.handleChange }
                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={ Col } controlId="formGridPassword">
                            <Form.Label>Please confirm your password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password2"
                                placeholder="Password"
                                value={ password2 }
                                onChange={ this.handleChange }
                            />
                        </Form.Group>
                    </Form.Row>
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </>
        );
    }
};

export default Register;
