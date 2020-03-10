import React, { useState } from "react";
import "./css/style.css";
import signinimage from "./images/signin-image.jpg";
import axios from "axios";
import { Redirect } from "react-router-dom";

import { Link } from "react-router-dom";
const Signin = props => {
  const [signinStatus, setsigninStatus] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  //const [state, setstate] = useState("")
//  console.log("signinstatus", signinStatus);
  const submitHandler = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/auth/login", { email, pass })

      .then(res => {
        if (res.data.token) {
//          console.log(res.data.token);
          localStorage.setItem("token", res.data.token);
          setsigninStatus(true);
        } else {
          localStorage.setItem("token", "");
        }
      });
  };
  //Another way to use with one Hook
  //setstate(prevstate=>({
  //  ...prevstate,
  //  [e.target.value]:e.target.value
  //})
  if (signinStatus) {
    return <Redirect to="/" />;
  } else {
    return (
      <div className="main">
        <section className="signin">
          <div className="container">
            <div className="signin-content">
              <div className="signin-image">
                <figure>
                  <img src={signinimage} alt="sign in" />
                </figure>
              </div>

              <div className="signin-form">
                <h2 className="form-title">Sign in</h2>
                <form
                  method="POST"
                  className="register-form"
                  id="login-form"
                  onSubmit={e => submitHandler(e)}
                >
                  <div className="form-group">
                    <label htmlFor="email">
                      <i className="zmdi zmdi-account material-icons-name"></i>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={email}
                      onChange={e => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pass">
                      <i className="zmdi zmdi-lock"></i>
                    </label>
                    <input
                      type="password"
                      name="pass"
                      id="pass"
                      placeholder="Password"
                      value={pass}
                      onChange={e => {
                        setPass(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group form-button">
                    <input
                      type="submit"
                      name="signin"
                      id="signin"
                      className="form-submit"
                      value="Sign in"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
};

export default Signin;
