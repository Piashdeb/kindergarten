import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container className="text-white"  style={{fontWidth:'100px',}}>
                <Navbar.Brand to="/home"><h2 className="text-light">Kinder<span style={{ color: 'yellow' }}>Garten</span>  </h2></Navbar.Brand>
                <Nav className="text-white ml-auto">
                    <NavLink style={{textDecoration:"none"}} className="text-white mx-5" to="/home">Home</NavLink><br />
                    <NavLink style={{textDecoration:"none"}} className="text-white mx-5" to="/services">Service</NavLink>
                    <NavLink style={{textDecoration:"none"}} className="text-white mx-5" to="/about">About</NavLink>
                    <NavLink style={{textDecoration:"none"}} className="text-white mx-5" to="/Events">Events</NavLink>
                    <NavLink style={{textDecoration:"none"}} className="text-white mx-5" to="/login">Login</NavLink>

                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;