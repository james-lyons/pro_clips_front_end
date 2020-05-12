import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

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

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Pro Clips</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="popularclips">Popular Clips</Nav.Link>
                        <Nav.Link href="browseclips">Browse</Nav.Link>
                        <Nav.Link href="clipupload">Upload Clips</Nav.Link>
                        <Form inline>
                            <FormControl type="text" placeholder="Search creators or categories" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default NavBar;
