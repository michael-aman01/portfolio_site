import React from "react";
import "./custom.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Collapse, Row, Col, NavDropdown, Logo} from "react-bootstrap";
import { useHistory } from "react-router-dom";
export default function Navigation(){
  const history = useHistory()
  const links = {
    "github": "https://github.com/michael-aman01",
    "linkedin": "https://www.linkedin.com/in/maman1/"
  }
  const handleNavClick = e => {
    e.preventDefault()
    if(e.target.id in links){
      window.open(links[e.target.id],"_blank")
    }else{
      history.push(e.target.id)
    }
  }

    return (
        <>
        <div className="nav-container">

        <Container>
        <Navbar collapseOnSelect expand="lg"  variant="dark">
      <Navbar.Brand>
            Michael Aman
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={handleNavClick} id="about">About</Nav.Link>
          <Nav.Link onClick={handleNavClick} id="projects">Projects</Nav.Link>
          <Nav.Link onClick={handleNavClick} id="linkedin">LinkedIn</Nav.Link>
          <Nav.Link onClick={handleNavClick} id="github">Github</Nav.Link>
        </Nav>

      </Navbar.Collapse>
    </Navbar>

        </Container>
        </div>



 
        </>
    )
}