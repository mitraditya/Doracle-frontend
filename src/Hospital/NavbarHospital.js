import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'

const NavbarHospital = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/hospital/displaypatients">Doracle</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/hospital/displaypatients">Display Patients</Nav.Link>
            <Nav.Link href="/hospital/addpatient">Add New Patient</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarHospital