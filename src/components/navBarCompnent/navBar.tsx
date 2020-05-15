import React from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { userLogout } from '../../actions/authActions';

interface Props {
    currentUser: string,
    setCurrentUser: (userId: string) => void,
    userLogout: (userId: string) => void
};

const NavBar: React.SFC<Props> = ({ userLogout }) => {

    const element = <FontAwesomeIcon icon={ faBars } />
    const currentUser = localStorage.getItem('uid');

    const links = (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Pro Clips</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav style={{ margin: '0 auto' }}>
                    <Nav.Link href="featuredClips">Popular Clips</Nav.Link>
                    <Nav.Link href="browseclips">Browse</Nav.Link>
                </Nav>
                <Nav style={{ marginRight: '10px' }}>
                    <Nav.Link href="login">Login</Nav.Link>
                    <Nav.Link href="register">Sign Up</Nav.Link>
                    <NavDropdown alignRight title={ element } id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
    
    const authLinks = (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Pro Clips</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav style={{ margin: '0 auto' }}>
                    <Nav.Link href="featuredClips">Popular Clips</Nav.Link>
                    <Nav.Link href="browseclips">Browse</Nav.Link>
                </Nav>
                <Nav style={{ marginRight: '10px' }}>
                    <Nav.Link href="clipupload">Upload</Nav.Link>
                    <Nav.Link href="profile">Profile</Nav.Link>
                    <NavDropdown alignRight title={ element } id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
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

export default connect(null, { userLogout })(NavBar);
