import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GenresModal from './Genres/GenresModal';

const NavBar = () => {

    const [showGenres, setShowGenres] = useState(false);

    return (
        <>
            <Navbar className='navbar-bg' variant="dark" expand="md">
                <Container >
                    <Navbar.Brand className='navbar-logo' as={Link} to="/" >
                        <img src="/img/logo.jpg" alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/">Movies</Nav.Link>
                            <Nav.Link as={Link} to="/actors">Actors</Nav.Link>
                            <Nav.Link as={Link} to="/directors">Directors</Nav.Link>
                            <Nav.Link onClick={() => setShowGenres(true)}>Genres</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <GenresModal 
                show={showGenres} 
                handleClose={() => setShowGenres(false)} 
            />
        </>
    );
};

export default NavBar;