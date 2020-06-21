import React from 'react';
import { Props } from './config';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

const LoginModal: React.SFC<Props> = ({
    showLoginModal,
    handleCloseLoginModal,
}) => {
    return (
        <Modal show={ showLoginModal } onHide={ handleCloseLoginModal }>
            <Modal.Header closeButton>
                <Modal.Title>ProClips</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Link to="/login">Login</Link> to like, comment, and reply!
            </Modal.Body>
        </Modal>
    );
};

export default LoginModal;