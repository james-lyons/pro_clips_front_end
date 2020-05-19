import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { userLogout } from '../../actions/authActions/authActions';

interface Props {
    user: object,
    currentUser: string,
    setCurrentUser: (userId: string) => void,
    userLogout: (userId: string) => void
};

const NavBar: React.SFC<Props> = ({ userLogout }) => {

    const element = <FontAwesomeIcon icon={ faBars } />
    const currentUser = localStorage.getItem('uid');

    const links = (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={ Link } to="/">Clipped</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav style={{ margin: '0 auto' }}>
                    <Nav.Link as={ Link } to="/featuredClips">Featured</Nav.Link>
                    <Nav.Link as={ Link } to="/browseclips">Browse</Nav.Link>
                </Nav>
                <Nav style={{ marginRight: '10px' }}>
                    <Nav.Link as={ Link } to="/login">Login</Nav.Link>
                    <Nav.Link as={ Link } to="/register">Sign Up</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
    
    const authLinks = (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={ Link } to="/">Clipped</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav style={{ margin: '0 auto' }}>
                    <Nav.Link as={ Link } to="/featuredClips">Featured</Nav.Link>
                    <Nav.Link as={ Link } to="/browseclips">Browse</Nav.Link>
                </Nav>
                <Nav style={{ marginRight: '10px' }}>
                    <Nav.Link as={ Link } to="/clipupload">Upload</Nav.Link>
                    <Nav.Link as={ Link } to="/profile">Profile</Nav.Link>
                    <NavDropdown alignRight title={ element } id="basic-nav-dropdown">
                        <NavDropdown.Item as={ Link } to="/accounts">Settings</NavDropdown.Item>
                        <NavDropdown.Item onClick={ () => userLogout(currentUser) }>Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );

    return (
        <>
            { currentUser ? authLinks : links }
        </>
    );
};

const mapStateToProps = (state:object) => {
    return {
        user: state.userReducer.user
    };
};

export default connect(mapStateToProps, { userLogout })(NavBar);
