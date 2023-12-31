import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import { useSelector } from "react-redux";
import { Row, Col } from "reactstrap";

const AppLayout = ({ children }) => {
  const appColor = useSelector((state) => state.app.bgColor);
  const brand = useSelector((state) => state.app.logo);

  const layoutStyle = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: appColor || "#f3f6f4",
  };

  const headerStyle = {
    flex: "0 0 auto", // Fixed header at the top
  };

  const mainStyle = {
    flex: "1", // Allow main content to grow and take remaining space
    padding: "20px", // Adjust the padding as needed
  };

  const footerStyle = {
    flex: "0 0 auto", // Fixed footer at the bottom
  };

  const links = [
    { to: "/", label: "Home" },
    { to: "/register", label: "Register" },
    { to: "/applist", label: "App List" },
    { to: "/detail", label: "Detail" },
  ];

  const footerContent = <p>&copy; 2023 GEMS. All rights reserved.</p>;

  return (
    <div style={layoutStyle}>
      <header style={headerStyle}>
        <Header brand={brand} links={links} />
      </header>
      <main className="container" style={mainStyle}>
        <Row>
          {React.Children.map(children, (child, index) => (
            <Col key={index} xs="12">
              {child}
            </Col>
          ))}
        </Row>
      </main>
      <footer style={footerStyle}>
        <Footer content={footerContent} />
      </footer>
    </div>
  );
};

export default AppLayout;
