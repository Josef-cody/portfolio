import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col, Card, Button } from "react-bootstrap";
import TopBar from "./partials/topBar";
import Footer from "./partials/footer";
import SocialMedia from "./partials/socialMedia";
import Ability from "./partials/ability";
import projecDB from './partials/projectDB'
function Home() {
  console.log(projecDB)
  return (
    <>
      <div>
        <header>
          <TopBar />
        </header>
        <Container fluid>
          <Row className="heroText mb-4">
            <Col lg={6} sm={12}>
              <h4 className="Hi animate__animated animate__wobble"><span>Hi!</span></h4>
              <h5 className="selfPresentation m-auto">
                <span className="d-block text-center mb-5 animate__animated animate__pulse">I am Josef, a MERN stack developer.</span>
              </h5>
            </Col>
            <Col lg={6} sm={12}>
              <picture>
                <img
                  className="heroImg m-3 animate__animated animate__fadeInRightBig"
                  variant="top"
                  src="imgs/hero-image.jpg"
                  alt="myImage"
                />
              </picture>
            </Col>
          </Row>
          <Row id="ability">
            <Ability />
          </Row>
          <Container>
            <Row className="m-auto" id="projects">
              <Col lg={12}>
                <div className="socialButtonLeft">
                  <SocialMedia />
                </div>
                <Col>
                  <Row>
                    {projecDB?.map((project, index) => {
                      return <>
                        <Col md={6}>
                          <Card style={{ transform: "scale(0.85)", height: '40rem' }} key={index}>
                            <a href={project.url}><Card.Img variant="top" src={project.img_src} alt="kitchaid" /></a>
                            <Card.Body>
                              <Card.Title>{project.name}</Card.Title>
                              <Card.Text>
                                {project.description}
                              </Card.Text>
                            </Card.Body>
                            <Card.Body>
                              <a href={project.url}>
                                <Button variant="warning">{project.button_name}</Button>
                              </a>
                              <a href={project.github}>
                                <Button className="ms-2" variant="warning">
                                  {project.button_git}
                                </Button>
                              </a>
                            </Card.Body>
                          </Card>
                        </Col>
                      </>
                    })}
                  </Row>
                </Col>
              </Col>
            </Row>
          </Container>
          <Footer />

        </Container>
      </div>
    </>
  );
}

export default Home;
