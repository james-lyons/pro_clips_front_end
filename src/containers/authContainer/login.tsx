import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import API_URL from '../../constants'

interface State {
    email: string,
    password: string,
    errors: Array<string> | null
};

interface Props {
    setCurrentUser: () => {}
};

class Login extends React.PureComponent<Props, State> {

    state: State = {
        email: "",
        password: "",
        errors: null
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

        console.log('hello 1')
    
        try {
            let res = await fetch(`${ API_URL }/auth/login`,
                {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                });
                console.log('hello 2')

            let data = await res.json();
            console.log('hello 3', data)

            await setCurrentUser(data.id);
            console.log(data.id);
            
        } catch (error) {
            console.log('hello 4', error)
            this.setState({
                errors: [...error.message]
            });
            console.log(error)
        };
    };

    render() {
        const { email, password, errors } = this.state;

        return (
            <>
                <h1 className="col-lg-4 col-md-6 col-sm-10 mb-4" style={{ margin: '5rem auto .75rem', fontSize: '2rem', paddingLeft: '0' }}>Login</h1>
                
                <Form className="col-lg-4 col-md-6 col-sm-10 mb-4" style={{ margin: '0 auto', border: '1px solid black', borderRadius: '5px', padding: '1.2rem' }} onSubmit={ this.handleSubmit }>
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
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <button onClick={() => console.log(this.props)}>hello</button>
            </>
        );
    }
};

export default Login;
