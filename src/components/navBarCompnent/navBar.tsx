import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

interface Props {
    currentUser: string,
    setCurrentUser: (userId: string) => void,
    logout: (userId: string) => void
};

const NavBar: React.SFC<Props> = ({
    currentUser,
    setCurrentUser,
    logout
}: Props) => {

    const element = <FontAwesomeIcon icon={ faBars } />

    return (
        <>
            <Navbar bg="light" expand="lg">
                <NavDropdown title={ element } id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Support</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">TOS</NavDropdown.Item>
                </NavDropdown>
                <Navbar.Brand href="/">Pro Clips</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav style={{ margin: '0 auto' }}>
                        <Nav.Link href="popularclips">Popular Clips</Nav.Link>
                        <Nav.Link href="browseclips">Browse</Nav.Link>
                    </Nav>
                    <Nav style={{ marginRight: '10px' }}>
                        <Nav.Link href="login">Login</Nav.Link>
                        <Nav.Link href="register">Sign Up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default NavBar;
