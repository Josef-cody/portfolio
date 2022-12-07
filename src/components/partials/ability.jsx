import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
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
                    Work History
                  </div>
                  <div className="mt-4 myDetail abilityParcials card">
                    <table className="myTable">
                      <tbody>
                        <tr>
                          <td colSpan={2}>&nbsp; Cook</td>
                          <td style={{ textAlign: "end" }}>
                            Tierp kostenheten
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={2}>&nbsp; Cook</td>
                          <td style={{ textAlign: "end" }}>
                            Knivsta kostenheten
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={2}>&nbsp; Cook</td>
                          <td style={{ textAlign: "end" }}>
                            Knivsta Estrisgård
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={2}>&nbsp; Graphic designer</td>
                          <td style={{ textAlign: "end" }}>
                            Urumqi Vision advertisement
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
                          <td style={{ width: "50%" }}>
                            <div style={{ textAlign: "end" }}>
                              <ProgressBar variant="warning" now={90} />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={2}>
                            <i class="fa-solid fa-circle-dot sideBarIcon"></i>{" "}
                            CorelDRAW
                          </td>
                          <td style={{ width: "50%" }}>
                            <div style={{ textAlign: "end" }}>
                              <ProgressBar variant="warning" now={90} />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={2}>
                            <i class="fa-solid fa-circle-dot sideBarIcon"></i>{" "}
                            Finalcut
                          </td>
                          <td style={{ width: "50%" }}>
                            <div style={{ textAlign: "end" }}>
                              <ProgressBar variant="warning" now={80} />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={2}>
                            <i class="fa-solid fa-circle-dot sideBarIcon"></i>{" "}
                            Aftereffect
                          </td>
                          <td style={{ width: "50%" }}>
                            <div style={{ textAlign: "end" }}>
                              <ProgressBar variant="warning" now={60} />
                            </div>
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
                        <div className="circleProgressbar">
                          <CircularProgressbar
                            text={`65%`}
                            value={65}
                            styles={buildStyles({
                              textColor: "white",
                              pathColor: `rgb(255,200,0)`,
                              trailColor: "gray",
                            })}
                          />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div>
                          <i class="fa-brands fa-css3 sideBarIcon"></i>
                          &nbsp; CSS 3
                        </div>
                        <div className="circleProgressbar">
                          <CircularProgressbar
                            text={`70%`}
                            value={70}
                            styles={buildStyles({
                              textColor: "white",
                              pathColor: `rgb(255,200,0)`,
                              trailColor: "gray",
                            })}
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row className="pt-3">
                      <Col lg={12}>
                        <div>
                        <i class="fa-brands fa-square-js sideBarIcon"></i>
                          &nbsp; Javascript
                        </div>
                        <div className="circleProgressbar">
                          <CircularProgressbar
                            text={`50%`}
                            value={50}
                            styles={buildStyles({
                              textColor: "white",
                              pathColor: `rgb(255,200,0)`,
                              trailColor: "gray",
                            })}
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row className="pt-3">
                      <Col lg={6}>
                        <div>
                          <i class="fa-brands fa-node-js sideBarIcon"></i>
                          &nbsp; Node.js
                        </div>
                        <div className="circleProgressbar">
                          <CircularProgressbar
                            text={`40%`}
                            value={40}
                            styles={buildStyles({
                              textColor: "white",
                              pathColor: `rgb(255,200,0)`,
                              trailColor: "gray",
                            })}
                          />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div>
                          <i class="fa-brands fa-react sideBarIcon"></i>
                          &nbsp; React.js
                        </div>
                        <div className="circleProgressbar">
                          <CircularProgressbar
                            text={`40%`}
                            value={40}
                            styles={buildStyles({
                              textColor: "white",
                              pathColor: `rgb(255,200,0)`,
                              trailColor: "gray",
                            })}
                          />
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
