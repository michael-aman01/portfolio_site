import React from "react";
import "./custom.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Collapse, Row, Col, NavDropdown, Logo} from "react-bootstrap";
export default function Navigation(){
    return (
        <>
        <div className="nav-container">

        <Container>
        <Navbar collapseOnSelect expand="lg"  variant="dark">
      <Navbar.Brand href="#home">
            Michael Aman
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#projects">LinkedIn</Nav.Link>
          <Nav.Link>Github</Nav.Link>
        </Nav>

      </Navbar.Collapse>
    </Navbar>

        </Container>
        </div>



 
        </>
    )
}