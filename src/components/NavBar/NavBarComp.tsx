import React from 'react';
import { Props, ReduxState } from './config';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dropdown, Menu, Icon, Button } from 'semantic-ui-react'
import { userLogout } from '../../redux/actions/authActions/authActions';
import Search from '../../containers/Search/Search';

const NavBarComponent: React.SFC<Props> = ({ currentUser, userLogout }) => {

    const barsIcon = () => <Icon name='bars' />
    const currentUserId = localStorage.getItem('uid');
    const options = [
        { key: 1, text: 'settings', value: 'settings' },
        { key: 2, text: 'loggout',  onClick: () => userLogout(currentUserId) }
    ];

    const DropdownMenu = () => (
        <Menu compact>
            <Dropdown text='dropdown' options={ options } simple item />
        </Menu>
    );

    const DropdownExampleFloating = () => (
        <Button.Group color='teal'>
          <Button>Save</Button>
          <Dropdown
            labeled
            floating
            icon='bars'
            className='icon'
            options={ options }
            trigger={<React.Fragment />}
          />
        </Button.Group>
      )

    const links = (
        <div className="navbar">
            <ul id="navbar-ul">
                <Link to="/">Clipped</Link>
                <Link to="'/popularClips">Popular CLips</Link>
                <Link to="'/browseClips">Popular Clips</Link>
                <Search />
                <Link to="/login">Login</Link>
                <Link to="/register">Sign Up</Link>
            </ul>
        </div>
        // <Navbar bg="light" expand="lg">
        //     <Navbar.Brand as={ Link } to="/">Clipped</Navbar.Brand>
        //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //     <Navbar.Collapse id="basic-navbar-nav">
        //         <Nav style={{ margin: '0 auto' }}>
        //             <Nav.Link as={ Link } to="/popularClips">Popular Clips</Nav.Link>
        //             <Nav.Link as={ Link } to="/browseclips">Browse By Game</Nav.Link>
        //             <Search />
        //         </Nav>
        //         <Nav style={{ marginRight: '10px' }}>
        //             <Nav.Link as={ Link } to="/login">Login</Nav.Link>
        //             <Nav.Link as={ Link } to="/register">Sign Up</Nav.Link>
        //         </Nav>
        //     </Navbar.Collapse>
        // </Navbar>
    );
    
    const authLinks = (
        <div className="navbar">
            <ul id="navbar-ul">
                <Link to="/">Clipped</Link>
                <Link to="'/popularClips">Popular CLips</Link>
                <Link to="'/browseClips">Popular Clips</Link>
                <Search />
                <DropdownExampleFloating />
            </ul>
        </div>
        // <Navbar bg="light" expand="lg">
        //     <Navbar.Brand as={ Link } to="/">Clipped</Navbar.Brand>
        //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //     <Navbar.Collapse id="basic-navbar-nav">
        //         <Nav style={{ margin: '0 auto' }}>
        //             <Nav.Link as={ Link } to="/popularClips">Popular Clips</Nav.Link>
        //             <Nav.Link as={ Link } to="/browseclips">Browse By Game</Nav.Link>
        //             <Search />
        //         </Nav>
        //         <Nav style={{ marginRight: '10px' }}>
        //             <Nav.Link as={ Link } to="/clipupload">Upload</Nav.Link>
        //             <Nav.Link href={`/${ currentUser.userName }`}>Profile</Nav.Link>
        //             <NavDropdown alignRight title={ element } id="basic-nav-dropdown">
        //                 <NavDropdown.Item as={ Link } to="/accounts">
        //                     Settings
        //                 </NavDropdown.Item>
        //                 <NavDropdown.Item onClick={ () => userLogout(currentUserId) }>
        //                     Logout
        //                 </NavDropdown.Item>
        //             </NavDropdown>
        //         </Nav>
        //     </Navbar.Collapse>
        // </Navbar>
    );

    return (
        <>
            { currentUserId ? authLinks : links }
        </>
    );
};

const mapStateToProps = (state: ReduxState) => {
    return {
        currentUser: state.userReducer.currentUser
    };
};

export default connect(mapStateToProps, { userLogout })(NavBarComponent);
