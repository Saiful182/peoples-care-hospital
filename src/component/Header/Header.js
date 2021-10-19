import React from 'react';
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import logo from '../../Images/logo.svg'
import './header.css';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
                <Container className="navbar">
                    <Nav>

                        <img src={logo} style={{ margin: "10px", height: "40px", width: "40px" }} alt="" />
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <NavLink href="/">Home</NavLink>
                            <NavLink href="/services">Services</NavLink>
                            <NavLink href="/othersfecilities">Others Facilities</NavLink>
                            <NavLink href="/consultant">Consultants</NavLink>
                            <NavLink href="/about">About</NavLink>
                        </Navbar.Collapse>
                    </Nav>

                    <Nav>
                        <NavLink className="nav-login" href="/login">Login</NavLink>
                    </Nav>
                </Container>
            </Navbar >



        </div >
    );
};

export default Header;