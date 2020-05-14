import React from 'react';
import { Form, Col, Button} from 'react-bootstrap';
import API_URL from '../../constants';

interface State {
    userName: string,
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
        userName: "",
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

        const { userName, email, password, password2 } = this.state;
        const newUser = { userName, email, password, password2 };

        console.log('hello 1')
        console.log('NewUser:', newUser)

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

            console.log('hello 2')
            console.log('hello 3', data)
            
            if (data.errors) {
                let errorArray: Array<string> = [];
                data.errors.map((e:Object) => errorArray.push(e.message))
                console.log('hello 4', errorArray)
                this.setState({
                    errors: [...errorArray]
                });
            };
        } catch (error) {
            console.log('Hello 5', error)
            this.setState({
                errors: [...error]
            });
        };
    };

    render() {

        const { userName, email, password, password2, errors } = this.state;

        return (
            <>
                <h1 className="col-lg-4 col-md-6 col-sm-10 mb-4" style={{ margin: '5rem auto .75rem', fontSize: '2rem', paddingLeft: '0' }}>Sign up</h1>

                <Form className="col-lg-4 col-md-6 col-sm-10 mb-4" style={{ margin: '0 auto', border: '1px solid black', borderRadius: '5px', padding: '1.2rem' }} onSubmit={ this.handleSubmit }>
                    
                        <div style={{ marginBottom: '1rem' }}>
                        { errors && errors.map((e, i) => (
                            <div
                                style={{ width: '100%', backgroundColor: 'rgba(0,0,0,.5)', margin: '.5rem auto'}} role="alert" key={ i }>
                                <p style={{ color: 'black', padding: '.3rem', marginBottom: '2px', marginBlockStart: '0' }}>{ e }  </p>
                            </div>
                        ))}
                        </div>
                    <Form.Row>
                        <Form.Group as={ Col } controlId="formGridUserName">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                name="userName"
                                placeholder="Enter Username"
                                value={ userName }
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
                        <Form.Group as={ Col } controlId="formGridPassword2">
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
