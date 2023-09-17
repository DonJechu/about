import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright text-left"style={{ marginLeft: "-20rem" }}>
          <h3> </h3>
        </Col>
        <Col md="4" className="footer-copywright text-right" style={{ marginLeft: "50rem" }}> {/* Añadido text-right */}
          <h3>All rights reserved to RBY Events ©️ 2022-{year}</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
