import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { userLogout } from '../../redux/actions/authActions/authActions';

const NavBarComponent: React.SFC<{}> = ({ userLogout, currentUser }) => {

    const element = <FontAwesomeIcon icon={ faBars } />
    const currentUserId = localStorage.getItem('uid');

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
                    <Nav.Link href={`/${ currentUser.userName }`}>Profile</Nav.Link>
                    <NavDropdown alignRight title={ element } id="basic-nav-dropdown">
                        <NavDropdown.Item as={ Link } to="/accounts">Settings</NavDropdown.Item>
                        <NavDropdown.Item onClick={ () => userLogout(currentUserId) }>Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );

    return (
        <>
            { currentUserId ? authLinks : links }
        </>
    );
};

const mapStateToProps = (state:object) => {
    return {
        currentUser: state.userReducer.currentUser
    };
};

export default connect(mapStateToProps, { userLogout })(NavBarComponent);
