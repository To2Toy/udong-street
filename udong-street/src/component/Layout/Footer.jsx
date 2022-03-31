import React from "react";
import Badge from "./atom/Badge";
import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
  return (
    <Container fluid className="footer">
      <Row className="justify-content-md-between">
        <Col sm="9">© 튀김우동과 유부우동</Col>
        <Col sm="auto">
          <Badge where="github" />
          <Badge where="instagram" />
          <Badge where="email" />
          </Col>
      </Row>
    </Container>
  );
};
export default Footer;
