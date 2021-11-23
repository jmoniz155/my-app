import React from "react";
import "../styles/style.css";
import { Container, Row, Col } from "react-bootstrap";
import html from "./html.png";
import css3 from "./css3.png";
import javascript from "./javascript.png";
import jquery from "./jquery.png";
import node from "./node.png";
import github from "./github.png";
import mongodb from "./mongodb.png";
import bootstrap from "./bootstrap.png";
import headshot from "./jm.jpg"

const About = () => (
  <Container fluid="md" className="container">
    <div className="name">
      <Row className="row">
        <div className="col-md-6">
          <section>
            <h1 style={{ fontSize: 75 }}>Jesse Moniz</h1>
          
          </section>
 
        </div>
        <div className="col-md-6">
        <img className="logo headLogo" src={headshot} alt="gears" width="120px" border-radius="50%"/>
          <div className="img-cropper"></div>
        </div>
      </Row>
    </div>
    <Row className="row">
      <Col>
        
          <Container>
          <Row className="icons" md={6}>
            <img className="logo techLogo" src={html} alt="html logo" width="80%" />
            <img className="logo techLogo" src={css3} alt="css3" width="80%" />
            <img className="logo techLogo" src={javascript} alt="javascript" width="80%" />
            <img className="logo techLogo" src={jquery} alt="gears" width="80%" />
            <img className="logo techLogo" src={node} alt="node" width="80%" />
            <img className="logo techLogo" src={github} alt="github" width="80%" />
            <img className="logo techLogo" src={mongodb} alt="mongodb" width="80%" />
            <img className="logo techLogo" src={bootstrap} alt="bootstrap" width="80%" />
          </Row>
          </Container>
       
      </Col>
      <div className="col-md-5">
        <section>
          <p style={{ textAlign: "center", marginTop: 50, marginRight: 50 }}>
            A full stack developer with fifteen years experience in education
            and a background in the arts, ready to deploy strong communication
            skills and a creative thought process to the development cycle.
            Offering five years experience as a detail-oriented small business
            owner dedicated to sustainable customer and peer relationship
            growth. Experienced in MERN stack. Self-directed and enthusiastic
            learner with superior design and analytical skills prepared to join
            a collaborative, innovative team environment.
          </p>
        </section>
      </div>
    </Row>
  </Container>
);

export default About;
