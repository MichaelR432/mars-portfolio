import { Card, Row, Col } from "react-bootstrap";
import "./style.css";
import AboutSection from "../AboutSection/AboutSection";
import riddle from "../../assets/riddleMeThis.png";
import myTeam from "../../assets/trackMyTeam.png";
import weather from "../../assets/weather.png";

export default function MyWork() {
  return (
    <section className="jumboContainer1 container">
      <AboutSection />
      <div className="container">
        <Row id="mywork" className="headerRow2">
          <h2 className="headerText">Latest Projects</h2>
        </Row>
      </div>
      <div className="container">
        <Row className="workRow">
          <Col>
            <Card>
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Title>Riddle Me This</Card.Title>
                  </Col>
                  <Col>
                    <i class="fab fa-js-square fa-2x miniIcon"></i>
                  </Col>
                  <Col>
                    <i class="fab fa-envira fa-2x miniIcon"></i>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Img
                fluid
                src={riddle}
                aria="Riddle Me This Image"
                className="workImg"
              />
              <Card.Body>
                <Card.Text>
                  A riddle game made with MySQL and Handlebars. Using riddles
                  from the movie Batman. A fun riddle game that can support
                  problem solving, logic and critical thinking skills.
                </Card.Text>
                <a
                  className="workBtn"
                  variant="primary"
                  href="https://morning-sierra-98445.herokuapp.com/"
                >
                  View App
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Title>Team Generator</Card.Title>
                  </Col>
                  <Col>
                    <i class="fab fa-js-square fa-2x miniIcon"></i>
                  </Col>
                  <Col>
                    <i class="fab fa-envira fa-2x miniIcon"></i>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Img
                fluid
                src={myTeam}
                aria="Track My Team Image"
                className="workImg"
              />
              <Card.Body>
                <Card.Text>
                  A command line app made from Express and Javascript. Maintain
                  a employee database that manages team contact information and
                  have a webpage generated at launch.
                </Card.Text>
                <a
                  className="workBtn"
                  variant="primary"
                  href="https://github.com/MichaelR432/generate-my-team"
                >
                  View App
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "20 rem" }}>
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Title>Weather Forecast</Card.Title>
                  </Col>
                  <Col>
                    <i class="fab fa-js-square fa-2x miniIcon"></i>
                  </Col>
                  <Col>
                    <i class="fab fa-bootstrap fa-2x miniIcon"></i>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Img
                fluid
                src={weather}
                aria="Weather App Image"
                className="workImg"
              />
              <Card.Body>
                <Card.Text>
                  A Javascript application that displays a five day weather
                  forecast. Calling the open weather api, search for a city and
                  have the weekly weather display.
                </Card.Text>
                <a
                  className="workBtn"
                  variant="primary"
                  href="https://michaelr432.github.io/weather-or-not-dashboard/"
                >
                  View App
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
}
