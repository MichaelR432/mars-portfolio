import { Row, Col } from "react-bootstrap";
import "./style.css";

export default function Overview() {
  return (
    <section className="jumboContainer ">
      <div className="container">
        <Row id="about" className="headerRow">
          <h2 className="headerText">What I do</h2>
        </Row>
      </div>
      <div className="container">
        <Row>
          <Col className="containerCol">
            <Row>
              <i class="fas fa-laptop-code fa-3x workIcon" />
            </Row>
            <Row>
              <h2 className="subText">Full Stack Development</h2>
            </Row>
            <Row>
              <p className="text">
                I work on developing both client and sever software systems. I enjoy working on various stages of the development process and connecting all levels of the dev team.
              </p>
            </Row>
          </Col>
          <Col className="containerCol">
            <Row>
              <i class="fas fa-bug fa-3x workIcon" />
            </Row>
            <Row>
              <h2 className="subText">Diagnostic Testing</h2>
            </Row>
            <Row>
              <p className="text">
                Before entering into tech, I worked as an electrical technician where I developed 
                and document the troubleshooting strategies to detect errors that occur in 
                different machine's systems.
              </p>
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
}
