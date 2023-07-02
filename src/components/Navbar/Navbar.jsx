import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav
      id="navbar"
      className="navbar navbar-expand-lg bg-body-tertiary fixed-top"
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand schwifty fs-3">
          <img
            src="/images/icon.png"
            alt="Logo"
            height="30"
            className="d-inline-block align-text-top"
          />
          PortalPal
        </Link>
        <button
          className="navbar-toggler shadow-sm"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars open fw-bold text-white"></i>
          <i className="fa-solid fa-xmark close fw-bold text-white"></i>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/characters" className="nav-link">
              Characters
            </NavLink>
            <NavLink to="/locations" className="nav-link">
              Locations
            </NavLink>
            <NavLink to="/episodes" className="nav-link">
              Episodes
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
