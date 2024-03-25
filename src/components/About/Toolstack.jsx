import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaFigma, FaLinux } from "react-icons/fa6";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiMicrosoftexcel,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftexcel />
      </Col>
    </Row>
  );
}

export default Toolstack;
