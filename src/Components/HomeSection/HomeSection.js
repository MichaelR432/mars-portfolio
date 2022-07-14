import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from "react-bootstrap";
import "./style.css";
import ramos from "../../assets/mramosprofile2.png";

export default function HomeSection() {
  return (
      <section id="#home" className="jumboContainer container">
        <div className="boxContainer">
        <div className="flexyBox imgBox">
              <Image
                fluid
                src={ramos}
                // src={process.env.PUBLIC_URL + "/assets/cflorespic.png"}
                aria="Michael Ramos Image"
                className="profileImg"
              />

          </div>
          <div className="flexyBox">
            <h1 className="header">Hello World</h1>
            <h3 className="subHeader">I am a Full Stack Developer.</h3>
            <br/>
            <a href="#mywork">
              <button className="creationBtn">MY WORK</button>
            </a>
          </div>
        </div>
      </section>
  );
}
