import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TopBar from "./partials/topBar";
import Card from "react-bootstrap/Card";
import SideBar from "./partials/sideBar";
import Footer from "./partials/footer";
import Language from "./partials/language";
import Ability from "./partials/ability";
import SocialMedia from "./partials/socialMedia";
function Resume() {
  return (
    <>
      <div>
        <header>
          <TopBar />
        </header>
        <Container>
          <Row className="ml-auto">
            <Col className="homePageSidebar" lg={4}>
              <SideBar />
            </Col>
            <Col className="homePageSection" lg={8}>
              <div className="socialMediaRight">
                <SocialMedia />
              </div>
              <Col>
                <Row>
                  <Col md={8}>
                    <Card className="mt-2">
                      <Card.Header as="h5">Who am I ?</Card.Header>
                      <Card.Body>
                        <Card.Text style={{ fontSize: "13px",textAlign: "justify" }}>
                          Hello, this is Josef, an aspired front_end computer
                          programmer as well as a graphic designer focused on UI
                          and UX. I taught myself photography, image
                          manipulation/editing, filming and now front-end UI/UX
                          and MERN fullStack(including javascript, Node.js,
                          React.js). Although my background is in mechanical
                          engineering, I’ve been passionate about designing and
                          creating beautiful and functional websites and pages
                          for a long time. To work and excel in this field is my
                          dream. I'm looking for an internship in the design
                          field from filmmaker, graphic designer to frontend
                          UI/UX or junior web dev. Do not hesitate to contact me
                          if you think I am a designer material. Thanks so much.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Language />
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Ability />
                </Row>
              </Col>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div>
                <footer>
                  <Footer />
                </footer>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Resume;
