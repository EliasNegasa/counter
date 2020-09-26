import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ totalCount, user }) => {
  return (
    <ul className="nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/">
          Movies
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/customers">
          Customers
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/rentals">
          Rentals
        </NavLink>
      </li>
      {!user && (
        <React.Fragment>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/register">
              Register
            </NavLink>
          </li>
        </React.Fragment>
      )}
      {user && (
        <React.Fragment>
          <li className="nav-item">
            <NavLink className="nav-link" to="/profile">
              {user.name}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/logout">
              Logout
            </NavLink>
          </li>
        </React.Fragment>
      )}
    </ul>
    // <nav className="navbar navbar-light bg-light">
    //   <span className="navbar-brand mb-0">Navbar</span>
    //   <span className="badge badge-secondary">{totalCount}</span>
    // </nav>
  );
};

export default NavBar;
