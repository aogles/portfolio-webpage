import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logo from "../Images/logo.png";

function Header() {
  return (
    <div className="header">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <div>
            <a href="/" className="header-logo" id="header-logo">
              <img
                className="header-logo"
                src={require("../Images/logo.png")}
                alt="home"
              />
            </a>
          </div>
          <Nav className="header-links" id="header-links">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/work">Work</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
