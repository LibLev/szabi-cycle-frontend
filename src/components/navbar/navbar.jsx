import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

class NavBar extends Component {

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/home">SzabiCycle</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Kerékpárok" id="basic-nav-dropdown">
                            <NavDropdown.Item href="">Országúti</NavDropdown.Item>
                            <NavDropdown.Item href="">Cyclecross</NavDropdown.Item>
                            <NavDropdown.Item href="">Gravel</NavDropdown.Item>
                            <NavDropdown.Item href="">City</NavDropdown.Item>
                            <NavDropdown.Item href="">Trekking</NavDropdown.Item>
                            <NavDropdown.Item href="">Pálya</NavDropdown.Item>
                            <NavDropdown.Item href="">MTB</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Alkatrészek" id="basic-nav-dropdown">
                            <NavDropdown.Item href="">Kormány</NavDropdown.Item>
                            <NavDropdown.Item href="">Markolat/Bandázs</NavDropdown.Item>
                            <NavDropdown.Item href="">Fékkar/Váltókar</NavDropdown.Item>
                            <NavDropdown.Item href="">Fék</NavDropdown.Item>
                            <NavDropdown.Item href="">Váltó</NavDropdown.Item>
                            <NavDropdown.Item href="">Hajtás</NavDropdown.Item>
                            <NavDropdown.Item href="">Kerék</NavDropdown.Item>
                            <NavDropdown.Item href="">Nyereg</NavDropdown.Item>
                            <NavDropdown.Item href="">Krományszár</NavDropdown.Item>
                            <NavDropdown.Item href="">Nyeregcső</NavDropdown.Item>
                            <NavDropdown.Item href="">Váz</NavDropdown.Item>
                            <NavDropdown.Item href="">Villa</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/connection">Kapcsolat</Nav.Link>
                        <Nav.Link href="/about">Rólunk</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar;