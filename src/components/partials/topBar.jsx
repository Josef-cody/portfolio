import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import FileDownloadCV from './FileDownload-CV'
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
        <div className="topbar-container">
          <div className="nameStamp">
            <Navbar.Brand href="/home">
              <h3>Josef.Abliz</h3>
            </Navbar.Brand>
            <Navbar.Brand href="/home">
              <h6>Junior Web dev</h6>
            </Navbar.Brand>
            <Navbar.Brand href="/home" className="ms-1">
            <FileDownloadCV />
            </Navbar.Brand>
          </div>
          <picture className="cardImg">
            <img
              className="myImg"
              variant="top"
              src="imgs/me2.png"
              alt="myImage"
            />
          </picture>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="navBarItems">
            <Nav className="ml-auto navBarButton">
              <Nav.Link href="#projects" className="text-light">
                <i class="fa-solid fa-diagram-project me-2"></i> Projects
              </Nav.Link>
            </Nav>
            <Nav className="ms-3">
            <Nav.Link className="contactMe" onClick={handleShow}>
              <i class="fa-solid fa-truck-fast"></i>
              Contact me
            </Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default TopBar;
