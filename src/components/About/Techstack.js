import React from "react";
import { Col, Row } from "react-bootstrap";
import {
 
  DiPython,
  DiJava,
} from "react-icons/di";
import { SiApachemaven,  } from "react-icons/si";
import {  } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
    
      <Col xs={4} md={2} className="tech-icons">
        <SiApachemaven />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
    </Row>
  );
}

export default Techstack;
