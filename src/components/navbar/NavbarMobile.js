import React  from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import logo from "../../images/dd-blue.jpg";

const NavbarMobile = () => {
  let history = useNavigate();
  const logout = () => {
    localStorage.clear();
    history("/");
  };


  const userinfo = JSON.parse(localStorage.getItem("user"));


  return (
    <div className="d-sm-block d-md-none">
      <nav className="navbar background-project-color sticky">
        <div className="container-fluid">
          <img src={logo} className="logo-small" alt="Digital Dividend Logo" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
                       
          >
            <i className="navbar-toggler-icon project-color-grey d-flex align-items-center justify-content-center fas fa-bars"></i>
          </button>
          <div
            className="offcanvas background-project-color offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            
            
          >
            <div className="offcanvas-header d-flex align-items-start">
              <div>
                <img
                  src={logo}
                  className="logo-big"
                  alt="Digital Dividend Logo"
                />
      
              </div>
              <div>
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
            </div>

            <div className="offcanvas-body p-0">
              
              <ul className="navbar-nav justify-content-end flex-grow-1">
                {JSON.parse(localStorage.getItem("isadmin")) ? (
                  <li className="nav-item">
                    <NavLink
                      to="/admin"
                      exact="true"
                      className={({ isActive }) =>
                        "ps-4 nav mb-2 d-flex align-items-center" +
                        (isActive ? " selected" : "")
                      }
                    >
                      {" "}
                      <i className="me-3 sidebar-logo fas fa-book-open"></i>
                      Employee's
                    </NavLink>
                  </li>
                ) : null}
                <li className="nav-item">
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
                </li>
                <li className="nav-item">
                <NavLink
                    to={'/employee/' + userinfo._id + "/edit"}
                    exact="true"
                    className={({ isActive }) =>
                      "ps-4 nav mb-2 d-flex align-items-center" +
                      (isActive ? " selected" : "")
                    }
                  >
                    <i className="me-3 sidebar-logo fas fa-pencil-alt"></i>Edit
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    onClick={logout}
                    className="ps-4 nav mb-2 d-flex align-items-center "
                    to="/"
                  >
                    <i className="me-3 sidebar-logo fas fa-sign-out-alt"></i>
                    Logout
                  </NavLink>
                </li>
              </ul>
              <form className="d-flex"></form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarMobile;
