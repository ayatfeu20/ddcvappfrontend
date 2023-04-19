import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Checkbox } from "pretty-checkbox-react";
import "@djthoms/pretty-checkbox";
import logo from "../images/DigiDiv.jpeg";
import UserServices from "./UserServices";
import FadeIn from "react-fade-in";
import { Link } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      const userinfo = JSON.parse(localStorage.getItem("user") ?? "{}");
      isAuthenticated(userinfo);
    }
  });

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [incorrectPassword, setIncorrectPassword] = useState(false);

  function isAuthenticated(user) {
    if (
      JSON.parse(localStorage.getItem("isadmin") ?? "{}") === true &&
      JSON.parse(localStorage.getItem("token") ?? "{}")
    ) {
      navigate("/admin");
    } else if (
      JSON.parse(localStorage.getItem("isadmin")) === false &&
      JSON.parse(localStorage.getItem("token"))
    ) {
      navigate("/employee/" + user._id);
    }
  }

  const handleChange = (e) => {
    setemail({
      ...email,
      [e.target.name]: e.target.value,
    });
    setpassword({
      ...password,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    UserServices.handleLogin(
      email,
      password,
      isAuthenticated,
      setIncorrectPassword
    );
  };

  return (
    <div className="login align-items-center d-flex justify-content-center container">
      <div className="wide card border-0 box-shadow">
        <FadeIn>
          <div className="m-5">
            <div className="mb-5 d-flex justify-content-center">
              <img
                src={logo}
                className="logo-big"
                alt="Digital Dividend Logo"
              />
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <div className="inputField mb-3 d-flex justify-content-center">
                  <input
                    name="email"
                    type="email"
                    className="-width input-style form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={handleChange}
                    placeholder=" "
                  />
                  <span className="emailInput Input">E-mail</span>
                </div>
                <div id="emailHelp" className="form-text"></div>
              </div>
              <div className="mb-3">
                <div className="inputField  d-flex justify-content-center">
                  <input
                    type="password"
                    name="password"
                    className="login-text input-style form-control -width"
                    id="exampleInputPassword1"
                    onChange={handleChange}
                    placeholder=" "
                  />
                  <span className="passwordInput Input">Password</span>
                </div>

                {incorrectPassword ? (
                  <small className="ps-1 incorrect-text">
                    Email or password is incorrect!
                  </small>
                ) : null}
                <div className="remember mt-1 d-flex justify-content-between">
                  <div className="ms-1">
                    <Checkbox
                      color="primary-o"
                      className="small-font"
                      shape="round"
                    >
                      Remember me
                    </Checkbox>
                  </div>
                  {/* <div>
                    <small className="small-font pointer">
                      Forgot password?
                    </small>
                  </div> */}
                </div>
              </div>

              <button
                type="submit"
                className="p-3 login-text btn-color btn -width btn-primary"
              >
                Sign In
              </button>
              <div className="mt-2 d-flex justify-content-center">
                <small className="not-member">
                  Not a member?{" "}
                  <Link
                    to="/signup"
                    className="font-medium text-purple-600 hover:text-purple-500"
                  >
                    <span className="pointer signup-link">Sign Up</span>
                  </Link>
                </small>
              </div>
            </form>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Login;
