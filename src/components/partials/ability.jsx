import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "react-circular-progressbar/dist/styles.css";

function Ability() {
  return (
    <>
      <div>
        <Container className="mt-2">
          <Col>
            <Row className="ml-auto">
              <Col lg={6}>
                <div>
                  <div className="abilityTitle">
                    <i class="fa-solid fa-circle-notch sideBarIcon"></i>&nbsp;
                    Education
                  </div>
                  <div className="mt-4 myDetail abilityParcials card">
                    <table className="myTable">
                      <tbody>
                        <tr>
                          <td colSpan={2}>&nbsp;Web dev bootcamp</td>
                          <td style={{ textAlign: "end" }}>Udemy</td>
                        </tr>
                        <tr>
                          <td colSpan={2}>&nbsp;Web dev self-tought</td>
                          <td style={{ textAlign: "end" }}>least 3 hours/day</td>
                        </tr>
                        <tr>
                          <td colSpan={2}>&nbsp; Cook education</td>
                          <td style={{ textAlign: "end" }}>Lernia i Gävle</td>
                        </tr>
                        <tr>
                          <td colSpan={2}>&nbsp; University</td>
                          <td style={{ textAlign: "end" }}>
                            Dalian University of technology
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div>
                  <div className="abilityTitle">
                    <i class="fa-solid fa-circle-notch sideBarIcon"></i>&nbsp;
                    Language ability
                  </div>
                  <div className="mt-4 myDetail abilityParcials card">
                    <table className="myTable">
                      <tbody>
                        <tr>
                          <td colSpan={2}>&nbsp; Swedish</td>
                          <td style={{ textAlign: "end" }}>
                            Good
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={2}>&nbsp; English</td>
                          <td style={{ textAlign: "end" }}>
                            Good
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={2}>&nbsp; French</td>
                          <td style={{ textAlign: "end" }}>
                            Com si com ça
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={2}>&nbsp; Chinese</td>
                          <td style={{ textAlign: "end" }}>
                            One of mother tongue
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="ml-auto">
              <Col className="mt-2" lg={6}>
                <div>
                  <div className="abilityTitle mb-3">
                    <i class="fa-solid fa-circle-notch sideBarIcon"></i>&nbsp;
                    Design Skill
                  </div>
                  <div className="myDetail  abilityParcials card">
                    <table className="myTable">
                      <tbody>
                        <tr>
                          <td colSpan={2}>
                            <i class="fa-solid fa-circle-dot sideBarIcon"></i>{" "}
                            Photoshop
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={2}>
                            <i class="fa-solid fa-circle-dot sideBarIcon"></i>{" "}
                            CorelDRAW
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={2}>
                            <i class="fa-solid fa-circle-dot sideBarIcon"></i>{" "}
                            Finalcut
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={2}>
                            <i class="fa-solid fa-circle-dot sideBarIcon"></i>{" "}
                            Aftereffect
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Col>
              <Col className="mt-2" lg={6}>
                <div>
                  <div className="abilityTitle mb-3">
                    <i class="fa-solid fa-circle-notch sideBarIcon"></i>&nbsp;
                    Dev Skill
                  </div>
                  <Container className="card  abilityParcials mb-5 pb-3">
                    <Row className="pt-3">
                      <Col lg={6}>
                        <div>
                          <i class="fa-brands fa-html5 sideBarIcon"></i>
                          &nbsp; HTML 5
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div>
                          <i class="fa-brands fa-css3 sideBarIcon"></i>
                          &nbsp; CSS 3
                        </div>
                      </Col>
                    </Row>
                    <Row className="pt-3">
                      <Col lg={6}>
                        <div>
                          <i class="fa-brands fa-square-js sideBarIcon"></i>
                          &nbsp; Javascript
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div>
                          <i class="fa-brands fa-bootstrap sideBarIcon"></i>
                          &nbsp; Bootstrap
                        </div>
                      </Col>
                    </Row>
                    <Row className="pt-3">
                      <Col lg={6}>
                        <div>
                          <i class="fa-brands fa-node-js sideBarIcon"></i>
                          &nbsp; Node.js
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div>
                          <i class="fa-brands fa-react sideBarIcon"></i>
                          &nbsp; React.js
                        </div>
                      </Col>
                    </Row>
                    <Row className="pt-3">
                      <Col lg={6}>
                        <div>
                          <i class="fa-solid fa-database sideBarIcon"></i>
                          &nbsp; Mongodb
                        </div>
                      </Col>

                    </Row>
                  </Container>
                </div>
              </Col>
            </Row>
          </Col>
        </Container>
      </div>
    </>
  );
}

export default Ability;
