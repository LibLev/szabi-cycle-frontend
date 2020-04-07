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
                        <NavDropdown title="Termékek" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/bicycles">Kerékpárok</NavDropdown.Item>
                            <NavDropdown.Item href="/components">Alkatrészek</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/connection">Kapcsolat</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar;