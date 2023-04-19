import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";

import logo from "../../images/dd-blue.jpg";

const Navbar = () => {
  let history = useNavigate();
  const logout = () => {
    localStorage.clear();
    history("/");
  };
  const userinfo = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="d-none d-md-block ">
      <div className="sidebar">
        <div className="d-flex justify-content-center mb-3">
          <img src={logo} className="logo-big" alt="Digital Dividend Logo" />
        </div>
        {JSON.parse(localStorage.getItem("isadmin")) === true ? (
          <NavLink
            to="/admin"
            exact="true"
            className={({ isActive }) =>
              "ps-4 nav mb-2 d-flex align-items-center" +
              (isActive ? " selected" : "")
            }
          >
            {" "}
            <i className="me-3 sidebar-logo fas fa-book-open"></i>Employee's
          </NavLink>
        ) : null}
        <NavLink
          to={'/employee/' + userinfo._id} 
          exact="true"
          className={({ isActive }) =>
            "ps-4 nav mb-2 d-flex align-items-center" +
            (isActive ? " selected" : "")
          }
        >
          {" "}
          <i className="me-3 sidebar-logo fas fa-portrait"></i>CV
        </NavLink>

        <NavLink
          to={'/employee/' + userinfo._id + '/edit'}
          exact="true"
          className={({ isActive }) =>
            "ps-4 nav mb-2 d-flex align-items-center" +
            (isActive ? " selected" : "")
          }
        >
          <i className="me-3 sidebar-logo fas fa-pencil-alt"></i>Edit
        </NavLink>
        <NavLink
          onClick={logout}
          className="ps-4 nav mb-2 d-flex align-items-center "
          to="/"
        >
          <i className="me-3 sidebar-logo fas fa-sign-out-alt"></i>Logout
        </NavLink>
      </div>

      <div className="body-text"></div>
    </div>
  );
};

export default Navbar;
