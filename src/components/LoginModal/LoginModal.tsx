import React from 'react';
import { Props } from './config';
import { Link } from 'react-router-dom';
import { Modal, Button, Header } from 'semantic-ui-react';

const LoginModal: React.SFC<Props> = ({
    showLoginModal,
    buttonName,
    handleCloseLoginModal,
}) => {
    return (
        // <Modal show={ showLoginModal } onHide={ handleCloseLoginModal }>
        //     <Modal.Header closeButton>
        //         <Modal.Title>ProClips</Modal.Title>
        //     </Modal.Header>
        //     <Modal.Body>
        //         <Link to="/login">Login</Link> to like, comment, reply, and follow!
        //     </Modal.Body>
        // </Modal>

        <Modal trigger={ <Button size='tiny' basic color='red'>{ buttonName }</Button> } centered={ false } size='mini'>
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