import React from 'react';
import { Props } from './config';
import { Link } from 'react-router-dom';
import { Modal } from 'semantic-ui-react';

const LoginModal: React.SFC<Props> = ({ modalName }) => {
    return (
        <Modal trigger={ <span>{ modalName }</span> }>
            <Modal.Header>Clipped</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <Link to="/login">Login</Link> to like, comment, reply, and follow!
                </Modal.Description>
            </Modal.Content>
        </Modal>
    );
};

export default LoginModal;