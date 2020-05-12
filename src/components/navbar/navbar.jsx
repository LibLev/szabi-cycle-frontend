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
                            <NavDropdown.Item href="/bicycles/road">Országúti</NavDropdown.Item>
                            <NavDropdown.Item href="/bicycles/cx">Cyclecross</NavDropdown.Item>
                            <NavDropdown.Item href="/bicycles/gravel">Gravel</NavDropdown.Item>
                            <NavDropdown.Item href="/bicycles/city">City</NavDropdown.Item>
                            <NavDropdown.Item href="/bicycles/trekking">Trekking</NavDropdown.Item>
                            <NavDropdown.Item href="/bicycles/track">Pálya</NavDropdown.Item>
                            <NavDropdown.Item href="/bicycles/mtb">MTB</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Alkatrészek" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/components/handlebar">Kormány</NavDropdown.Item>
                            <NavDropdown.Item href="/components/bartape">Markolat/Bandázs</NavDropdown.Item>
                            <NavDropdown.Item href="/components/calliper">Fékkar/Váltókar</NavDropdown.Item>
                            <NavDropdown.Item href="/components/break">Fék</NavDropdown.Item>
                            <NavDropdown.Item href="/components/shifter">Váltó</NavDropdown.Item>
                            <NavDropdown.Item href="/components/crankset">Hajtás</NavDropdown.Item>
                            <NavDropdown.Item href="/components/wheel">Kerék</NavDropdown.Item>
                            <NavDropdown.Item href="/components/saddle">Nyereg</NavDropdown.Item>
                            <NavDropdown.Item href="/components/stem">Krományszár</NavDropdown.Item>
                            <NavDropdown.Item href="/components/seatpost">Nyeregcső</NavDropdown.Item>
                            <NavDropdown.Item href="/components/frame">Váz</NavDropdown.Item>
                            <NavDropdown.Item href="/components/fork">Villa</NavDropdown.Item>
                            <NavDropdown.Item href="/components/groupset">Szett</NavDropdown.Item>
                            <NavDropdown.Item href="/components/pedal">Pedál</NavDropdown.Item>
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