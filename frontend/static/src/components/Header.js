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
          <Navbar.Brand>
            <a href="/">
              <img src={require("../Images/logo.png")} alt="home" />
            </a>
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/work">Work</NavLink>
          </Nav>
        </Container>
      </Navbar>
      {/* <nav>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/">Logo/Home</NavLink>
      </nav> */}
    </div>
  );
}

export default Header;
