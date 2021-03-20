import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import './navbar.css';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { Link } from 'react-router-dom';
// import {
//     Link
//   } from "react-router-dom";


const NAVBAR = () => {
    return (
    <Navbar container bg="dark" variant="dark">
        <Container>
            <NavbarBrand to="#home">Riders Share</NavbarBrand>
            <NavbarCollapse className="justify-content-md-end">
                <Nav className="me-auto">
                    <Link className="pr-5" to="/home">Home</Link>
                    <Link className="pr-5" to="/destination">Destination</Link>
                    <Link className="pr-5" to="/blog">Blog</Link>
                    <Link className="pr-5" to="/Contract">Contract</Link>
                </Nav>
                <Link to="login" className="btn btn-outline-success" >Login</Link>
            </NavbarCollapse>
        </Container>
    </Navbar>
    );
};

export default NAVBAR;