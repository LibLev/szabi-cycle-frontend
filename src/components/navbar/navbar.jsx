import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

class NavBar extends Component {


    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/home">Szabi Cycle</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/bicycles">Kerékpárok</Nav.Link>
                        <NavDropdown title="Alkatrészek" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Kormányok</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Fékek</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Fékkarok</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Hajtások</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Nyergek</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Váltók</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/connection">Kapcsolat</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar;