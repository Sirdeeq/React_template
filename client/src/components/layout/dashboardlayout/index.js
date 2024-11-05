import React from "react";
import { Container, Row, Col } from "reactstrap";
import Sidebar from "../../view/Sidebar";
import Header from "../../Header";
import Footer from "../../Footer";
import { useSelector } from "react-redux";

const DashboardLayout = ({ children }) => {
  const appColor = useSelector((state) => state.app.bgColor);
  const brand = useSelector((state) => state.app.logo);

  const layoutStyle = {
    backgroundColor: appColor || "#f3f6f4",
    minHeight: "100vh",
    paddingTop: "0",
    paddingBottom: "0",
  };

  const links = [{ to: "/", label: "Home" }];

  const footerContent = <p>&copy; 2023 GEMS. All rights reserved.</p>;
  return (
    <Container fluid style={layoutStyle}>
      <Row>
        <Header brand={brand} links={links} />
      </Row>
      <Row>
        <Col sm={3}>
          <Sidebar />
        </Col>
        <Col sm={9}>
          <main>{children}</main>
        </Col>
      </Row>
      <Row>
        <Footer content={footerContent} />
      </Row>
    </Container>
  );
};

export default DashboardLayout;
