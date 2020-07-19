import React from 'react';
import { Link } from 'react-router-dom';
import { Props } from './config';
import { Loader, Message, Segment, Dimmer } from 'semantic-ui-react';

const RegisterConfirmComp: React.SFC<Props> = ({
    error,
    isLoading,
    registerationSuccess
}) => {
    return (
        <> 
            <div id='register-confirmation-container'>
                {
                    isLoading &&
                    <Dimmer active inverted style={{ margin: 'auto' }}>
                        <Loader inverted>Loading</Loader>
                    </Dimmer>
                }
                {
                    error &&
                    <Message error id='register-confirmation-error'>
                        Something went wrong, please return to the registration page and try again.
                    </Message>
                }
                {
                    registerationSuccess &&
                    <Message>
                        <Message.Header>
                            Your email has been successfully verified. Thanks again for signing up!
                        </Message.Header>
                        <span><Link to='/login'>Login</Link> here</span>
                    </Message>
                }                
            </div>
        </>
    );
};

export default RegisterConfirmComp;