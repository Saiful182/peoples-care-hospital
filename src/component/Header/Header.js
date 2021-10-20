
import React from 'react';
import { Button, Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.svg'
import useAuth from '../hooks/useAuth';
import './header.css';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
                <Container className="navbar">
                    <Nav>

                        <img src={logo} style={{ margin: "10px", height: "40px", width: "40px" }} alt="" />
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <NavLink as={Link} to="/">Home</NavLink>
                            <NavLink as={Link} to="/services">Services</NavLink>
                            <NavLink as={Link} to="/othersfecilities">Others Facilities</NavLink>
                            <NavLink as={Link} to="/consultants">Consultants</NavLink>
                            <NavLink as={Link} to="/about">About</NavLink>
                        </Navbar.Collapse>
                    </Nav>

                    <Nav>
                        <NavLink as={Link} className="nav-login" to="/login">Login</NavLink>

                        {
                            user.email && <NavLink> Hi {user.displayName}</NavLink>
                        }

                        {
                            user.email && <NavLink onClick={logout}>Logout</NavLink>
                        }

                    </Nav>
                </Container>
            </Navbar >



        </div >
    );
};

export default Header;