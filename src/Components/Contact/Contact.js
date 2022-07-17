import { Row, Col, Image } from "react-bootstrap";
import './style.css'

export default function Contact() {
  return (
    <section className="jumboContainer container box">
      <div className="container">
        <Row >
          <Col className="contactCol" col-xs-12>
            <h3 className="contact" >Let's Connect</h3>
            <p className="contactP">
              I'm always looking for new connections.
            </p>
          </Col>
          <Col className="contactCol1" col-xs-12>
          
          <a href="https://www.linkedin.com/in/michael-ramos-4399aa1a4/" target="_blank" rel="noreferrer noopener">
            <i class="fab fa-linkedin fa-4x contactIcon"></i>
          </a>
          <a href="https://github.com/MichaelR432" target="_blank" rel="noreferrer noopener">
            <i class="fab fa-github fa-4x contactIcon"></i>
          </a>
          <a href="tel:3614254683">
            <i class="fas fa-phone-square fa-4x contactIcon"></i>
          </a>
          
          <a href="mailto:michaelaramos182@gmail.com">
            <i class="fas fa-envelope fa-4x contactIcon"></i>
          </a>
          </Col>
        </Row>
      </div>
    </section>
  );
}
