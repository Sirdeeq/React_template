import React from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = ({ content, bgColor }) => {
  const footerStyle = {
    backgroundColor: bgColor || "#A78BFA"
  };

  return (
    <footer style={footerStyle} className="text-white">
      <Container>
        <Row>
          <Col>{content}</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
