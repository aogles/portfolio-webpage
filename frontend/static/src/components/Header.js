import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <nav>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/">Logo/Home</NavLink>
      </nav>
    </div>
  );
}

export default Header;
