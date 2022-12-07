import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TopBar from "./partials/topBar";
import SlideShow from "./partials/slideShow";
import SideBar from "./partials/sideBar";
import Footer from "./partials/footer";
import SocialMedia from "./partials/socialMedia";
function Home() {
  return (
    <>
      <div>
        <header>
          <TopBar />
        </header>
        <Container>
          <Row className="ml-auto mainBody">
            <Col className="homePageSectionMain" lg={8}>
              <Col>
                <div className="socialButtonLeft">
                  <SocialMedia />
                </div>
                <Row>
                  <SlideShow />
                </Row>
                <Row>
                  <Col lg={12}>
                    <h4 className="mt-5">Hi!</h4>
                    <h5 className="selfPresentation mb-1">
                      Hello, this is Josef, an aspired front_end computer
                      programmer as well as a graphic designer focused on UI and
                      UX. I taught myself photography, image
                      manipulation/editing, filming and now front-end UI/UX and
                      MERN fullStack(including javascript, Node.js, React.js).
                      Although my background is in mechanical engineering, I’ve
                      been passionate about designing and creating beautiful and
                      functional websites and pages for a long time. To work and
                      excel in this field is my dream. I'm looking for an
                      internship in the design field from filmmaker, graphic
                      designer to frontend UI/UX or junior web dev. Do not
                      hesitate to contact me if you think I am a designer
                      material. Thanks so much.
                    </h5>
                  </Col>
                </Row>
              </Col>
            </Col>
            <Col className="homePageSidebar" lg={4}>
              <SideBar />
            </Col>
            <Footer />
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;
