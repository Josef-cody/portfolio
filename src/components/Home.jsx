import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col, Card, Button } from "react-bootstrap";
import TopBar from "./partials/topBar";
import Footer from "./partials/footer";
import SocialMedia from "./partials/socialMedia";
import Ability from "./partials/ability";
function Home() {
  return (
    <>
      <div>
        <header>
          <TopBar />
        </header>
        <Container>
          <Row className="heroText">
            <Col lg={6} sm={12}>
              <h4 className="Hi"><span>Hi!</span></h4>
            </Col>
            <Col lg={6} sm={12}>
              <h5 className="selfPresentation">
                <span>I am Josef, a self taught front-end / fullstack developer with graphic
                designer background.</span>
              </h5>
            </Col>
          </Row>
          <Ability />
          <Container>
            <Row className="m-auto" id="projects">
              <Col lg={12}>
                <div className="socialButtonLeft">
                  <SocialMedia />
                </div>
                <Col>
                  <Row>
                  <Col md={6}>
                    <Card style={{ transform: "scale(0.85)" }}>
                      <Card.Img variant="top" src="./imgs/kitchaid.png" alt="kitchaid"/>
                      <Card.Body>
                        <Card.Title>Kitchaid.se</Card.Title>
                        <Card.Text>
                          Kitchaid is a kitchen app for help professional school
                          kitchens. This is a MERN fullStack app, backend hosted at Heroku server.
                          Test it out with [Tierp kommun, username: TestP], [PW: testp2023].
                        </Card.Text>
                        <a href="https://kitchaid.se">
                          <Button variant="warning">Kitchaid.se</Button>
                        </a>
                        <a href="https://github.com/Josef-cody/kitchaid.git">
                          <Button className="ms-2" variant="warning">
                            Github
                          </Button>
                        </a>
                      </Card.Body>
                    </Card>
                  </Col>
                    <Col md={6}>
                      <Card style={{ transform: "scale(0.85)" }}>
                        <Card.Img variant="top" src="imgs/ecommerce.jpg" />
                        <Card.Body>
                          <Card.Title>E-commerce site</Card.Title>
                          <Card.Text>
                            E-commerce site, Still building the buying functions, more functions on the way.<br /><br /><br />
                          </Card.Text>
                          <a href="https://myfashionstyle.netlify.app">
                            <Button variant="warning">Check demo</Button>
                          </a>
                          <a href="https://github.com/Josef-cody/myfashionstyle">
                            <Button className="ms-2" variant="warning">Github</Button>
                          </a>
                        </Card.Body>
                      </Card>
                    </Col>

                    <Col md={6}>
                      <Card style={{ transform: "scale(0.85)" }}>
                        <Card.Img variant="top" src="imgs/kosten.png" />
                        <Card.Body>
                          <Card.Title>Tierpskommun kostenheten</Card.Title>
                          <Card.Text>
                            This is website designed for my current work place, Tierpskommun kostenheten.
                            Based on Bootstrap 5 and little Vanilla javascript.<br /><br />
                          </Card.Text>
                          <a href="https://josef-cody.github.io/kosten/">
                            <Button variant="warning">Check me out</Button>
                          </a>
                          <a href="https://github.com/Josef-cody/kosten.git">
                            <Button className="ms-2" variant="warning">Github</Button>
                          </a>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={6}>
                      <Card style={{ transform: "scale(0.85)" }}>
                        <Card.Img variant="top" src="imgs/diceeGame.png" />
                        <Card.Body>
                          <Card.Title>Dicee Game</Card.Title>
                          <Card.Text>
                            Who wins next round? Just throw the dicee. Vanilla
                            Javascript project.
                          </Card.Text>
                          <a href="https://josef-dicee-game.netlify.app">
                            <Button variant="warning">Good luck</Button>
                          </a>
                          <a href="https://github.com/Josef-cody/dicee_game.git">
                            <Button className="ms-2" variant="warning">Github</Button>
                          </a>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Card style={{ transform: "scale(0.85)" }}>
                        <Card.Img variant="top" src="imgs/drumkit.png" />
                        <Card.Body>
                          <Card.Title>Drum kit</Card.Title>
                          <Card.Text>
                            Feel some rock and roll, try this drumkit, control
                            with keyboard or mouse. Vanilla Javascript project.<br /><br /><br />
                          </Card.Text>
                          <a href="https://josef-drum-kit.netlify.app">
                            <Button variant="warning">Make some noise</Button>
                          </a>
                          <a href="https://github.com/Josef-cody/Drum-kit.git">
                            <Button className="ms-2" variant="warning">Github</Button>
                          </a>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={6}>
                      <Card style={{ transform: "scale(0.85)" }}>
                        <Card.Img variant="top" src="imgs/simonGame.png" />
                        <Card.Body>
                          <Card.Title>Simon Game</Card.Title>
                          <Card.Text>
                            Want to test your memory capacity, this game will be
                            the best way to do it. Just follow the pattern and
                            challenge yourself(Only on PC). Vanilla Javascript project.
                          </Card.Text>
                          <a href="https://josef-simon-game.netlify.app">
                            <Button variant="warning">How good you are?</Button>
                          </a>
                          <a href="https://github.com/Josef-cody/simon_game.git">
                            <Button className="ms-2" variant="warning">Github</Button>
                          </a>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Card style={{ transform: "scale(0.85)" }}>
                        <Card.Img variant="top" src="imgs/freecodecamp.png" />
                        <Card.Body>
                          <Card.Title>Free Code Camp</Card.Title>
                          <Card.Text>
                            Responsive web design certification.<br /><br />
                          </Card.Text>
                          <a href="https://freecodecamp.org/certification/YusupjanAbliz/responsive-web-design">
                            <Button variant="warning">Verify this certification</Button>
                          </a>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={6}>
                      <Card style={{ transform: "scale(0.85)" }}>
                        <Card.Img variant="top" src="imgs/udemy.jpeg" />
                        <Card.Body>
                          <Card.Title>Udemy web developer bootcamp</Card.Title>
                          <Card.Text>
                          Udemy web developer bootcamp 2023.<br /><br />
                          </Card.Text>
                          <a href="http://ude.my/UC-e4024de4-a507-4853-bdd6-e04f2726cd38">
                            <Button variant="warning">Verify this certification</Button>
                          </a>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Col>
            </Row>
            <Row>
              <Row>

              </Row>
            </Row>
          </Container>
          <Footer />

        </Container>
      </div>
    </>
  );
}

export default Home;
