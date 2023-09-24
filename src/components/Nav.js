import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <Navbar bg="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                    alt=""
                    src="/logo.jpg"
                    width="40"
                    height="30"
                    className='d-inline-block align-top'
                    />{' '}
                    Music Festivals
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">About</Nav.Link>
                        <Nav.Link href="#Link">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    );
}

export default NavBar;