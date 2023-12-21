import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse
} from "reactstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = ({ brand, links }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const appColor = useSelector((state) => state.app.bgColor);

  const navbarStyle = {
    backgroundColor: appColor || "#A78BFA"
  };

  return (
    <Navbar style={navbarStyle} dark expand="md">
      <NavbarBrand href="/">{brand}</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          {links.map((link, index) => (
            <NavItem key={index}>
              <NavLink tag={Link} to={link.to}>
                {link.label}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
