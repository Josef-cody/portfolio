import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ContactForm from "../conactForm";
function TopBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement={"bottom"}
        className="Offcanvas"
        style={{ height: "450px" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>What took you so long?</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ContactForm />
        </Offcanvas.Body>
      </Offcanvas>
      <Navbar className="navBarTop" expand="lg" variant="light" fixed="top">
        <Container>
          <div className="nameStamp">
            <Navbar.Brand href="/home">
              <h3>Josef.Abliz</h3>
            </Navbar.Brand>
            <Navbar.Brand href="/home">
              <h6>Junior Web dev</h6>
            </Navbar.Brand>
          </div>
          <div className="contactMe">
            <Button className="contactMe" onClick={handleShow}>
              <i class="fa-solid fa-truck-fast"></i>
              Contact me
            </Button>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="navBarItems">
            <Nav className="ml-auto  navBarButton">
              <Nav.Link href="/">
                <i class="fa-solid fa-house-user"></i> Home
              </Nav.Link>
              <Nav.Link href="/resume">
                <i class="fa-solid fa-file-lines"></i> Resume
              </Nav.Link>
              <Nav.Link href="/projects">
              <i class="fa-solid fa-diagram-project"></i> Projects
              </Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default TopBar;
