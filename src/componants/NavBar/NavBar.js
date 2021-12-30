import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Authcontext from "../auth/Auth";
const Navbar = (props) => {
  const ctx = useContext(Authcontext);
  return (
    <nav className="navbar navbar-expand-sm bg-dark_blue navbar-dark">
      <Link className="navbar-brand" to="/">
        <h1>Facebook</h1>
      </Link>

      <ul className="navbar-nav text-white ml-auto">
        <li className="nav-item">
          <Link to="/update" className="nav-link" onClick={props.onUpdate}>
            Update
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/delete" onClick={props.onDelete}>
            Delete
          </Link>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            onClick={() => {
              ctx.onLogout();
            }}
            href=""
          >
            Logout
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
